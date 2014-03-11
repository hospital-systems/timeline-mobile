var timelineWithAnimation = angular.module(
  'timeline-with-animation', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'shoppinpal.mobile-menu',
    'firebase'
  ]
);

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

var patientsListRegexp  = /\/((doctor|patient).html)?#\/$/;
var timelineListRegexp  = /\/((doctor|patient).html)?#\/patients\/[0-9]+$/;
var timelineItemRegexp  = /\/((doctor|patient).html)?#\/patients\/[0-9]+\/items\/[0-9]+$/;
var problemListRegexp   = /\/((doctor|patient).html)?#\/patients\/[0-9]+\/problem-list$/;
var allergyListRegexp   = /\/((doctor|patient).html)?#\/patients\/[0-9]+\/allergy-list$/;
var encounterListRegexp = /\/((doctor|patient).html)?#\/patients\/[0-9]+\/encounters$/;
var profileRegexp       = /\/((doctor|patient).html)?#\/patients\/[0-9]+\/profile$/;

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

console.log(userMoveFrom);
console.log(userMoveTo);

        switch (navigationState.join(' ')) {
        case 'from patientsList to timelineList':
        case 'from patientsList to problemList':
        case 'from patientsList to allergyList':
        case 'from patientsList to encounterList':
        case 'from patientsList to profile':
          $scope.animateFlavor = 'move-to-left';
          break;
        case 'from timelineList to timelineItem':
        case 'from timelineList to problemList':
        case 'from timelineList to allergyList':
        case 'from timelineList to encounterList':
        case 'from timelineList to profile':
          $scope.animateFlavor = 'move-to-left';
          break;
        case 'from timelineItem to timelineList':
          $scope.animateFlavor = 'move-to-right';
          break;
        case 'from timelineList to patientsList':
        case 'from problemList to patientsList':
        case 'from allergyList to patientsList':
        case 'from encounterList to patientsList':
        case 'from profile to patientsList':
          $scope.animateFlavor = 'move-to-right';
          break;
        default:
// console.log('animation-disabled');
          $scope.animateFlavor = 'animation-disabled';
          break;
        }

        $scope.currentPage = userMoveTo;
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

timelineWithAnimation.controller(
  'TimelineListCtrl',
  function($scope, $route, $routeParams, Settings) {
    $scope.patient = getPatientById($routeParams.patientId);
    // $scope.items = $scope.patient.timelineItems.sort(function(a, b) {
    $scope.items = mrBrownData['TimelineItems'].sort(function(a, b) {
      return b.createdAt - a.createdAt;
    });
    var title = 'Observations';
    Settings.setTitle(title);
    Settings.setHeader(title);
  });

timelineWithAnimation.controller(
  'TimelineItemsCtrl',
  function($scope, $route, $routeParams, Settings) {
    $scope.patient = getPatientById($routeParams.patientId);
    // $scope.item = jQuery.grep($scope.patient.timelineItems, function(item) {
    $scope.item = jQuery.grep(mrBrownData['TimelineItems'], function(item) {
      return item.id.toString() === $routeParams.itemId.toString();
    })[0];
    Settings.setTitle('Observation: ' + $scope.item.name);
    Settings.setHeader('Observation');
  });

timelineWithAnimation.controller('ProblemListCtrl', function($scope, Settings) {
  var title = 'Problem list';
  Settings.setTitle(title);
  Settings.setHeader(title);
  $scope.items = mrBrownData['Problems'];
});

timelineWithAnimation.controller('AllergyListCtrl', function($scope, Settings) {
  var title = 'Allergy list';
  Settings.setTitle(title);
  Settings.setHeader(title);
  $scope.items = mrBrownData['Allergies'];
});

timelineWithAnimation.controller('EncounterListCtrl', function($scope, Settings) {
  var title = 'Encounters';
  Settings.setTitle(title);
  Settings.setHeader(title);
  $scope.items = mrBrownData['Encounters'];
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
