(function () {
  'use strict';


  xdescribe('myApp.htmlElements module', function () {

    beforeEach(module('myApp.htmlElements'));

    describe('htmlElements service', function () {

      var controller;
      var scope;
      var htmlElementsService;
      var el1 = { name: 'el1' };
      var el2 = { name: 'el2' };
      var data = [el1, el2];
      var deferred;

      beforeEach(inject([
        '$controller',
        '$rootScope',
        '$q',
        function ($controller, $rootScope, $q) {
          scope = $rootScope.$new();
          htmlElementsService = {
            getElements: function () {
              deferred = $q.defer();
              return deferred.promise;
            }};
          controller = $controller('htmlElementsController', {
            $scope: scope,
            htmlElementsService: htmlElementsService
          });
        }]));

      it('should be defined.', inject(function () {
        expect(controller).toBeDefined();
      }));

      it('should return all the HTML elements to be displayed.', inject(function () {
        spyOn(controller, 'getElements').andCallThrough();
        deferred.resolve(data);
        expect(controller.comments).toBeDefined();
        expect(controller.comments.length).toEqual(data.length);
      }));
    });
  });
})();