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
    vm.saveChanges = saveChanges;

    $scope.$watchCollection('social.user', function() {
      saveChanges();
    });

    socialService.getUser().then(successCallbackGet, errorCallback);

    function updateUser() {
      vm.showAnimation = true;
      vm.isDisabled = true;

      $timeout(function() {
        vm.showAnimation = !vm.showAnimation;
      }, 2000);

      socialService.setUser(userID, vm.user).then(successCallbackPut, errorCallback);
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

    function saveChanges() {
      if (vm.editForm.$dirty) {
        vm.isDisabled = false;
      } else {
        vm.isDisabled = true;
      }
    }
  }
})();