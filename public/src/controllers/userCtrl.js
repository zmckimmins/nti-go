angular.module('ntigo').controller('userCtrl', function($scope, userService, $state, $cookies) {

  $scope.user = $cookies.getObject('user');

  $scope.login = function(user) {
    console.log('Logging In', user);
    userService.login(user.email)
      .then(function(res) {
        if (res) {
          $scope.user = $cookies.getObject('user');
          console.log(user.name + 'is logged in.', $scope.user);
          $state.go('/home');
        } else {
          console.log('Error');
        }
      });
  };

  $scope.logout = function(user) {
    console.log('Logged Out');
    $scope.user = {};
    $cookies.remove('user');
    $state.go('/signin');
  };

  $scope.findUsers = function() {
    userService.getUsers()
      .then(function(res) {
        $scope.users = res.data;
        console.log($scope.users);
      });
  };
});
