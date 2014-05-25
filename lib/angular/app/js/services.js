'use strict';

var myAppServices = angular.module('myApp.services', ['ngResource']);

myAppServices.factory("Buddy", function($resource, $http) {
  return $resource("/buddies/:id.json", {
    id: "@id"
  }, {
    'create': {
      method: 'POST'
    },
    'index': {
      method: 'GET',
      isArray: true,
      transformResponse: $http.defaults.transformResponse.concat([
        function(data, headersGetter) {
          return data.buddies;
        }
      ])
    },
    'show': {
      method: 'GET',
      isArray: false
    },
    'update': {
      method: 'PUT'
    },
    'destroy': {
      method: 'DELETE'
    }
  });
});
