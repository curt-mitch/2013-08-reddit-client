angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'MainController'
  })
  .when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  })
  .otherwise({redirectTo: '/'});
}]);