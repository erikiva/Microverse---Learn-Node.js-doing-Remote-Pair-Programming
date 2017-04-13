const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
	'username': {
        type: String,
        required: true,
        unique: true
      },
	'fullname': {
        type: String,
        required: true
      },
	'password': {
        type: String,
        required: true
      },
	'email': {
        type: String,
        required: true,
        unique: true
      }
});

let User = mongoose.model('User', userSchema);

module.exports = User;
