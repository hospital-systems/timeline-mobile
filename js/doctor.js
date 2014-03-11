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

    $routeProvider.when('/patients/:patientId/problem-list', {
      templateUrl: '/ng_templates/problem_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/patients/:patientId/allergy-list', {
      templateUrl: '/ng_templates/allergy_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/patients/:patientId/encounters', {
      templateUrl: '/ng_templates/encounters.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/patients/:patientId/profile', {
      templateUrl: '/ng_templates/profile.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/patients/:patientId/chat', {
      templateUrl: '/ng_templates/chat.html',
      controller: 'RootCtrl'
    })

    $routeProvider.otherwise({
      templateUrl: '/ng_templates/page_under_construction.html',
      controller: 'RootCtrl'
    });
  }]);
