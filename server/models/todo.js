const mongoose = require('mongoose')


const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number
  },
  _creator: {
    required: true,
    type: mongoose.Schema.Types.ObjectId
  }
});

module.exports = {
  Todo
}
