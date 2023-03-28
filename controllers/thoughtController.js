const { Thought, User, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .populate('reactions')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
    .then((thought) => {
        User.findOneAndUpdate( 
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } }
  )
    .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: 'This username does not exist' });
        } else {
          console.log(userData);
          res.json(thought);
        }
    })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      })
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.deleteMany({ _id: { $in: thought.users } })
      )
      .then(() => res.json({ message: 'Thought has been deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Create a reaction
  createReaction(req, res) {
    Reaction.create(req.body)
    .then((reaction ))
    console.log('You have created a reaction!');
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId},
      { $addToSet: { reactions: reaction._id } } ,
    )
      .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ messages: "No thought found with that ID :("})
        : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  
    //Delete a reaction
  removeReaction (req, res) {
    console.log('You have removed your reaction!')
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId},
      { $pull: { reaction: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ messages: "No thought found with that ID :("})
        : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};

