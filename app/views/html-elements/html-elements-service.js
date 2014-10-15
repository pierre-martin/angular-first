'use strict';

angular.module('myApp.htmlElements')
  .factory('htmlElementsService', [
  '$http',
  '$q',
  '$log',
  function ($http, $q, $log) {
    var service = {
      getElements: getElements,
      getElement: getElement
    };
    return service;

    function getElements() {
      var deferred = $q.defer();
      $http.get('json/html-elements/elements.json')
        .success(function (data) {
          deferred.resolve({ elements: data });
        })
        .error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
      return deferred.promise;
    }

    function getElement(name) {
      var deferred = $q.defer();
      $http.get('json/html-elements/' + name + '.json')
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
      return deferred.promise;
    }

  }]);