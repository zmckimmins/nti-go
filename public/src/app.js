angular.module('ntigo', ['ui.router', 'ngCookies', 'uiRouterStyles', 'ui.grid'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('clockin', {
        url: '/clockin',
        templateUrl: './views/clockin.html',
        controller: 'clockinCtrl',
        data: {
          css: ['./css/main.css']
        },
        // resolve: {
        //   user: function($cookies, $location){
        //     var authedUser = $cookies.getObject("user");
        //     console.log("app.js", authedUser);
        //     if (!authedUser) {
        //       console.log("Rejected! You shall not pass!");
        //       $location.url('/login');
        //     }
        //     else {
        //       console.log("Proceed", authedUser);
        //       return authedUser;
        //     }
        //   }
        // }
      })
      .state('login', {
        url: '/login',
        templateUrl: './views/loginTmpl.html',
        controller: 'userCtrl',
        data: {
          css: ['./css/main.css']
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: './views/regTmpl.html',
        controller: 'regCtrl',
        data: {
          css: ['./css/main.css']
        }
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '../admin.html',
        controller: 'adminCtrl',
        data: {
          css: ['./css/styles.css', 'bower_components/bootstrap/dist/css/bootstrap.min.css']
        },
        resolve: {
          admin: function($cookies, $state, $location) {
            var user = $cookies.getObject("user");
            console.log(user);
            if (!user.admin) {
              console.log("Rejected! You shall not pass!");
              $location.url('/clockin');
            }
            else {
              console.log("Proceed");
            }
            // return true;
          }
        }
      });
    $urlRouterProvider.otherwise('/clockin');
  });
