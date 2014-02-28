angular.module('timeline-with-animation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/ng_templates/_item.html',
    "<div class=\"row timeline-item-row\">\n" +
    "  <div class=\"timeline-item-icon-container col-xs-2 col-md-1 text-center\">\n" +
    "    <div class=\"icon\" ng-class=\"'medapp-icon-' + item.type\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-7 col-md-9 timeline-item-main\">\n" +
    "    <div class=\"timeline-item-title\"><strong>{{item.name}}</strong></div>\n" +
    "    <div class=\"text-muted\">{{item.doctor_name}}</div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-3 col-md-2 text-center timeline-item-datetime\">\n" +
    "    <span>\n" +
    "      {{item.createdAt | date: 'MMM, dd'}}\n" +
    "    </span>\n" +
    "    <span class=\"text-muted\">\n" +
    "      {{item.createdAt | date: 'yyyy'}}\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/item.html',
    "<div class=\"timeline-item-frame container\" ng-controller=\"ItemsCtrl\">\n" +
    "  <div ng-include=\"'/ng_templates/_item.html'\" class=\"timeline-item\"></div>\n" +
    "  <div class=\"timeline-item-data-container col-xs-12\" ng-bind-html='item.data'></div>\n" +
    "  <div><a class=\"btn btn-primary btn-lg\" href=\"#/\">Back</a></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/list.html',
    "<div class=\"timeline-list-frame container\" ng-controller=\"ListCtrl\">\n" +
    "  <ul class=\"list-unstyled\">\n" +
    "    <li class=\"timeline-item\" ng-repeat=\"item in items\">\n" +
    "      <a class=\"timeline-item-link\" href=\"#/item/{{ item.id }}\">\n" +
    "        <div ng-include=\"'/ng_templates/_item.html'\"></div>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/menu.html',
    "<ul class=\"nav navbar-nav\">\n" +
    "  <li><a href=\"#\">Profile</a></li>\n" +
    "  <li><a href=\"#\">Problem list</a></li>\n" +
    "  <li><a href=\"#\">Allergy list</a></li>\n" +
    "  <li><a href=\"#\">Observations</a></li>\n" +
    "  <li><a href=\"#\">Clinical Documents</a></li>\n" +
    "  <li><a href=\"#\">Encounters</a></li>\n" +
    "</ul>\n"
  );

}]);
