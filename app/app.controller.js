;

  'use strict';

  angular.module('gpApp')
    .controller('socialController', ['$scope', 'socialService', function($scope, socialService) {

        $scope.selectedUser = {name:'', age:'', userpic: '', gender: ''};
        var userID = 1;

        socialService.getUsers().then(successCallback, errorCallback);

        function successCallback(response){
          $scope.selectedUser = response.data[userID];
          console.log('USERS', $scope.selectedUser);

        }
        function errorCallback(response){
          return  "Error: " + response.status + " " + response.statusText;
        }



      }]);

