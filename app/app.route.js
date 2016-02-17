;
(function() {
  'use strict';

  angular
    .module('gpApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

          .state('app', {
                url: '/',
                templateUrl: './login/login.html',
                controller: 'loginController'
            })

        .state('profile', {
          url: '/profile',
          templateUrl: './profile/profile.html',
          controller: 'profileController',
          controllerAs: 'profile'
        });

      $urlRouterProvider.otherwise("/");
    });

})();