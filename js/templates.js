angular.module('timeline-with-animation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/ng_templates/_header_for_doctor.html',
    "<div class=\"\" ng-switch on=\"getPatient(Settings.getPatientId())\">\n" +
    "  <div ng-switch-when=\"null\">\n" +
    "    <span>\n" +
    "      <button type=\"button\" class=\"navbar-toggle pull-left navbar-toggle-extended\" ng-click=\"$spMenu.toggle()\">\n" +
    "        <div class=\"pull-left\" style=\"padding-top: 5px;\">\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </div>\n" +
    "        <div ng-bind=\"Settings.header()\" class=\"pull-left navbar-brand-extended\">\n" +
    "          Observations\n" +
    "        </div>\n" +
    "      </button>\n" +
    "    </span>\n" +
    "    <span class=\"navbar-brand navbar-brand-img pull-right top-header\"></span>\n" +
    "  </div>\n" +
    "  <div ng-switch-default>\n" +
    "    <span ng-switch on=\"currentPage\">\n" +
    "      <span ng-cloak ng-switch-when=\"timelineItem\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle pull-left navbar-toggle-extended\"\n" +
    "                ng-click=\"$back();\">\n" +
    "          <div class=\"pull-left\" style=\"padding-top: 2px;\">\n" +
    "            <span class=\"back-button glyphicon glyphicon-arrow-left\"></span>\n" +
    "          </div>\n" +
    "          <div ng-bind=\"Settings.header()\" class=\"pull-left navbar-brand-extended\">\n" +
    "            Observations\n" +
    "          </div>\n" +
    "        </button>\n" +
    "      </span>\n" +
    "      <span ng-switch-default>\n" +
    "        <button type=\"button\" class=\"navbar-toggle pull-left navbar-toggle-extended\" ng-click=\"$spMenu.toggle()\">\n" +
    "            <div class=\"pull-left\" style=\"padding-top: 5px;\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </div>\n" +
    "            <div ng-bind=\"Settings.header()\" class=\"pull-left navbar-brand-extended\">\n" +
    "                Observations\n" +
    "            </div>\n" +
    "        </button>\n" +
    "      </span>\n" +
    "    </span>\n" +
    "    <span ng-include=\"'/ng_templates/_patient_badge.html'\" class=\"navbar-right patient-badge\"  onload=\"patient=getPatient(Settings.getPatientId());\"></span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/_patient.html',
    "<div class=\"row item-row\">\n" +
    "    <div class=\"col-xs-2 col-patient\">\n" +
    "        <img class=\"img-responsive\" ng-src=\"images/photos/{{patient.id}}.png\"/>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-10 col-patient\">\n" +
    "        <h4>\n" +
    "          {{patient.name}}\n" +
    "          <small>\n" +
    "              {{ patient.gender }}, {{age(patient)}} y</span>\n" +
    "          </small>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/_patient_badge.html',
    "<div>\n" +
    "  <div class=\"pull-right\">\n" +
    "    <img class=\"img-badge\" ng-src=\"images/photos/{{patient.id}}.png\"/>\n" +
    "  </div>\n" +
    "  <div class=\"pull-right\">\n" +
    "    <div style=\"padding-top: 3px;\">\n" +
    "      <strong>\n" +
    "        {{ patient.name}}\n" +
    "      </strong>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "\n" +
    "        {{patient.gender}}, {{age(patient)}} y\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('/ng_templates/_timeline_item.html',
    "<div class=\"row timeline-item-row\">\n" +
    "  <div class=\"timeline-item-icon-container col-xs-2 col-md-1 text-center\">\n" +
    "    <div class=\"icon fancy-icon\" ng-class=\"'medapp-icon-' + item.type\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-7 col-md-9 timeline-item-main\">\n" +
    "    <div class=\"timeline-item-title\"><strong>{{item.name}}</strong></div>\n" +
    "    <div class=\"text-muted\">{{item.doctor_name}}</div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-3 col-md-2 text-right timeline-item-datetime\">\n" +
    "    <span>\n" +
    "      {{item.createdAt | date: 'MMM, dd'}}\n" +
    "    </span>\n" +
    "    <span class=\"text-muted\">\n" +
    "      {{item.createdAt | date: 'yyyy'}}\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/allergy_list.html',
    "<div class=\"allergy-list-frame container\">\n" +
    "  <div ng-controller=\"AllergyListCtrl\">\n" +
    "    <div class=\"row item-row\" ng-repeat=\"item in items\">\n" +
    "      <div class=\"col-xs-9\">{{item.substance}}</div>\n" +
    "      <div class=\"col-xs-3 text-right\">\n" +
    "        <span>\n" +
    "          {{item.RxNorm}}\n" +
    "        </span>\n" +
    "        <span class=\"text-muted\">\n" +
    "          RxNorm\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/calendar.html',
    "<div class=\"calendar-frame container\" ng-controller=\"CalendarCtrl\">\n" +
    "  <div ui-calendar=\"fcConfig.calendar\" calendar=\"medCalendar\"\n" +
    "       ng-model=\"eventSources\" class=\"span8 calendar\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/chat.html',
    "<div class=\"chat container\" ng-controller=\"ChatCtrl\">\n" +
    "  <div class=\"chat-input\">\n" +
    "    <form ng-submit='addMessage()'>\n" +
    "      <input type=\"text\" class=\"form-control\" id=\"message\"\n" +
    "             placeholder=\"Type your message here\" ng-model=\"messageBody\">\n" +
    "      <input type=\"submit\" value=\"Send\" class=\"btn btn-primary\" />\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"messages clearfix\">\n" +
    "    <div class=\"message\" ng-repeat=\"message in messages | reverse\" ng-class=\"{ mine: ( message.sender == senderName )}\">\n" +
    "      <div class=\"body\">\n" +
    "        <span class=\"triangle\"></span>\n" +
    "        {{ message.body }}\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"meta\">\n" +
    "        <span class=\"author\">{{message.sender}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/encounters.html',
    "<div class=\"encounters-frame container\">\n" +
    "  <div ng-controller=\"EncounterListCtrl\">\n" +
    "    <div class=\"row item-row\" ng-repeat=\"item in items\">\n" +
    "      <div class=\"col-xs-12\"><strong>{{item.name[0]}} | {{item.name[1]}}</strong></div>\n" +
    "      <div ng-repeat=\"row in item.data\">\n" +
    "        <div class=\"col-xs-12\">{{row[0]}}:</div>\n" +
    "        <div class=\"col-xs-12\">{{row[1]}}</div>\n" +
    "      </div>\n" +
    "      <div style=\"padding-left: 15px;\">\n" +
    "        <span class=\"fancy-icon medapp-icon-admit\"></span>\n" +
    "        {{item.admit}}\n" +
    "        <span class=\"fancy-icon medapp-icon-discharge\"></span>\n" +
    "        {{item.discharge}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
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
    "  <li><a href=\"#\">Chat</a></li>\n" +
    "</ul>\n"
  );


  $templateCache.put('/ng_templates/page_under_construction.html',
    "<div class=\"container page-under-construction-frame\">\n" +
    "  <div ng-controller=\"PageUnderConstructionCtrl\" class=\"alert alert-danger\">\n" +
    "    Not Found\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/patients_list.html',
    "<div class=\"container\" ng-controller=\"PatientsListCtrl\">\n" +
    "  <ul class=\"list-unstyled\">\n" +
    "    <li class=\"patient-item\" ng-repeat=\"patient in patients\">\n" +
    "      <a href=\"#/patients/{{ patient.id }}\">\n" +
    "        <div ng-include=\"'/ng_templates/_patient.html'\"></div>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/problem_list.html',
    "<div class=\"problem-list-frame container\">\n" +
    "  <div ng-controller=\"ProblemListCtrl\">\n" +
    "    <div ng-repeat=\"item in items\" class=\"timeline-item\">\n" +
    "      <div class=\"row timeline-item-row\"  style=\"padding-left: 10px\">\n" +
    "        <div class=\"col-xs-10\">\n" +
    "          <div class=\"timeline-item-title\">{{item.diagnoses}}</div>\n" +
    "          <div class=\"text-muted\">{{item.date}} by {{item.institution}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-2 text-right timeline-item-datetime\">\n" +
    "          <div>\n" +
    "            {{item.code}}\n" +
    "          </div>\n" +
    "          <div class=\"text-muted\">\n" +
    "            ICD-9\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/profile.html',
    "<div class=\"profile-frame container\">\n" +
    "  <div ng-controller=\"ProfileCtrl\">\n" +
    "    <div class=\"row item-row profile-photo-row\">\n" +
    "      <div class=\"col-xs-4 no-padding-right\"><img class=\"img-responsive\" ng-src=\"images/photos/{{patient.id}}.large.png\"/></div>\n" +
    "      <div class=\"col-xs-8\">\n" +
    "        <div class=\"profile-header\">\n" +
    "          {{patient.fullname}}\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            Sex:\n" +
    "          </span>\n" +
    "          {{patient.gender}}\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            DoB:\n" +
    "          </span>\n" +
    "          {{patient.date_of_birth | date: 'shortDate'}} ({{patient_age()}} y/o)\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            Race:\n" +
    "          </span>\n" +
    "          {{patient.race}}\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            Ethnicity:\n" +
    "          </span>\n" +
    "          {{patient.ethnicity}}\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            Language:\n" +
    "          </span>\n" +
    "          {{patient.language}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row item-row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <div class=\"profile-header\">\n" +
    "          Contacts\n" +
    "        </div>\n" +
    "        <div class=\"profile-ident\">\n" +
    "          <div>\n" +
    "            <span class=\"text-muted\">\n" +
    "              Address:\n" +
    "            </span>\n" +
    "            {{patient.address}}\n" +
    "          </div>\n" +
    "          <div>\n" +
    "            <span class=\"text-muted\">\n" +
    "              Phone No.:\n" +
    "            </span>\n" +
    "            {{patient.phone}}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row item-row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <div class=\"profile-header\">\n" +
    "          Care Providers\n" +
    "        </div>\n" +
    "        <div class=\"profile-ident\">\n" +
    "          <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            PMD:\n" +
    "          </span>\n" +
    "          {{patient.physician}}\n" +
    "          </div>\n" +
    "          <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            Phone No.:\n" +
    "          </span>\n" +
    "          {{patient.physician_phone}}\n" +
    "          </div>\n" +
    "          <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            Nurse Navigator:\n" +
    "          </span>\n" +
    "          {{patient.nurse}}\n" +
    "          </div>\n" +
    "          <div>\n" +
    "          <span class=\"text-muted\">\n" +
    "            Phone No.:\n" +
    "          </span>\n" +
    "          {{patient.nurse_phone}}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"row item-row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <div class=\"profile-header\">\n" +
    "            Insurance Company\n" +
    "          </div>\n" +
    "          <div class=\"profile-ident\">\n" +
    "            <div>\n" +
    "              <span class=\"text-muted\">\n" +
    "                Name:\n" +
    "              </span>\n" +
    "              {{patient.insurance_company.name }}\n" +
    "            </div>\n" +
    "            <div>\n" +
    "              <span class=\"text-muted\">\n" +
    "                phone:\n" +
    "              </span>\n" +
    "              {{patient.insurance_company.phone}}\n" +
    "            </div>\n" +
    "            <div>\n" +
    "              <span class=\"text-muted\">\n" +
    "                code:\n" +
    "              </span>\n" +
    "              {{patient.insurance_company.code }}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/timeline_item.html',
    "<div class=\"timeline-item-frame container\" ng-controller=\"TimelineItemsCtrl\">\n" +
    "  <div ng-include=\"'/ng_templates/_timeline_item.html'\" class=\"timeline-item\"></div>\n" +
    "  <div class=\"timeline-item-data-container col-xs-12\" ng-bind-html='item.data'></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/timeline_list.html',
    "<div class=\"timeline-list-frame container\" ng-controller=\"TimelineListCtrl\">\n" +
    "  <ul class=\"list-unstyled\">\n" +
    "    <li class=\"timeline-item\" ng-repeat=\"item in items\">\n" +
    "      <a class=\"timeline-item-link\"\n" +
    "         href=\"#{{ patient && '/patients/' + patient.id }}/items/{{ item.id }}\">\n" +
    "        <div ng-include=\"'/ng_templates/_timeline_item.html'\"></div>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );

}]);
