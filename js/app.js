var timeline_app = angular.module(
  'angular-timeline-demo', ['ngRoute', 'ngSanitize', 'ngAnimate']
);

var timeline_app2 = angular.module(
  'angular-timeline-demo2', ['ngRoute', 'ngSanitize']
);

[timeline_app, timeline_app2].forEach(function(app) {
  app.config([
    '$routeProvider',
    function($routeProvider) {
      'use strict';

      $routeProvider.when('/', {
        templateUrl: '/templates/list.html',
        controller: 'RootController'
      });

      $routeProvider.when('/item/:itemId', {
        templateUrl: '/templates/item.html',
        controller: 'RootController'
      });
    }]);

  app.controller('RootController', function($scope) {});

  app.controller('ListCtrl', function($scope) {
    $scope.items = timelineItems.sort(function(a,b){
      return b.createdAt - a.createdAt;
    });
  });

  app.controller('ItemsCtrl', function($scope, $route, $routeParams) {
    $scope.item = jQuery.grep(timelineItems, function(item) {
      return item.id.toString() === $routeParams.itemId.toString();
    })[0];
  });
});

timeline_app.controller(
  'AnimateFlavorCtrl',
  function($scope, $rootScope) {
    $rootScope.$on('$locationChangeStart', function(_, _, current) {
      if (current.search(/\/#\/$/) !== -1) {
        $scope.animateFlavor = 'move-to-left';
      } else {
        $scope.animateFlavor = 'move-to-right';
      }
    });
  });
