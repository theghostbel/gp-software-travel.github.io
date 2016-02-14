;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('socialController', socialController);

  function socialController(socialService) {

    var vm = this;
    var userID = 1;

    socialService.getUser().then(successCallback, errorCallback);

    function successCallback(response) {
      vm.user = response.data[userID];
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }

    vm.updateUser = function updateUser() {

      var data = vm.user;
      socialService.setUser(userID, data);
    }
  }
})();