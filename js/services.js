angular.module('myApp.services', [])
.factory('redditService', ['$http', function($http) {
    var refreshNews = function() {
      return $http({
        method: 'JSONP',
        url: redditUrl + '?jsonp=JSON_CALLBACK'
        });
    };
    return {
      getNews: function() { return refreshNews(); }
    };
  }]);