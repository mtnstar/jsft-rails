'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('BuddiesCtrl', ['$scope', 'Buddy', function($scope, Buddy) {
    $scope.buddies = Buddy.index();

    $scope.createBuddy = function() {
      var newBuddy = $scope.newBuddy;
      Buddy.create(newBuddy);
      $scope.buddies.push(newBuddy);
      $scope.newBuddy = new Buddy();
    }

    $scope.deleteBuddy = function(buddy) {
      var index=$scope.buddies.indexOf(buddy)
      $scope.buddies.splice(index,1);  
      Buddy.destroy(buddy); 
    }

    $scope.updateBuddy = function(buddy) {
      Buddy.update(buddy);
    }
  }])
  .controller('AboutCtrl', ['$scope', function($scope) {
}]);
