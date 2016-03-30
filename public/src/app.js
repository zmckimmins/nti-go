angular.module('ntigo', ['ui.router', 'firebase'])
.constant('fb', {
  url: 'https://ntigo.firebaseio.com/'
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: './views/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/loginTmpl.html',
      controller: 'loginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/regTmpl.html',
      controller: 'regCtrl'
    });
  $urlRouterProvider.otherwise('/home');
});
