;

  'use strict';

  angular.module('gpApp')
    .controller('socialController', ['$scope', 'socialService', function($scope, socialService) {

        socialService.getUsers().then(successCallback, errorCallback);

        $scope.selectedUser = {name:'', age:'', userpic: '', gender: ''};
        var userID = 1;
        function successCallback(response){
          var user = response.data[userID];
          console.log('USERS', $scope.selectedUser);
          $scope.selectedUser = user;
        }
        function errorCallback(response){
          return  "Error: " + response.status + " " + response.statusText;
        }

        //$scope.allusers = socialService.getUsers();

        //$scope.all = $scope.allusers.data;


        //console.log('ALL', $scope.all);
      }]);

