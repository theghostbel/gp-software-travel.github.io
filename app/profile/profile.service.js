;
(function() {
  angular
    .module('gpApp')
    .service('profileService', ['$http', function($http) {
      var baseURL = 'http://fathomless-everglades-3680.herokuapp.com/api/user/2';

    // TODO Store profile, use defered promise return
      this.getUser = function() {
        return $http.get(baseURL);
      };

      this.setUser = function(data) {
        return $http.post(baseURL, data);
      };
    }]);
})();
