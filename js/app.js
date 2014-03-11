var timelineWithAnimation = angular.module(
  'timeline-with-animation', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'shoppinpal.mobile-menu',
    'firebase'
  ]
);

timelineWithAnimation.config([
  '$routeProvider',
  function($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: '/ng_templates/timeline_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/items/:itemId', {
      templateUrl: '/ng_templates/timeline_item.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/problem-list', {
      templateUrl: '/ng_templates/problem_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/allergy-list', {
      templateUrl: '/ng_templates/allergy_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/encounters', {
      templateUrl: '/ng_templates/encounters.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/profile', {
      templateUrl: '/ng_templates/profile.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/chat', {
      templateUrl: '/ng_templates/chat.html',
      controller: 'RootCtrl'
    })

    $routeProvider.otherwise({
      templateUrl: '/ng_templates/page_under_construction.html',
      controller: 'RootCtrl'
    });
  }]);

timelineWithAnimation.factory('Settings', function() {
   var title  = 'TakeCare';
   var header = 'TakeCare';
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle },
     header: function() { return header; },
     setHeader: function(newHeader) { header = newHeader }
   };
});

var timelineListRegexp  = /\/(index.html)?#\/$/;
var timelineItemRegexp  = /\/(index.html)?#\/items\/[0-9]+$/;
var problemListRegexp   = /\/(index.html)?#\/problem-list$/;
var allergyListRegexp   = /\/(index.html)?#\/allergy-list$/;
var encounterListRegexp = /\/(index.html)?#\/encounters$/;
var profileRegexp       = /\/(index.html)?#\/profile$/;

function getPageType(url) {
  if (timelineListRegexp.test(url)) {
    return 'timelineList';
  }
  if (timelineItemRegexp.test(url)) {
    return 'timelineItem';
  }
  if (problemListRegexp.test(url)) {
    return 'problemList';
  }
  if (allergyListRegexp.test(url)) {
    return 'allergyList';
  }
  if (encounterListRegexp.test(url)) {
    return 'encounterList';
  }
  if (profileRegexp.test(url)) {
    return 'profile';
  }
  return 'unrecognized';
}

timelineWithAnimation.controller(
  'RootCtrl',
  function($scope, $rootScope, $location, $spMenu, Settings) {
    $scope.gotoUrlFor = function (path) {
      $location.path(path);
    };

    $scope.Settings = Settings;

    $rootScope.$on(
      '$locationChangeStart',
      function(_, nextPageUrl, currentPageUrl) {

        // Due to menu can not close itself.
        $spMenu.hide();

        var userMoveFrom = getPageType(currentPageUrl);
        var userMoveTo   = getPageType(nextPageUrl);
        var navigationState = ['from', userMoveFrom, 'to', userMoveTo]

        switch (navigationState.join(' ')) {
        case 'from timelineItem to timelineList':
          $scope.animateFlavor = 'move-to-right';
          break;
        case 'from timelineList to unrecognized':
          $scope.animateFlavor = 'move-to-right';
          break;
        default:
          $scope.animateFlavor = 'move-to-left';
          break;
        }

        $scope.currentPage = userMoveTo;
      });
  });

timelineWithAnimation.controller(
  'TimelineListCtrl',
  function($scope, $route, $routeParams, Settings) {
    $scope.items = patients['MrBrown'].timelineItems.sort(function(a, b){
      return b.createdAt - a.createdAt;
    });
    var title = 'Observations';
    Settings.setTitle(title);
    Settings.setHeader(title);
  });

timelineWithAnimation.controller(
  'TimelineItemsCtrl',
  function($scope, $route, $routeParams, Settings) {
    $scope.item = jQuery.grep(patients['MrBrown'].timelineItems, function(item) {
      return item.id.toString() === $routeParams.itemId.toString();
    })[0];
    Settings.setTitle('Observation: ' + $scope.item.name);
    Settings.setHeader('Observation');
  });

timelineWithAnimation.controller('ProblemListCtrl', function($scope, Settings) {
  var title = 'Problem list';
  Settings.setTitle(title);
  Settings.setHeader(title);
  $scope.items = patients["Problems"];
});

timelineWithAnimation.controller('AllergyListCtrl', function($scope, Settings) {
  var title = 'Allergy list';
  Settings.setTitle(title);
  Settings.setHeader(title);
  $scope.items = patients["Allergies"];
});

timelineWithAnimation.controller('EncounterListCtrl', function($scope, Settings) {
  var title = 'Encounters';
  Settings.setTitle(title);
  Settings.setHeader(title);
  $scope.items = patients["Encounters"];
});

timelineWithAnimation.controller('ProfileCtrl', function(Settings) {
  var title = 'Profile';
  Settings.setTitle(title);
  Settings.setHeader(title);
});

timelineWithAnimation.controller('ChatCtrl', function($scope, $firebase, Settings) {
  var title = 'Chat';
  Settings.setTitle(title);
  Settings.setHeader(title);
  var messagesRef = new Firebase("https://resplendent-fire-4689.firebaseio.com/messages");
  $scope.messages = $firebase(messagesRef);

  $scope.addMessage = function() {
    console.log('add');
    $scope.messages.$add($scope.newMessage);
    $scope.newMessage = {};
  }
})

timelineWithAnimation.controller('PageUnderConstructionCtrl', function(Settings) {
  var title = 'Page under construction';
  Settings.setTitle(title);
  Settings.setHeader(title);
});
