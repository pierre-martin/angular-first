'use strict';

angular.module('myApp.htmlElements')
  .controller('htmlElementsController', [
    '$scope',
    'htmlElementsService',
    function ($scope, htmlElementsService) {
      // Just some funny data...
      this.elements = getElements();

      function getElements() {
        return htmlElementsService.getElements();
      }
  }]);