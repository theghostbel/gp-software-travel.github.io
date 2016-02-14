;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('socialController', socialController);

  function socialController(socialService) {

    var vm = this;

    socialService.getUser().then(successCallback, errorCallback);

    function successCallback(response) {
      vm.user = response.data;
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }

    vm.updateUser = function updateUser() {
      var data = {};

      for (var key in vm.user) {
        data[key] = vm.user[key];
      }

      socialService.setUser(data);
    }
  }
})();