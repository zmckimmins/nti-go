var mongoose = require('mongoose');
var User = require('../models/User');

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
    }).populate('shifts').then(function(user, err){
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

  //need to refractor below code
  updateUser: function(req, res) {
    User.update({_id: req.params.id}, req.body).exec().then(function(result) {
      return res.send('User has been updated');
    }).then(null, function(err) {
      return res.status(500).json(err);
    });
  },
};
