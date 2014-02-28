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
  $scope.items = timelineItems.sort(function(a,b){
    return b.createdAt - a.createdAt;
  });
});

timelineWithAnimation.controller('ItemsCtrl', function($scope, $route, $routeParams) {
  $scope.item = jQuery.grep(timelineItems, function(item) {
    return item.id.toString() === $routeParams.itemId.toString();
  })[0];
});

timelineWithAnimation.controller('UnderConstructionCtrl', function() {
  $scope.item = jQuery.grep(timelineItems, function(item) {
    return item.id.toString() === $routeParams.itemId.toString();
  })[0];
});

angular.module('shoppinpal.mobile-menu', [])
    .run(['$rootScope', '$spMenu', function($rootScope, $spMenu){
        $rootScope.$spMenu = $spMenu;
    }])
    .provider("$spMenu", function(){
        this.$get = [function(){
           var menu = {};

           menu.show = function show(){
               var menu = angular.element(document.querySelector('#sp-nav'));
               console.log(menu);
               menu.addClass('show');
           };

           menu.hide = function hide(){
               var menu = angular.element(document.querySelector('#sp-nav'));
               menu.removeClass('show');
           };

           menu.toggle = function toggle() {
               var menu = angular.element(document.querySelector('#sp-nav'));
               menu.toggleClass('show');
           };

           return menu;
        }];
    });
angular.module('timeline-with-animation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/ng_templates/_item.html',
    "<div class=\"row timeline-item-row\">\n" +
    "  <div class=\"timeline-item-icon-container col-xs-2 col-md-1 text-center\">\n" +
    "    <div class=\"icon\" ng-class=\"'medapp-icon-' + item.type\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-7 col-md-9 timeline-item-main\">\n" +
    "    <div class=\"timeline-item-title\"><strong>{{item.name}}</strong></div>\n" +
    "    <div class=\"text-muted\">{{item.doctor_name}}</div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-3 col-md-2 text-center timeline-item-datetime\">\n" +
    "    <span>\n" +
    "      {{item.createdAt | date: 'MMM, dd'}}\n" +
    "    </span>\n" +
    "    <span class=\"text-muted\">\n" +
    "      {{item.createdAt | date: 'yyyy'}}\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/item.html',
    "<div class=\"timeline-item-frame container\" ng-controller=\"ItemsCtrl\">\n" +
    "  <div ng-include=\"'/ng_templates/_item.html'\" class=\"timeline-item\"></div>\n" +
    "  <div class=\"timeline-item-data-container col-xs-12\" ng-bind-html='item.data'></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/list.html',
    "<div class=\"timeline-list-frame container\" ng-controller=\"ListCtrl\">\n" +
    "  <ul class=\"list-unstyled\">\n" +
    "    <li class=\"timeline-item\" ng-repeat=\"item in items\">\n" +
    "      <a class=\"timeline-item-link\" href=\"#/item/{{ item.id }}\">\n" +
    "        <div ng-include=\"'/ng_templates/_item.html'\"></div>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/menu.html',
    "<ul class=\"nav navbar-nav\">\n" +
    "  <li><a href=\"#\">Profile</a></li>\n" +
    "  <li><a href=\"#\">Problem list</a></li>\n" +
    "  <li><a href=\"#\">Allergy list</a></li>\n" +
    "  <li><a href=\"#\">Observations</a></li>\n" +
    "  <li><a href=\"#\">Clinical Documents</a></li>\n" +
    "  <li><a href=\"#\">Encounters</a></li>\n" +
    "</ul>\n"
  );


  $templateCache.put('/ng_templates/page_under_construction.html',
    "<div class=\"container\">\n" +
    "  <div class=\"alert alert-danger\" style=\"margin-top: 20px;\">Not Found</div>\n" +
    "</div>\n"
  );

}]);
