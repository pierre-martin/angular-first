(function () {
  angular.module('myApp.comments', [
    'ngRoute',
    'ngMessages'
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/comments', {
      templateUrl: 'app/views/comments/comments.html',
      controller: 'commentsController',
      controllerAs: 'controller'
    });
  }]);
})();
