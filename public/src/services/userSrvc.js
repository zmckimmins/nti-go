angular.module('ntigo')
.service('userService', function($http, $state, $q, $cookies) {

  this.addUser = function(newUser) {
    var defer = $q.defer();
    $http({
        method: 'POST',
        url: '/api/users',
        data: newUser
      })
      .then(function(res) {
        defer.resolve(res.data);
        $state.go('clockin');
      }, function(err) {
        defer.reject(err);
      });
    return defer.promise;
  };

  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: '/api/users',
    });
  };

  this.getUserShifts = function() {
    return $http({
      method: 'GET',
      url: '/api/user/shifts'
    });
  };

  this.login = function(query) {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: '/api/user?email=' + query,
      })
      .then(function(res) {
        var user = res.data;
        $cookies.putObject('user', user);
        deferred.resolve(user);
      }, function(err) {
        deferred.reject(err);
      });
      return deferred.promise;
  };

  this.getUserById = function(id) {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: '/api/user/' + id,
      })
      .then(function(res) {
        var user = res.data;
        deferred.resolve(user);
      }, function(err) {
        deferred.reject(err);
      });
    return deferred.promise;
  };

  //this might not be working. can't get it to work in postman
  this.getUserByName = function(name) {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: '/api/user/' + name,
      })
      .then(function(res) {
        // console.log(res.data);
        deferred.resolve(res.data);
      }, function(err) {
        deferred.reject(err);
      });
    return deferred.promise;
  };

  this.editUser = function(id, updatedUser) {
    // console.log(id, updatedUser);
    return $http({
      method: 'PUT',
      url: '/api/user/' + id,
      data: updatedUser
    });
  };
});
