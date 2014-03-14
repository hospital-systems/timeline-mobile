var timelineWithAnimation = angular.module(
  'timeline-with-animation', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'shoppinpal.mobile-menu',
    'firebase',
    'ui.calendar',
    'ui.bootstrap'
  ]
);

timelineWithAnimation.factory('Settings', function() {
   var title     = 'Wellpath';
   var header    = 'Wellpath';
   var patientId = null;
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle },
     header: function() { return header; },
     setHeader: function(newHeader) { header = newHeader },
     getPatientId: function() { return patientId; },
     setPatientId: function(patient) {
       if (!patient) {
         patientId = null;
       } else {
         patientId = patient.id;
       }
     }
   };
});

var patientsListRegexp  = /\/doctor.html#\/$/;
var timelineListRegexp  = /\/((doctor|patient).html)?#\/(patients\/[0-9]+)?$/;
var timelineItemRegexp  = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?items\/[0-9]+$/;
var problemListRegexp   = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?problem-list$/;
var allergyListRegexp   = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?allergy-list$/;
var encounterListRegexp = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?encounters$/;
var profileRegexp       = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?profile$/;
var chatRegexp          = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?chat$/;
var calendarRegexp      = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?calendar$/;

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
  if (chatRegexp.test(url)) {
    return 'chat';
  }
  if (calendarRegexp.test(url)) {
    return 'calendar';
  }
  return 'unrecognized';
}

function getPatientById(id) {
  if (!id) {
    return null;
  }
  return jQuery.grep(patientsArrayFor(patients), function(patient) {
    return patient.id.toString() === id.toString();
  })[0];
}

timelineWithAnimation.controller(
  'RootCtrl',
  function($scope, $rootScope, $location, $spMenu, Settings) {
    $scope.gotoUrlFor = function (path) {
      $location.path(path);
    };
    $scope.$back = function() {
      window.history.back();
    };
    $scope.getPatient = function(id) {
      return getPatientById(id);
    };

    $scope.Settings = Settings;

    $scope.$on(
      '$locationChangeStart',
      function(_, nextPageUrl, currentPageUrl) {

        // Due to menu can not close itself.
        $spMenu.hide();

        var userMoveFrom = getPageType(currentPageUrl);
        var userMoveTo   = getPageType(nextPageUrl);

        if ((userMoveTo === 'patientsList')
            || (userMoveTo === 'timelineList' &&
                userMoveFrom !== 'patientsList')) {
          $scope.animateFlavor = 'move-to-right';
        } else {
          $scope.animateFlavor = 'move-to-left';
        }

        $scope.currentPage = userMoveTo;
      });
  });

function patientsArrayFor(patientsObject) {
  return $.map(patients, function(value, index) {
    return value;
  });
}

timelineWithAnimation.controller('PatientsListCtrl', function($scope, Settings) {
  Settings.setPatientId(null);
  $scope.patients = patientsArrayFor(patients).sort(function(a, b){
    return a.id - b.id;
  });
  var title = 'My patients';
  Settings.setTitle(title);
  Settings.setHeader(title);
});

timelineWithAnimation.controller(
  'TimelineListCtrl',
  function($scope, $route, $routeParams, Settings) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
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
    Settings.setPatientId($scope.patient);
    $scope.item = jQuery.grep(mrBrownData['TimelineItems'], function(item) {
      return item.id.toString() === $routeParams.itemId.toString();
    })[0];
    Settings.setTitle('Observation: ' + $scope.item.name);
    Settings.setHeader('Observation');
  });

timelineWithAnimation.controller(
  'ProblemListCtrl',
  function($scope, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Problem list';
    Settings.setTitle(title);
    Settings.setHeader(title);
    $scope.items = mrBrownData['Problems'];
  });

timelineWithAnimation.controller(
  'AllergyListCtrl',
  function($scope, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Allergy list';
    Settings.setTitle(title);
    Settings.setHeader(title);
    $scope.items = mrBrownData['Allergies'];
  });

timelineWithAnimation.controller(
  'EncounterListCtrl',
  function($scope, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Encounters';
    Settings.setTitle(title);
    Settings.setHeader(title);
    $scope.items = mrBrownData['Encounters'];
  });

