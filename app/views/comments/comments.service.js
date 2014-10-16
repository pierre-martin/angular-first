(function() {
  angular.module('myApp.comments').factory('commentsService', [
    '$q',
    '$log',
    '$timeout',
    function ($q, $log, $timeout) {

      var service = {
        addComment: addComment
      };

      return service;

      function addComment(comment) {
        $log.log('Adding comment '+comment);
        // API call...
        var deferred = $q.defer();

        $timeout(function () {
          return deferred.resolve(comment);
        }, 100);

        return deferred.promise;
      }
    }]);
})();