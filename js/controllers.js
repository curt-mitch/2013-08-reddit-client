var redditUrl = 'http://www.reddit.com/r/pics.json';

angular.module('myApp.controllers', [])
.controller('MainController', function($scope, $http) {
    $scope.add = function(item) {
      if (item.hasOwnProperty("counter")) {
        item.counter++;
      } else {
        item.counter = 0;
      }
    };
    $scope.subtract = function(item) {
      if (item.hasOwnProperty("counter")) {
        item.counter--;
      } else {
        item.counter = 0;
      }
    };
    $http({
      method: 'JSONP',
      url: redditUrl + '?jsonp=JSON_CALLBACK'
    }).success(function(data, status){
      $scope.news = data.data.children;
    });
});