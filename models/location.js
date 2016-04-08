var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
  business: {type: String},
  projectname: {type: String},
  city: {type: String, unique: true, required: true, index: true},
  state: {type: String, required: true},
  zip: {type: Boolean, required:true, default: false}
});

module.exports = mongoose.model('Location', locationSchema);
