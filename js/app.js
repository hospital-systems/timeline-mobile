var timelineItems = [
  {
    id: 1,
    type: 'notes',
    createdAt: new Date(2014, 2, 24, 17, 30),
    name: 'Mango, Onion X., RN',
    data: {
      message: {
        text: "Nursing Note:\nSeen and examined by Dr. Khoury with new orders noted and carried out."
      }
    }
  },
  {
    id: 2,
    type: 'vital_timeline_item',
    createdAt: new Date(2014, 2, 24, 6, 5),
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
  },
  {
    id: 3,
    type: 'intake_output_timeline_item',
    createdAt: new Date(2014, 1, 13, 22, 45),
    name: 'Kiwi, Tomato F., CNA',
    data: {
      message: {
        title: 'Output:',
        text: 'Urine 200 ml foley'
      }
    }
  },
  {
    id: 4,
    type: 'treatment_record_timeline_item',
    createdAt: new Date(2014, 1, 13, 3, 15),
    name: 'Coconut, Beet M., RT',
    data: {
      message: {
        text: 'RCP Treatment Record'
      }
    }
  }
];

timeline_app = angular.module('angular-timeline-demo', ['ngRoute']);

timeline_app.config([
  '$routeProvider',
  function($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: '/templates/list.html',
      controller: 'RootController'
    });

    $routeProvider.when('/item/:itemId', {
      templateUrl: '/templates/item.html',
      controller: 'RootController'
    });
  }]);

timeline_app.controller('RootController', function($scope) {});

timeline_app.controller('ListCtrl', function($scope) {
  $scope.getDayFromKey = function(key) {
    return new Date(key);
  };

  $scope.days = _.groupBy(timelineItems, function(item) {
    var date = item.createdAt;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  });
});

timeline_app.controller('ItemsCtrl', function($scope, $route, $routeParams) {
  $scope.item = jQuery.grep(timelineItems, function(item) {
    return item.id.toString() === $routeParams.itemId.toString();
  })[0];
});
