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

    $routeProvider.otherwise({
      templateUrl: '/ng_templates/page_under_construction.html',
      controller: 'RootCtrl'
    });
  }]);

var homeRegexp = /\/(index.html)?#\/$/;
var itemRegexp = /\/(index.html)?#\/item\/[0-9]+$/;

function getMoveFrom(currentUrl) {
  if (homeRegexp.test(currentUrl)) {
    return 'home';
  }
  if (itemRegexp.test(currentUrl)) {
    return 'item';
  }
  return 'unrecognized';
}

function getMoveTo(nextUrl) {
  if (homeRegexp.test(nextUrl)) {
    return 'home';
  }
  if (itemRegexp.test(nextUrl)) {
    return 'item';
  }
  return 'unrecognized';
}

timelineWithAnimation.controller(
  'RootCtrl',
  function($scope, $rootScope, $location, $spMenu) {
    $scope.gotoUrlFor = function (path) {
      $location.path(path);
    };

    $rootScope.$on(
      '$locationChangeStart',
      function(_, nextPageUrl, currentPageUrl) {

        // Due to menu can not close itself.
        $spMenu.hide();

        var userMoveFrom = getMoveFrom(currentPageUrl);
        var userMoveTo   = getMoveTo(nextPageUrl);
        var navigationState = ['from', userMoveFrom, 'to', userMoveTo]

        switch (navigationState.join(' ')) {
        case 'from home to item':
          $scope.animateFlavor = 'move-to-left';
          break;
        case 'from item to home':
          $scope.animateFlavor = 'move-to-right';
          break;
        case 'from home to unrecognized':
          $scope.animateFlavor = 'move-to-right';
          break;
        case 'from unrecognized to home':
          $scope.animateFlavor = 'move-to-left';
          break;
        }

        $scope.currentPage = userMoveTo;
      });
  });

timelineWithAnimation.controller('ListCtrl', function($scope) {
  $scope.items = timelineItems['MrBrown'].sort(function(a,b){
    return b.createdAt - a.createdAt;
  });
});

timelineWithAnimation.controller('ItemsCtrl', function($scope, $route, $routeParams) {
  $scope.item = jQuery.grep(timelineItems['MrBrown'], function(item) {
    return item.id.toString() === $routeParams.itemId.toString();
  })[0];
});
