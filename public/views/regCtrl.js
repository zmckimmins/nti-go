angular.module('ntigo').controller('regCtrl', function($scope, userService, $state) {

  $scope.addUser = function(newUser){
    userService.addUser(newUser);
  };
});
