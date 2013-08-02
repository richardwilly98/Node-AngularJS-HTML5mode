'use strict';

angular.module('NodeAngularJSHTML5modeApp')
  .controller('MainCtrl', function ($scope, $routeParams) {
    $scope.param = $routeParams.param;
  });
