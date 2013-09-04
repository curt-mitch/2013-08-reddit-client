var redditUrl = 'http://www.reddit.com/r/pics.json';

angular.module('myApp.controllers', [])
.controller('MainController', function($scope, $http) {
    $http({
      method: 'JSONP',
      url: redditUrl + '?jsonp=JSON_CALLBACK'
    }).success(function(data, status){
      $scope.news = data.data.children;
    });
});