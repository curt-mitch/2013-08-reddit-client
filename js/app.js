angular.module('myApp', ['ngRoute', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'MainController'
  })
  .when('/login', {
    template: '<h1>Login</h1>',
    controller: 'LoginController'
  })
  .otherwise({redirectTo: '/'});
}]);