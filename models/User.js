var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstname: {type: String},
  lastname: {type: String},
  email: {type: String, unique: true, required: true, index: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
