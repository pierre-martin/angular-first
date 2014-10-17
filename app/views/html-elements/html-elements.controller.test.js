(function () {
  'use strict';


  describe('myApp.htmlElements module', function () {

    beforeEach(module('myApp.htmlElements'));

    describe('htmlElements controller', function () {

      var controller;
      var scope;
      var htmlElementsService = {};
      var el1 = { name: 'el1' };
      var el2 = { name: 'el2' };
      var data = [el1, el2];

      beforeEach(inject([
        '$controller',
        '$rootScope',
        '$q',
        function ($controller, $rootScope, $q) {
          scope = $rootScope.$new();

          htmlElementsService.getElements = jasmine.createSpy('getElements');
          var deferred = $q.defer();
          deferred.resolve(data);
          htmlElementsService.getElements.andReturn(deferred.promise);
          controller = $controller('htmlElementsController', {
            $scope: scope,
            htmlElementsService: htmlElementsService
          });
      }]));

      it('should be defined.', function () {
        expect(controller).toBeDefined();
      });

      it('should return all the HTML elements to be displayed.', function () {
        // scope.$digest() will fire watchers on current scope, in short will
        // run the callback function in the controller that will set the
        // elements to be displayed.
        // see http://nadeemkhedr.wordpress.com/2013/10/18/angularjs-good-unit-test-structure-for-controllers/
        scope.$digest();
        expect(controller.elements).toBeDefined();
        expect(controller.elements.length).toEqual(data.length);
      });
    });
  });
})();