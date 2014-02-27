var timeline_app = angular.module(
  'angular-timeline-demo', ['ngRoute', 'ngSanitize', 'ngAnimate', 'shoppinpal.mobile-menu']
);

var timeline_app2 = angular.module(
  'angular-timeline-demo2', ['ngRoute', 'ngSanitize', 'shoppinpal.mobile-menu']
);

[timeline_app, timeline_app2].forEach(function(app) {
  app.config([
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

timeline_app.controller('RootCtrl', function($scope) {
  $scope.animationEnabled = true;
});

timeline_app2.controller('RootCtrl', function($scope) {
  $scope.animationEnabled = false;
});

timeline_app.controller('AnimateFlavorCtrl', function($scope, $rootScope) {
  $rootScope.$on('$locationChangeStart', function(_, _, current) {
    if (current.search(/#\/$/) !== -1) {
      $scope.animateFlavor = 'move-to-left';
    } else if (null) {
      $scope.animateFlavor = 'animation-disabled';
    } else {
      $scope.animateFlavor = 'move-to-right';
    }
  });
});
