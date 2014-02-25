angular.module('angular-timeline-demo').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/templates/item.html',
    "<div class=\"container\" ng-controller=\"ItemsCtrl\">\n" +
    "  <div>\n" +
    "    <span>{{item.type}}</span>\n" +
    "    <span class=\"text-muted\">{{item.name}}</span>\n" +
    "    <span class=\"text-muted\">\n" +
    "      {{item.createdAt | date:'HH:mm'}}\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div><a href=\"/\">Back</a></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/templates/list.html',
    "<div class=\"container-fluid timeline-frame\" ng-controller=\"ListCtrl\">\n" +
    "  <div class=\"timeline-container\" ng-repeat=\"(day, items) in days\">\n" +
    "    <h2>{{getDayFromKey(day) | date:'MMM d, yyyy'}}</h2>\n" +
    "    <ul class=\"list-unstyled\">\n" +
    "      <li class=\"timeline-item\" ng-repeat=\"item in items\">\n" +
    "        <a class=\"timeline-item-link\" href=\"#/item/{{ item.id }}\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-2 col-md-1\">\n" +
    "              <span class=\"icon\" ng-class=\"'medapp-icon-' + item.type\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-8 col-md-10\">\n" +
    "              <span>{{item.type}}</span>\n" +
    "              <span class=\"text-muted\">{{item.name}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2 col-md-1\">\n" +
    "              <span class=\"text-muted\">\n" +
    "                {{item.createdAt | date:'HH:mm'}}\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
