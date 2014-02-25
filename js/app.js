timeline_app = angular.module('angular-timeline-demo', ['ngRoute']);

timeline_app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: '/templates/list.html',
      controller: 'RootController'
    });

    $locationProvider.html5Mode(true);
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

timeline_app.run(function ($templateCache) {
      $templateCache.put('/templates/list.html',
          "<div class=\"container\" ng-controller=\"ListCtrl\">\n"+
              "  <div class=\"timeline-container\" ng-repeat=\"day in collectionOfDays\">\n"+
              "    <h1>{{day.day}}</h1>\n"+
              "    <ul class=\"list-unstyled\">\n"+
              "      <li class=\"timeline-item\" ng-repeat=\"item in day.records\">\n"+
              "        <div class=\"row\">\n"+
              "          <div class=\"col-xs-2 col-md-1\">\n"+
              "            <span class=\"icon\" ng-class=\"'medapp-icon-' + item.type\"></span>\n"+
              "          </div>\n"+
              "          <div class=\"col-xs-8 col-md-10\">\n"+
              "            <span>{{item.name}}</span>\n"+
              "          </div>\n"+
              "          <div class=\"col-xs-2 col-md-1\">\n"+
              "            <span class=\"text-muted\">5:30</span>\n"+
              "          </div>\n"+
              "        </div>\n"+
              "      </li>\n"+
              "    </ul>\n"+
              "  </div>\n"+
              "</div>\n"
      )
    }
)
