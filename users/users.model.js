const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
	'username': {
        type: String,
        required: true,
        unique: true,
        index: true
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
        unique: true,
        index: true
      }
});

userSchema.methods.validPassword = function(password){
  return (this.password === password);
};

let User = mongoose.model('User', userSchema);

module.exports = User;
