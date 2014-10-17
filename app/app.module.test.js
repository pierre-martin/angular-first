(function () {

  describe("Testing Modules", function () {
    describe("myApp Module:", function () {

      var module;
      beforeEach(function () {
        module = angular.module("myApp");
      });

      it("should be registered", function () {
        expect(module).not.toEqual(null);
      });

      describe("Dependencies:", function () {

        var deps;
        var hasModule = function (m) {
          return deps.indexOf(m) >= 0;
        };
        beforeEach(function () {
          deps = module.value('appName').requires;
        });

        //you can also test the module's dependencies
        it("should have myApp.htmlElements as a dependency", function () {
          expect(hasModule('myApp.htmlElements')).toEqual(true);
        });

        it("should have myApp.comments as a dependency", function () {
          expect(hasModule('myApp.comments')).toEqual(true);
        });
      });
    });
  });
})();