timelineWithAnimation.controller(
  'ProfileCtrl',
  function($scope, Settings, $route, $routeParams) {
    if ($routeParams.patientId) {
      $scope.patient = getPatientById($routeParams.patientId);
      Settings.setPatientId($scope.patient);
    } else {
      $scope.patient = patients["MrBrown"];
    }
    var title = 'Profile';
    Settings.setTitle(title);
    Settings.setHeader(title);

    $scope.age = function() {
        var now  = new Date();

        var ynew = now.getFullYear();
        var mnew = now.getMonth();
        var dnew = now.getDate();

        var yold = $scope.patient.date_of_birth.getFullYear();
        var mold = $scope.patient.date_of_birth.getMonth();
        var dold = $scope.patient.date_of_birth.getDate();

        var diff = ynew - yold;

        if (mold > mnew) diff--;
        else {
            if (mold == mnew) {
                if (dold > dnew) diff--;
            }
        }
        return diff;
    }
  });

timelineWithAnimation.controller(
  'ChatCtrl',
  function($scope, $firebase, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Chat';
    Settings.setTitle(title);
    Settings.setHeader(title);
    var messagesRef = new Firebase("https://resplendent-fire-4689.firebaseio.com/messages");
    $scope.messages = $firebase(messagesRef);

    $scope.addMessage = function() {
      $scope.messages.$add($scope.newMessage);
      $scope.newMessage = {};
    }
  })

function getFcEvent(snapshot) {
  var event = snapshot.val();
  event.id = snapshot.name(); //name function return firebase id
  event.start = new Date(event.start);
  return event;
}

timelineWithAnimation.controller(
  'CalendarCtrl',
  function($scope, Settings, $route, $routeParams, $firebase) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Calendar';
    Settings.setTitle(title);
    Settings.setHeader(title);

    $scope.fcEvents = [];

    var eventsConnection = new Firebase("https://blazing-fire-8127.firebaseio.com/events");
    $scope.events = $firebase(eventsConnection);

    eventsConnection.on('child_added', function(snapshot) {
      var newEvent = getFcEvent(snapshot);
      $scope.fcEvents.push(newEvent);
    });
    eventsConnection.on('child_changed', function(snapshot) {
      var updatedEvent = getFcEvent(snapshot);
      for (var index in $scope.fcEvents) {
        if ($scope.fcEvents[index].id.toString() === updatedEvent.id.toString()) {
          $scope.fcEvents[index] = updatedEvent;
          break;
        }
      }
    });

    var fcConfig = {
      calendar: {
        height: 450,
        editable: false,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        }
      }
    };
    if ($scope.patient) {
      fcConfig.calendar['selectable'] = true;
      fcConfig.calendar['select'] = function(start) {
        var title = prompt('event title:');
        if (title) {
          $scope.events.$add({ title: title, start: start });
        }
        $scope.medCalendar.fullCalendar('unselect');
      };
      fcConfig.calendar['eventRender'] = function(fcEvent, fcElement) { //<http://stackoverflow.com/questions/4395786/how-to-edit-fullcalender-event-content#4406361>
        fcElement.find('.fc-event-title').click(function() {
          var title = prompt('event title:', fcEvent.title);
          if (title) {
            var updatedEvent = {};
            updatedEvent[fcEvent.id] = { title: title, start: fcEvent.start };
            $scope.events.$update(updatedEvent);
          }
        });
        var element = $('<span class="fc-event-remove">x</span>');
        element.click(function() {
          var alertMessage = 'Destroy ' + fcEvent.title + '?';
          if (confirm(alertMessage)) {
            $scope.events.$remove(fcEvent.id);
            $scope.medCalendar.fullCalendar('removeEvents', fcEvent.id);
          }
        });
        fcElement.find('.fc-event-inner').append(element);
      };
    }

    $scope.fcConfig = fcConfig;
    $scope.eventSources = [$scope.fcEvents];
  })

timelineWithAnimation.controller('PageUnderConstructionCtrl', function(Settings) {
  var title = 'Page under construction';
  Settings.setTitle(title);
  Settings.setHeader(title);
});
