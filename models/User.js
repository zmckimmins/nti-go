var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  firstname: {type: String},
  lastname: {type: String},
  email: {type: String, unique: true, required: true, index: true},
  password: {type: String, required: true},
  admin: {type: Boolean, required:true, default: false},
  shift: [{ type: Schema.Types.ObjectId, ref: 'Shift' }]
});

module.exports = mongoose.model('User', userSchema);
