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

timelineWithAnimation.factory('Settings', function($firebase) {
  var title     = 'Wellpath';
  var header    = 'Wellpath';
  var patientId = null;
  var patientViewMode = false;

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
    },
    isPatientViewMode: function() {
      if (patientId) { return false; } else { return true; }
    }
  };
});

timelineWithAnimation.filter('reverse', function() {
  function toArray(list) {
    var k, out = [];

    if( list ) {
      if( angular.isArray(list) ) {
        out = list;
      }
      else if( typeof(list) === 'object' ) {
        for (k in list) {
          if (list.hasOwnProperty(k) && k.match(/^-/)) { out.push(list[k]); }
        }
      }
    }
    return out;
  }

  return function(items) {
    return toArray(items).sort(function(a, b) {
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      if (a.createdAt > b.createdAt) {
        return 1;
      }
      return 0;
    }).reverse();
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

function age(start_date) {
    var now  = new Date();

    var ynew = now.getFullYear();
    var mnew = now.getMonth();
    var dnew = now.getDate();

    var yold = start_date.getFullYear();
    var mold = start_date.getMonth();
    var dold = start_date.getDate();

    var diff = ynew - yold;

    if (mold > mnew) diff--;
    else {
        if (mold == mnew) {
            if (dold > dnew) diff--;
        }
    }
    return diff;
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
  function($scope, $rootScope, $location, $spMenu, Settings, $firebase) {
    $scope.gotoUrlFor = function (path) {
      $location.path(path);
    };
    $scope.$back = function() {
      window.history.back();
    };
    $scope.getPatient = function(id) {
      return getPatientById(id);
    };

    $scope.age = function(patient) {
        return age(patient.date_of_birth);
    }

    $scope.patientUnreadMessagesCount = 0;
    var patientMessageAssociationsRepository =
      new Firebase('https://blazing-fire-8127.firebaseio.com/patientMessageAssociations');
    $scope.patientMessageAssociations =
      $firebase(patientMessageAssociationsRepository);
    $scope.patientMessageAssociations.$on('child_added', function(snapshot) {
      if (!snapshot.snapshot.value.readed) { $scope.patientUnreadMessagesCount++; }
    });
    $scope.patientMessageAssociations.$on('child_changed', function(snapshot) {
      if (snapshot.snapshot.value.readed) {
        $scope.patientUnreadMessagesCount--;
      } else {
        $scope.patientUnreadMessagesCount++;
      }
    });
    $scope.patientMessageAssociations.$on('child_removed', function(snapshot) {
      if (!snapshot.snapshot.value.readed) { $scope.patientUnreadMessagesCount--; }
    });

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
  function($scope, $route, $routeParams, Settings, Fitbit) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    Fitbit.bodyWeight().then(function(wdata) {
      Fitbit.bodyFat().then(function(fdata) {
        Fitbit.steps().then(function(sdata) {
          $scope.items = mrBrownData['TimelineItems'].concat(wdata, fdata, sdata).sort(function(a, b) {
            return b.createdAt - a.createdAt;
          });
          var title = 'Observations';
          Settings.setTitle(title);
          Settings.setHeader(title);
        });
      });
    })
  });

timelineWithAnimation.controller(
  'TimelineItemsCtrl',
  function($scope, $route, $routeParams, Settings, Fitbit) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    Fitbit.bodyWeight().then(function(wdata) {
      Fitbit.bodyFat().then(function(fdata) {
        Fitbit.steps().then(function(sdata) {
          $scope.item = jQuery.grep(mrBrownData['TimelineItems'].concat(wdata, fdata, sdata), function(item) {
            return item.id.toString() === $routeParams.itemId.toString();
          })[0];
          Settings.setTitle('Observation: ' + $scope.item.name);
          Settings.setHeader('Observation');
        });
      });
    })
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

    $scope.patient_age = function() {
        return age($scope.patient.date_of_birth);
    }
  });

timelineWithAnimation.controller(
  'ChatCtrl',
  function($scope, $firebase, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    $scope.messageBody = '';

    if ($routeParams.patientId) {
      $scope.senderName = 'Grape, Broccoli, MD';
    } else {
      $scope.senderName = 'Snow, Dan A.';
    }

    Settings.setPatientId($scope.patient);
    var title = 'Chat';

    Settings.setTitle(title);
    Settings.setHeader(title);

    var messagesRef =
      new Firebase('https://blazing-fire-8127.firebaseio.com/messages');
    $scope.messages = $firebase(messagesRef);

    var patientMessageAssociationsRepository =
      new Firebase('https://blazing-fire-8127.firebaseio.com/patientMessageAssociations');
    $scope.patientMessageAssociations =
      $firebase(patientMessageAssociationsRepository);

    $scope.addMessage = function() {
      var messageId = '-' + generateGuid();
      $scope.messages.$child(messageId)
        .$set({
          body:      $scope.messageBody,
          createdAt: new Date(),
          id:        messageId,
          sender:    $scope.senderName,
        });

      $scope.messageBody = '';

      var patientMessageAssociationId = generateGuid();
      $scope.patientMessageAssociations.$child(patientMessageAssociationId)
        .$set({
          id: patientMessageAssociationId,
          messageId: messageId,
          readed: false
        });
    }

    if (Settings.isPatientViewMode()) {
      $scope.messages.$on('child_added', function(snapshot) {
        patientMessageAssociationsRepository
          .once('value', function(allAssociationsSnapshot) {
            allAssociationsSnapshot.forEach(function(associationSnapshot) {
              if (snapshot.snapshot.value.id.toString() ===
                  associationSnapshot.val().messageId.toString()) {
                var association = {};
                association[associationSnapshot.val().id] =
                  associationSnapshot.val()
                association[associationSnapshot.val().id].readed = true;
                $scope.patientMessageAssociations.$update(association);
              }
            });
          });
      });
    }
  })

// <http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript#105074>.
function generateS4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
function generateGuid() {
  return generateS4() + generateS4() + '-' + generateS4() + '-' +
    generateS4() + '-' + generateS4() + '-' +
    generateS4() + generateS4() + generateS4();
}

function getFcEvent(snapshot) {
  var event = snapshot.snapshot.value;
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

    var eventsRepository =
      new Firebase('https://blazing-fire-8127.firebaseio.com/events');
    $scope.events = $firebase(eventsRepository);

    var patientEventAssociationsRepository =
      new Firebase('https://blazing-fire-8127.firebaseio.com/patientEventAssociations');
    $scope.patientEventAssociations = $firebase(patientEventAssociationsRepository);

    $scope.events.$on('child_added', function(snapshot) {
      var event = getFcEvent(snapshot);
      $scope.fcEvents.push(event);
    });
    $scope.events.$on('child_changed', function(snapshot) {
      var updatedEvent = getFcEvent(snapshot);
      for (var index in $scope.fcEvents) {
        if ($scope.fcEvents[index].id.toString() === updatedEvent.id.toString()) {
          $scope.fcEvents[index] = updatedEvent;
          break;
        }
      }
    });
    $scope.events.$on('child_removed', function(snapshot) {
      var removedEvent = getFcEvent(snapshot);
      for (var index in $scope.fcEvents) {
        if ($scope.fcEvents[index].id.toString() === removedEvent.id.toString()) {
          $scope.fcEvents.splice(index, 1);
          break;
        }
      }
    });

    var fcConfig = {
      calendar: {
        height: 450,
        editable: false,
        // defaultView: 'basicWeek',
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
          var eventId = generateGuid();
          $scope.events.$child(eventId)
            .$set({
              id: eventId,
              title: title,
              start: start
            });
        }
        $scope.medCalendar.fullCalendar('unselect');
      };
      fcConfig.calendar['eventRender'] = function(fcEvent, fcElement) { //<http://stackoverflow.com/questions/4395786/how-to-edit-fullcalender-event-content#4406361>
        fcElement.find('.fc-event-title').click(function() {
          var title = prompt('event title:', fcEvent.title);
          if (title) {
            var updatedEvent = {};
            updatedEvent[fcEvent.id] = {
              id: fcEvent.id,
              title: title,
              start: fcEvent.start
            };
            $scope.events.$update(updatedEvent);
          }
        });
        var element = $('<span class="fc-event-remove glyphicon glyphicon-remove"></span>');
        element.click(function() {
          var alertMessage = 'Destroy ' + fcEvent.title + '?';
          if (confirm(alertMessage)) {
            $scope.events.$remove(fcEvent.id);
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

timelineWithAnimation.factory('Fitbit', function($http) {
  return {
    bodyMeasurements: function() {
      return $http.get('http://vpn2.waveaccess.kiev.ua:17406/body_measurements').then(function(data) {
        var body = data.data.body
        var measurements = ""
        for (var m in body) {
          measurements += '<div class=\'row item-row\'>'+
              '<div class=\'col-xs-6\'>' + m.toUpperCase() + '</div>'+
              '<div class=\'col-xs-6 text-right\'>' + body[m] + '</div>'+
            '</div>'
        }
        return [{
            id: 102,
            createdAt: new Date(2013, 3, 28, 6),
            type: 'vitals',
            name: 'Fitbit Vitals',
            doctor_name: 'Kumar, Ashok , MD',
            clinic_name: '',
            data: measurements
          }]
      })
    },
    bodyWeight: function() {
      return $http.get('http://vpn2.waveaccess.kiev.ua:17406/body/weight').then(function(data) {
        var body = data.data.weight
        var weights = []
        for (var m in body) {
          var measurement = '<div class=\'row item-row\'>'+
            '<div class=\'col-xs-6\'>Body Weight</div>'+
            '<div class=\'col-xs-6 text-right\'>' + body[m].weight + '</div>'+
            '</div>'
          weights.push({
            id: body[m].logId + "_weight",
            createdAt: new Date(body[m].date),
            type: 'measure',
            name: 'Body Weight',
            doctor_name: 'Kumar, Ashok , MD',
            clinic_name: '',
            data: measurement
          })
        }
        return weights;
      })
    },
    bodyFat: function() {
      return $http.get('http://vpn2.waveaccess.kiev.ua:17406/body/fat').then(function(data) {
        console.log(data)
        var body = data.data.fat
        var weights = []
        for (var m in body) {
          var measurement = '<div class=\'row item-row\'>'+
            '<div class=\'col-xs-6\'>Body Fat</div>'+
            '<div class=\'col-xs-6 text-right\'>' + body[m].fat + '</div>'+
            '</div>'
          weights.push({
            id: body[m].logId + "_fat",
            createdAt: new Date(body[m].date),
            type: 'measure',
            name: 'Body Fat',
            doctor_name: 'Kumar, Ashok , MD',
            clinic_name: '',
            data: measurement
          })
        }
        return weights;
      })
    },
    steps: function() {
      return $http.get('http://vpn2.waveaccess.kiev.ua:17406/steps').then(function(data) {
        console.log(data)
        var body = data.data['activities-steps']
        var weights = []
        for (var m in body) {
          if (body[m].value == 0) continue;
          var measurement = '<div class=\'row item-row\'>'+
            '<div class=\'col-xs-6\'>Steps</div>'+
            '<div class=\'col-xs-6 text-right\'>' + body[m].value + '</div>'+
            '</div>'
          weights.push({
            id: body[m].dateTime + "_steps",
            createdAt: new Date(body[m].dateTime),
            type: 'intake_output',
            name: 'Steps',
            doctor_name: 'Kumar, Ashok , MD',
            clinic_name: '',
            data: measurement
          })
        }
        return weights;
      })
    }
  }
})
