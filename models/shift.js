var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var shiftSchema = new mongoose.Schema({
  clockin: {type: String},
  clockout: {type: String},
  duration: {type: String},
  locations: {type: Schema.Types.ObjectId, ref: 'Locations'} //send only the mondoid to the database
});

module.exports = mongoose.model('Shift', shiftSchema);
