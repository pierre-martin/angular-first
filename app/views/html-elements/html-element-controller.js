'use strict';

angular.module('myApp.htmlElements')
  .controller('htmlElementController', [
    '$scope',
    function ($scope) {
      // Just some funny data...
      this.name = 'the-name';
      this.display = 'block';
      this.description = 'I\'m a block element that rocks! And I guess that\'s enough for now.';
      this.templateExample = '<the-name>Yeah! I\'m the template!</the-name>';
  }]);