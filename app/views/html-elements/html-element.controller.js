(function () {
  'use strict';

  angular.module('myApp.htmlElements')
    .controller('htmlElementController', [
      '$scope',
      '$routeParams',
      'htmlElementsService',
      function ($scope, $routeParams, htmlElementsService) {
        // Just some funny data...
        var controller = this;
        var name = $routeParams.name;
        getElement(name);

        function getElement(name) {
          htmlElementsService.getElement(name).then(function (element) {
            controller.name = element.name;
            controller.display = element.display;
            controller.description = element.description;
//          controller.templateExample = element.templateExample;
          });
        }
      }]);
})();