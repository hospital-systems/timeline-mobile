timeline_app = angular.module(
  'angular-timeline-demo', ['ngRoute', 'ngSanitize', 'ngAnimate']
);

timeline_app.config([
  '$routeProvider',
  function($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: '/templates/list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/item/:itemId', {
      templateUrl: '/templates/item.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/menu', {
      templateUrl: '/templates/menu.html',
      controller: 'RootCtrl'
    });
  }]);

timeline_app.controller('RootCtrl', function($scope) {});

timeline_app.controller('ListCtrl', function($scope) {
  $scope.items = timelineItems.sort(function(a,b){
    return b.createdAt - a.createdAt;
  });
});

timeline_app.controller('ItemsCtrl', function($scope, $route, $routeParams) {
  $scope.item = jQuery.grep(timelineItems, function(item) {
    return item.id.toString() === $routeParams.itemId.toString();
  })[0];
});

timeline_app.controller('AnimateFlavorCtrl', function($scope, $rootScope) {
  $rootScope.$on('$locationChangeStart', function(_, _, current) {
    if (current.search(/\/#\/$/) !== -1) {
      $scope.animateFlavor = 'move-to-left';
    } else if (null) {
      $scope.animateFlavor = 'animation-disabled';
    } else {
      $scope.animateFlavor = 'move-to-right';
    }
  });
});

timeline_app.controller('NavigationCtrl', function($scope, $location) {
  $scope.go = function (path) {
    $location.path(path);
  };
});
