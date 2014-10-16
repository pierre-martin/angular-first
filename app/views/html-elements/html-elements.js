(function() {

  'use strict';

  angular.module('myApp.htmlElements', [
    'ngRoute'
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/html-elements', {
        templateUrl: 'app/views/html-elements/html-elements.html',
        controller: 'htmlElementsController',
        controllerAs: 'controller'
      })
      .when('/html-elements/:name', {
        templateUrl: 'app/views/html-elements/html-element.html',
        controller: 'htmlElementController',
        controllerAs: 'controller'
      });
  }]);
})();
