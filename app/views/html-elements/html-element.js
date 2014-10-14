'use strict';

angular.module('myApp.htmlElement', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/html-element', {
      templateUrl: 'app/views/html-elements/html-element.html',
      controller: 'View2Ctrl',
      controllerAs: 'controller'
    });
  }]);
