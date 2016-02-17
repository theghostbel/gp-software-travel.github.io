/**
 * Created by k_zenchyk on 2/17/16.
 */
;
(function() {
    'use strict';

    angular.module('gpApp')
        .controller('NavbarController', NavbarController);

        function NavbarController($scope, $state){
            var vm = this;
            $scope.navbar = 'Hi, User! Find NavBar here';

        }

})();
