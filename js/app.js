//angular.module('angular-timeline-demo', ['ngRoute']);
angular.module('angular-timeline-demo', ['ngRoute'], function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/list.html',
    controller: 'RootController'
  });
  $locationProvider.html5Mode(true);
});

angular.module('angular-timeline-demo')
    .controller('RootController', function($scope) {
});
