;
(function() {
  'use strict';

  angular
    .module('gpApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('profile', {
          url: '/',
          templateUrl: '/profile/profile.html',
          controller: 'profileController',
          controllerAs: 'profile'
        })

      $urlRouterProvider.otherwise("/");
    });

})();