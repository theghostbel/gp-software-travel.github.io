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
              'content@': {
                templateUrl: 'profile/profile.html',
                controller: 'profileController',
                controllerAs: 'profile'
              }
            }
          });

      /*  .state('profile', {
          url: '/profile',
          templateUrl: './profile/profile.html',
          controller: 'profileController',
          controllerAs: 'profile'
        });*/

      $urlRouterProvider.otherwise("/");
    });

})();