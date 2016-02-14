;
(function() {
  'use strict';

  angular.module('gpApp')
    .controller('socialController', ['$scope', 'socialService', function($scope, socialService) {

      $scope.selectedUser = {
        name: '',
        age: '',
        userpic: '',
        gender: ''
      };

      socialService.getUsers().then(successCallback, errorCallback);

      function successCallback(response) {
        $scope.selectedUser = response.data;
      }

      function errorCallback(response) {
        return "Error: " + response.status + " " + response.statusText;
      }

      $scope.updateUser = function updateUser() {
        var data = {};
        data.name = $scope.selectedUser.name;
        data.age = $scope.selectedUser.age;
        data.image = $scope.selectedUser.image;
        data.gender = $scope.selectedUser.gender;

        socialService.setUser(data);
      }

    }]);
})();