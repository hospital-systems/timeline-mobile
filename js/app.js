var timelineWithAnimation = angular.module(
  'timeline-with-animation', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'shoppinpal.mobile-menu'
  ]
);

timelineWithAnimation.config([
  '$routeProvider',
  function($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: '/ng_templates/list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/item/:itemId', {
      templateUrl: '/ng_templates/item.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/menu', {
      templateUrl: '/ng_templates/menu.html',
      controller: 'RootCtrl'
    });
  }]);

timelineWithAnimation.controller('ListCtrl', function($scope) {
  $scope.items = timelineItems.sort(function(a,b){
    return b.createdAt - a.createdAt;
  });
});

timelineWithAnimation.controller('ItemsCtrl', function($scope, $route, $routeParams) {
  $scope.item = jQuery.grep(timelineItems, function(item) {
    return item.id.toString() === $routeParams.itemId.toString();
  })[0];
});

timelineWithAnimation.controller('RootCtrl', function() {});

timelineWithAnimation.controller('AnimateFlavorCtrl', function($scope, $rootScope) {
  $rootScope.$on('$locationChangeStart', function(_, _, current) {
    if (current.search(/\/#\/$/) !== -1) {
      $scope.animateFlavor = 'move-to-left';
    } else {
      $scope.animateFlavor = 'move-to-right';
    }
  });
});
