'use strict';

angular.module('myApp')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/html-elements'});
    }]);