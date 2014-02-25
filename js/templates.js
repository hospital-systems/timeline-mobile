angular.module('angular-timeline-demo').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/templates/_item.html',
    "<div class=\"row\">\n" +
    "  <div class=\"timeline-item-icon-container col-xs-2 col-md-1\">\n" +
    "    <span class=\"icon\" ng-class=\"'medapp-icon-' + item.type\"></span>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-7 col-md-9\">\n" +
    "    <h3 class=\"timeline-item-title\">{{item.type}}</h3>\n" +
    "    <span class=\"text-muted\">{{item.name}}</span>\n" +
    "  </div>\n" +
    "  <div class=\"timeline-item-time-container col-xs-3 col-md-2\">\n" +
    "    <span class=\"timeline-item-datetime text-muted\">\n" +
    "      {{item.createdAt | date:dateFilter}}\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/item.html',
    "<div class=\"timeline-item-frame container\" ng-controller=\"ItemsCtrl\">\n" +
    "  <div ng-include=\"'/templates/_item.html'\"></div>\n" +
    "  <div><a class=\"btn btn-primary btn-lg\" href=\"/\">Back</a></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/list.html',
    "<div class=\"container\">\n" +
    "  <h1>Timeline</h1>\n" +
    "</div>\n" +
    "<div class=\"timeline-list-frame container\" ng-controller=\"ListCtrl\">\n" +
    "  <div class=\"timeline-list\" ng-repeat=\"(day, items) in days\">\n" +
    "    <h2 class=\"timeline-item-day\">{{getDayFromKey(day) | date:'MMM d, yyyy'}}</h2>\n" +
    "    <ul class=\"list-unstyled\">\n" +
    "      <li class=\"timeline-item\" ng-repeat=\"item in items\">\n" +
    "        <a class=\"timeline-item-link\" href=\"#/item/{{ item.id }}\">\n" +
    "          <div ng-include=\"'/templates/_item.html'\"></div>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
