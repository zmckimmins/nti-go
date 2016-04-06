angular.module('ntigo', ['ui.router', 'ngCookies'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('clockin',{
      url: '/clockin',
      templateUrl: './views/clockin.html',
      controller: 'clockinCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/loginTmpl.html',
      controller: 'userCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/regTmpl.html',
      controller: 'regCtrl'
    });
  $urlRouterProvider.otherwise('/clockin');
});
