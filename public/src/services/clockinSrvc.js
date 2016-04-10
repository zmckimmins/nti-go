angular.module('ntigo').service('clockinSrvc', ['$cookies','$http', function($cookies, $http) {
  var user = $cookies.getObject('user');

  this.timeSchedule = {
    history: [],
  };

  this.addDuration = function(data){
    console.log("data", data);
      return $http({
        method: "POST",
        url:  '/api/user/' + user._id + '/shift',
        data: {
          "clockin": data[0],
          "clockout": data[1],
          "duration": data[2]
        }
      });
  };

}]);
