'use strict';

angular.module('myApp.htmlElements')
  .controller('htmlElementsController', [
    '$scope',
    'htmlElementsService',
    function ($scope, htmlElementsService) {
      // Just some funny data...
      var controller = this;
      getElements();

      function getElements() {
        return htmlElementsService.getElements().then(function (promise) {
          controller.elements = promise.elements;
        });
      }
  }]);