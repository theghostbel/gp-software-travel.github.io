;

  angular
    .module('gpApp')
    .service('socialService', ['$http', function($http){
        var baseURL = 'http://localhost:3000/users';

        this.getUsers = function() {
           return $http.get(baseURL);
        };

      }]);
