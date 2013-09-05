angular.module('myApp', ['ngRoute', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    template: '',
    controller: 'MainController'
  })
  .when('/login', {
    template: '',
    controller: 'LoginController'
  })
  .otherwise({redirectTo: '/'});
}]);