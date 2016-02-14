;
(function() {
  angular
    .module('gpApp')
    .service('socialService', ['$http', function($http) {
      var baseURL = 'http://localhost:3000/users';

      this.getUser = function() {
        return $http.get(baseURL);
      };

      this.setUser = function(id, data) {
        return $http.put(baseURL + "/" + id, data);
      };
    }]);
})();