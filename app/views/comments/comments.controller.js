(function () {
  angular.module('myApp.comments').controller('commentsController', [
    '$scope',
    'commentsService',
    function ($scope, commentsService) {
      var controller = this;
      this.comments = [];
      this.submit = submit;

      function submit() {
        var comment = {
          author: controller.author,
          emailAddress: controller.emailAddress,
          content: controller.content
        };
        commentsService.addComment(comment).then(function () {
          controller.comments.push(comment);
          controller.author = null;
          controller.emailAddress = null;
          controller.content = null;
          $scope.commentForm.$setPristine();
        });
      }
    }]);
})();
