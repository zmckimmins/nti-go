var mongoose = require('mongoose');

var shiftsSchema = new mongoose.Schema({
  clockin: {type: String},
  clockout: {type: String},
  duration: {type: String},
  location: {type: Schema.Types.ObjectId, ref: 'Location'} //send only the mondoid to the database
});

module.exports = mongoose.model('Shifts', shiftsSchema);
