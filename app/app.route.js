;
(function() {
  'use strict';

  angular
    .module('gpApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('login', {
          url: '/',
          //controller: 'loginPageController',
          views: {
            'navbar': {
              templateUrl: 'navbar/navbar.html',
              controller: 'NavbarController'
            },
            'content': {
              templateUrl: 'login/login.html',
              controller: 'loginController'
            }
          }
        })

          .state('profile', {
            url: '/profile',
            views: {
              'navbar@': {},
              'content@': {
                templateUrl: 'profile/profile.html',
                controller: 'profileController',
                controllerAs: 'profile'
              }
            }
          });

  /*      $stateProvider
    .state('app', {
      url: '',
      controller: 'AppCtrl',
      views: {
        'navbar': {
          templateUrl: 'js/core/templates/navbar.tpl.html',
          controller: 'NavbarCtrl'
        },
        'main': {
          templateUrl: 'js/core/templates/main.tpl.html'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/templates/home.tpl.html',
      controller: 'HomeCtrl'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'js/main/templates/about.tpl.html',
      controller: 'AboutCtrl'
    })*/

      $urlRouterProvider.otherwise("/");
    });

})();