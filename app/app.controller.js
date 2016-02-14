;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('socialController', socialController);

  function socialController(socialService) {

    var vm = this;
    var userID = 1;

    socialService.getUser().then(successCallbackGet, errorCallback);

    vm.updateUser = function updateUser() {
        var data = vm.user;
        console.log('update', vm.user);
        socialService.setUser(userID, data).then(successCallbackPut, errorCallback);
    };


    function successCallbackGet(response) {
      vm.user = response.data[userID];
    }

    function successCallbackPut(response) {
      return response.data;
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }
  }
})();