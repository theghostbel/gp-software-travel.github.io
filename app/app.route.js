;
(function() {
  'use strict';

  angular
    .module('gpApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

          .state('app', {
                url: '/',
                template: '<h2> It is the main page </h2>'
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