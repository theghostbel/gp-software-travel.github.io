;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('profileController', profileController);

  function profileController($scope, profileService, $timeout) {

    var vm = this;
    var userID = 1;

    // vm.user = {
    //   avatar: "123",
    //   firstName: "Jis",
    //   lastName: 'As',
    //   age: 18,
    //   gender: ['F']
    // }

    vm.updateUser = updateUser;
    vm.processingAnimate = false;

    profileService.getUser().then(successCallbackGet, errorCallback);

    function updateUser() {
      vm.processingAnimate = true;
      vm.editForm.$setPristine();
      vm.user.age = parseInt(vm.user.age);

      $timeout(function() {
        vm.processingAnimate = !vm.processingAnimate;
      }, 2000);
      console.log(vm.user)
      profileService.setUser(vm.user).then(successCallbackPut, errorCallback);
    }

    function successCallbackGet(response) {
      vm.user = response.data;
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