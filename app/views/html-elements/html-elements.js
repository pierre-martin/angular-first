'use strict';

angular.module('myApp.htmlElements', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/html-elements', {
    templateUrl: 'app/views/html-elements/html-elements.html',
    controller: 'View1Ctrl',
    controllerAs: 'controller'
  });
}])

.controller('View1Ctrl', [function() {

}]);
