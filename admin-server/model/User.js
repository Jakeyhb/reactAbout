const { model } = require('mongoose');

module.exports = model('user', {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    required: true
  }
});