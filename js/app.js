var timelineWithAnimation = angular.module(
  'timeline-with-animation', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'shoppinpal.mobile-menu'
  ]
);

var timelineWithoutAnimation = angular.module(
  'timeline-without-animation', [
    'ngRoute',
    'ngSanitize',
    'shoppinpal.mobile-menu'
  ]
);

[timelineWithAnimation, timelineWithoutAnimation].forEach(function(app) {
  app.config([
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

timelineWithAnimation.controller('RootCtrl', function($scope) {
  $scope.animationEnabled = true;
});

timelineWithoutAnimation.controller('RootCtrl', function($scope) {
  $scope.animationEnabled = false;
});

timelineWithAnimation.controller('AnimateFlavorCtrl', function($scope, $rootScope) {
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
