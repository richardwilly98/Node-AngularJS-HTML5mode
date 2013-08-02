'use strict';

angular.module('NodeAngularJSHTML5modeApp', [])
  .config(function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foo/bar/baz', {
        templateUrl: '/views/foo/bar/baz/baz.html',
        controller: 'MainCtrl'
      })
      .when('/foo/bar/baz/:param', {
        templateUrl: '/views/foo/bar/baz/baz.html',
        controller: 'MainCtrl'
      })
      .when('/foo/bar', {
        templateUrl: '/views/foo/bar/bar.html',
        controller: 'MainCtrl'
      })
      .when('/foo/bar/:param', {
        templateUrl: '/views/foo/bar/bar.html',
        controller: 'MainCtrl'
      })
      .when('/foo', {
        templateUrl: '/views/foo/foo.html',
        controller: 'MainCtrl'
      })
      .when('/foo/:param', {
        templateUrl: '/views/foo/foo.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
