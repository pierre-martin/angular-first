'use strict';

angular.module('myApp.htmlElements')
  .factory('htmlElementsService', [
  '$resource',
  function ($resource) {
    return $resource('json/html-elements.json', {}, {
      getElements: { method: 'GET', params: {}, isArray: true }
    });
  }]);