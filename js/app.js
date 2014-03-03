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
      templateUrl: '/ng_templates/patients_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/patients/:patientId', {
      templateUrl: '/ng_templates/timeline_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/patients/:patientId/items/:itemId', {
      templateUrl: '/ng_templates/timeline_item.html',
      controller: 'RootCtrl'
    });

    $routeProvider.otherwise({
      templateUrl: '/ng_templates/page_under_construction.html',
      controller: 'RootCtrl'
    });
  }]);

var patientsListRegexp = /\/(index.html)?#\/$/;
var timelineListRegexp = /\/(index.html)?#\/patients\/[0-9]+$/;
var timelineItemRegexp = /\/(index.html)?#\/patients\/[0-9]+\/items\/[0-9]+$/;

function getPageType(url) {
  if (patientsListRegexp.test(url)) {
    return 'patientsList';
  }
  if (timelineListRegexp.test(url)) {
    return 'timelineList';
  }
  if (timelineItemRegexp.test(url)) {
    return 'timelineItem';
  }
  return 'unrecognized';
}

timelineWithAnimation
  .controller('RootCtrl', function($scope, $rootScope, $location, $route, $routeParams, $spMenu) {
    $scope.gotoUrlFor = function (path) {
      $location.path(path);
    };

    $rootScope.$on(
      '$locationChangeStart',
      function(_, nextPageUrl, currentPageUrl) {

        // Due to menu can not close itself.
        $spMenu.hide();

        var userMoveFrom = getPageType(currentPageUrl);
        var userMoveTo   = getPageType(nextPageUrl);
        var navigationState = ['from', userMoveFrom, 'to', userMoveTo]

        switch (navigationState.join(' ')) {
        case 'from patientsList to timelineList':
          $scope.animateFlavor = 'move-to-left';
          break;
        case 'from timelineList to timelineItem':
          $scope.animateFlavor = 'move-to-left';
          break;
        case 'from timelineItem to timelineList':
          $scope.animateFlavor = 'move-to-right';
          break;
        case 'from timelineList to patientsList':
          $scope.animateFlavor = 'move-to-right';
          break;
        case 'from timelineList to unrecognized':
          $scope.animateFlavor = 'move-to-right';
          break;
        case 'from unrecognized to patientsList':
          $scope.animateFlavor = 'move-to-left';
          break;

        // TODO: remove me
        case 'from timelineItem to patientsList':
          $scope.animateFlavor = 'move-to-right';
          break;

        default:
          $scope.animateFlavor = 'move-to-left';
          break;
        }

        $scope.currentPage = userMoveTo;
        // // not working:(
        // if (typeof($routeParams.patientId) !== 'undefined') {
        //   $scope.patient = getPatientById($routeParams.patientId);
        // }
      });
  });

function patientsArrayFor(patientsObject) {
  return $.map(patients, function(value, index) {
    return value;
  });
}

timelineWithAnimation.controller('PatientsListCtrl', function($scope) {
  $scope.patients = patientsArrayFor(patients).sort(function(a, b){
    return a.id - b.id;
  });
});

function getPatientById(id) {
  return jQuery.grep(patientsArrayFor(patients), function(patient) {
    return patient.id.toString() === id.toString();
  })[0];
}

timelineWithAnimation
  .controller('TimelineListCtrl', function($scope, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);

    $scope.items = $scope.patient.timelineItems.sort(function(a, b){
      return b.createdAt - a.createdAt;
    });
  });

timelineWithAnimation.
  controller('TimelineItemsCtrl', function($scope, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);

    $scope.item = jQuery.grep($scope.patient.timelineItems, function(item) {
      return item.id.toString() === $routeParams.itemId.toString();
    })[0];
  });
