'use strict';

angular.module('NodeAngularJSHTML5modeApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foo/bar', {
        templateUrl: 'views/foo/bar/view.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
