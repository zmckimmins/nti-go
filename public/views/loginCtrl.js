angular.module('ntigo').controller('loginCtrl', function($scope, userService, $state) {

  $scope.login = function(email, password){
    userService.login(email, password);
  };
});
