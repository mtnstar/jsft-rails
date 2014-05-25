'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('BuddiesCtrl', ['$scope', 'Buddy', function($scope, Buddy) {
    $scope.buddies = Buddy.index();
  }])
  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);
