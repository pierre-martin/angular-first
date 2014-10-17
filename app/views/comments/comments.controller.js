(function () {
  angular.module('myApp.comments').controller('commentsController', [
    '$scope',
    'commentsService',
    function ($scope, commentsService) {
      var controller = this;
      this.comment = {
        author: '',
        emailAddress: '',
        content: ''
      };
      this.originalComment = angular.copy(this.comment);
      this.comments = [];
      this.submit = submit;

      function submit() {
        var comment = {
          author: controller.comment.author,
          emailAddress: controller.comment.emailAddress,
          content: controller.comment.content
        };
        commentsService.addComment(comment).then(function () {
          controller.comments.push(comment);
          resetForm();
        });
      }

      function resetForm() {
        controller.comment = angular.copy(controller.originalComment);
        $scope.commentForm.$setPristine();
      }
    }]);
})();
