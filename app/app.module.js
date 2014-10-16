(function() {
  'use strict';

  // Declare app level module which depends on views, and components
    angular.module('myApp', [
      'ngRoute',
      'ngResource',
      'myApp.htmlElements',
      'myApp.comments',
      'myApp.version'
    ]);
})();
