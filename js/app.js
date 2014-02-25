timeline_app = angular.module('angular-timeline-demo', ['ngRoute']);

timeline_app.config(['$routeProvider',
  function($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: '/templates/list.html',
      controller: 'RootController'
    });
  }]);

timeline_app.controller('RootController', function($scope) {
  });

timeline_app.controller('ListCtrl', function($scope) {
  $scope.collectionOfDays = [
    {
      day: '2014-02-24',
      records: [
        {
          type: 'notes',
          name: 'Mango, Onion X., RN',
          data: {
            message: {
              text: "Nursing Note:\nSeen and examined by Dr. Khoury with new orders noted and carried out."
            }
          }
        },
        {
          type: 'vital_timeline_item',
          name: 'Ugni molinae, Aubergine I., CNA',
          data: {
            title: 'Vital Signs:',
            title2: 'Supine',
            collection: [
              {
                title: 'BP:',
                value: '96/49 Regular;'
              },
              {
                title: 'HR:',
                value: '95 /min;'
              },
              {
                title: 'RR:',
                value: '17 /min;'
              },
              {
                title: 'Temp F/C:',
                value: '97.6 F (36.4 C);'
              },
              {
                title: 'SpO<sub>2</sub>:',
                value: '95 %;'
              },
              {
                title: 'Pain:',
                value: '0;'
              }
            ]
          }
        }
      ]
    },
    {
      day: '2014-01-13',
      records: [
        {
          type: 'intake_output_timeline_item',
          name: 'Kiwi, Tomato F., CNA',
          data: {
            message: {
              title: 'Output:',
              text: 'Urine 200 ml foley'
            }
          }
        },
        {
          type: 'treatment_record_timeline_item',
          name: 'Coconut, Beet M., RT',
          data: {
            message: {
              text: 'RCP Treatment Record'
            }
          }
        }
      ]
    }
  ];
});
