'use strict';

angular.module('myApp.htmlElement', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/html-element', {
    templateUrl: 'app/views/html-element/html-element.html',
    controller: 'View2Ctrl',
    controllerAs: 'controller'
  });
}])

.controller('View2Ctrl', [function() {

}]);
