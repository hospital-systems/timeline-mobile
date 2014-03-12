angular.module('timeline-with-animation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/ng_templates/_header_for_doctor.html',
    "<div>{{ Settings.header() }}</div>\n" +
    "<div ng-if=\"getPatient(Settings.getPatientId())\">\n" +
    "  <small>{{ getPatient(Settings.getPatientId()).name }}</small>\n" +
    "</div>\n"
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


  $templateCache.put('/ng_templates/allergy_list.html',
    "<div class=\"allergy-list-frame container\">\n" +
    "  <div ng-controller=\"AllergyListCtrl\">\n" +
    "    <div class=\"row item-row\" ng-repeat=\"item in items\">\n" +
    "      <div class=\"col-xs-12\">{{item.substance}}</div>\n" +
    "      <div class=\"col-xs-12 text-muted\">(RxNorm: {{item.RxNorm}})</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/chat.html',
    "<div class=\"chat container\">\n" +
    "  <div ng-controller=\"ChatCtrl\">\n" +
    "\n" +
    "    <div class=\"chat-input\">\n" +
    "      <form role=\"form\" class=\"form-inline\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"sender\">Sender</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"sender\" placeholder=\"Sender\" ng-model=\"newMessage.sender\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"message\">Message</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"message\" placeholder=\"Message\" ng-model=\"newMessage.body\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-default\" ng-click=\"addMessage()\">Send</button>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"row item-row\" ng-repeat=\"message in messages\">\n" +
    "      <div class=\"col-xs-12\"><strong>{{message.sender}}:</strong></div>\n" +
    "      <div class=\"col-xs-12 text-right\">{{message.body}}</div>\n" +
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
    "        {{ patient.name }}\n" +
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
    "        <div class=\"col-xs-2 text-center timeline-item-datetime\">\n" +
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
    "    <div class=\"row item-row\">\n" +
    "        <div class=\"col-xs-6\">Name</div>\n" +
    "        <div class=\"col-xs-6 text-right\">{{patient.fullname}}</div>\n" +
    "    </div>\n" +
    "      <div class=\"row item-row\">\n" +
    "          <div class=\"col-xs-6\">Gender</div>\n" +
    "          <div class=\"col-xs-6 text-right\">{{patient.gender}}</div>\n" +
    "      </div>\n" +
    "      <div class=\"row item-row\">\n" +
    "          <div class=\"col-xs-6\">Date of birth</div>\n" +
    "          <div class=\"col-xs-6 text-right\">{{patient.date_of_birth}}</div>\n" +
    "      </div>\n" +
    "      <div class=\"row item-row\">\n" +
    "          <div class=\"col-xs-6\">Address</div>\n" +
    "          <div class=\"col-xs-6 text-right\">{{patient.address}}</div>\n" +
    "      </div>\n" +
    "      <div class=\"row item-row\">\n" +
    "          <div class=\"col-xs-6\">Phone</div>\n" +
    "          <div class=\"col-xs-6 text-right\">{{patient.phone}}</div>\n" +
    "      </div>\n" +
    "      <div class=\"row item-row\">\n" +
    "          <div class=\"col-xs-6\">Email</div>\n" +
    "          <div class=\"col-xs-6 text-right\">{{patient.email}}</div>\n" +
    "      </div>\n" +
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
