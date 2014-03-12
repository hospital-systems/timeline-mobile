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

    $routeProvider.when('/calendar', {
      templateUrl: '/ng_templates/calendar.html',
      controller: 'RootCtrl'
    })

    $routeProvider.otherwise({
      templateUrl: '/ng_templates/page_under_construction.html',
      controller: 'RootCtrl'
    });
  }]);
