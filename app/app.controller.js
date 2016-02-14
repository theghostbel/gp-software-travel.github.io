;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('socialController', socialController);

  function socialController($scope, socialService, $timeout) {

    var vm = this;
    var userID = 1;

    vm.updateUser = updateUser;
    vm.showAnimation = false;

    socialService.getUser().then(successCallbackGet, errorCallback);

    function updateUser() {
      vm.showAnimation = true;
      vm.isDisabled = true;

      vm.editForm.$setPristine();

      $timeout(function() {
        vm.showAnimation = !vm.showAnimation;
      }, 2000);

      socialService.setUser(userID, vm.user).then(successCallbackPut, errorCallback);
    };

    function successCallbackGet(response) {
      vm.user = response.data[userID];
      console.log('successCallbackGet:', vm.user);
    }

    function successCallbackPut(response) {
      console.log('successCallbackPut:', response.data);
      return response.data;
    }

    function errorCallback(response) {
      return "Error: " + response.status + " " + response.statusText;
    }

  }
})();