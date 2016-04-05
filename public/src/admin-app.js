angular.module('ntigoAdmin', ['ui.router', 'ngCookies'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('admin',{
      url: '/admin',
      templateUrl: '../admin.html',
      controller: 'adminCtrl'
    });
  $urlRouterProvider.otherwise('/admin');
});
