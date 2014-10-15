'use strict';

describe('myApp.htmlElements module', function() {

  beforeEach(module('myApp.htmlElements'));

  describe('htmlElement controller', function(){

    var scope;

    it('should ....', inject(function($controller) {
      //spec body
      scope = {};
      var view2Ctrl = $controller('htmlElementController', {$scope:scope});
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
