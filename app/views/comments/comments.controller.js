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
      this.submitForm = submitForm;

      function submitForm() {
        commentsService.addComment(controller.comment).then(function () {
          controller.comments.push(controller.comment);
          resetForm();
        });
      }

      function resetForm() {
        controller.comment = angular.copy(controller.originalComment);
        $scope.commentForm.$setPristine();
      }
    }]);
})();
