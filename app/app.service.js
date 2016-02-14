;
(function() {
  angular
    .module('gpApp')
    .service('socialService', ['$http', function($http) {
      var baseURL = 'http://localhost:3000/user/0';

      this.getUsers = function() {
        return $http.get(baseURL);
      };

      this.setUser = function(data) {
        return $http.put(baseURL, data);
      };

    }]);
})();