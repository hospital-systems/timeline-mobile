angular.module('angular-timeline-demo').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/templates/item.html',
    "<div ng-controller=\"ItemsCtrl\">\n" +
    "  <div>\n" +
    "    foo\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{timelineItem}}\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/list.html',
    "<div class=\"container-fluid timeline-frame\" ng-controller=\"ListCtrl\">\n" +
    "  <div class=\"timeline-container\" ng-repeat=\"day in days\">\n" +
    "    <h2>{{day.day}}</h2>\n" +
    "    <ul class=\"list-unstyled\">\n" +
    "      <li class=\"timeline-item\" ng-repeat=\"item in day.records\">\n" +
    "        <a class=\"timeline-item-link\" href=\"#/item/{{ $index }}\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-2 col-md-1\">\n" +
    "              <span class=\"icon\" ng-class=\"'medapp-icon-' + item.type\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-8 col-md-10\">\n" +
    "              <span>{{item.type}}</span>\n" +
    "              <span class=\"text-muted\">{{item.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2 col-md-1\">\n" +
    "              <span class=\"text-muted\">5:30</span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
