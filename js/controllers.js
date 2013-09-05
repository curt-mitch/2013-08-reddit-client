var redditUrl = 'http://www.reddit.com/r/pics.json';

angular.module('myApp.controllers', [])
.controller('MainController', ['$scope', '$http', 'redditService', function($scope, $http, redditService) {
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
  redditService.getNews().success(function(data) {
    $scope.news = data.data.children;
  });
}])
.controller('LoginController', function($scope, $http) {
  $scope.login = "Login here";
});