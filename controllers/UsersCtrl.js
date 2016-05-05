var mongoose = require('mongoose'),
    User = require('../models/User'),
    Locations = require('../models/Locations'),
    Shift = require('../models/Shift'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

module.exports = {

  addUser: function(req, res){
    new User(req.body).save(function(err, user){
      if (err) {
        return res.status(500).send(err);
      }
      res.send(user);
    });
  },

  getUser: function(req, res){
    User.findOne({
      email: req.query.email
    }).then(function(user,err){
      if(err){
      return res.status(500).send(err);
    }
    res.send(user);
  });
  },

  getUserShifts: function(req, res){
    User.find({}).populate('shift').then(function(user, err){
      console.log('User', user);
      if(err){
        return res.status(500).send(err);
      }
      res.send(user);
    });
  },

  getUserById: function(req, res){
    User.findById(req.params.id, function(err,user){
      if(err){
        return res.status(500).send(err);
      }
      res.send(user);
    });
  },

  getUsers: function(req, res){
    User.find({}, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.send(user);
    });
  },

  updateUser: function(req, res) {
    User.update({_id: req.params.id}, req.body).exec().then(function(result) {
      return res.send('User has been updated');
    }).then(null, function(err) {
      return res.status(500).json(err);
    });
  },

  addShift: function(req, res) {
    new Shift(req.body).save(function(err, shift){
      if(err){
        return res.status(501).send(err);
      }
      User.findById(req.params.id, function(error, user){
        if(error){
          return res.status(502).send(error);
        }
        user.shift.push(shift._id);
        user.save(function(errr,result) {
          if(errr){
            return res.status(503).send(errr);
          }
          return res.send(shift);
        });
      });
    });
  },

  //Find shifts by ID
  getShiftById: function(req, res){
    Shifts.findById(req.params.id, function(err,user){
      if(err){
        return res.status(500).send(err);
      }
      res.send(user);
    });
  },

  //Find locations by ID
  getLocationById: function(req, res){
    Locations.findById(req.params.id, function(err,user){
      if(err){
        return res.status(500).send(err);
      }
      res.send(user);
    });
  }

};
