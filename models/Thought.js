const { Schema, model } = require('mongoose');
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
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
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

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
