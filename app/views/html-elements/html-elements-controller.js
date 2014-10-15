'use strict';

angular.module('myApp.htmlElements')
  .controller('htmlElementsController', [
    '$scope',
    function ($scope) {
      // Just some funny data...
      this.elements = [
        { name: 'Tetris', display: 'block', description: 'hey I\'m a block!' },
        { name: 'McLeod', display: 'inline', description: 'hey I\'m inline!' },
        { name: 'Fox', display: 'inline-block', description: 'I\'m an inline-block element!' }
      ];
  }]);