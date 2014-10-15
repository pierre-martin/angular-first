'use strict';

describe('myApp.htmlElements module', function() {

  beforeEach(module('myApp.htmlElements'));

  describe('htmlElements controller', function(){

    var scope;

    it('should ....', inject(function($controller) {
      //spec body
      scope = {};
      var view1Ctrl = $controller('htmlElementsController', {$scope:scope});
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
