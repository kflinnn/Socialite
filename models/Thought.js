const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

//schema to create the thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      get: (date) => timeSince(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
    }
  ]
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

//virtuals for reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return `${this.reactions.length}`;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
