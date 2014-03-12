'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-json');
  grunt.loadNpmTasks('grunt-bower-task');

  function convertJsonName(filename) {
    return filename.replace (/(?:^|[-_])(\w)/g, function (_, c) {
      return c ? c.toUpperCase () : '';
    })
  }

  grunt.initConfig({
    watch: {
      options: {
        nospawn: true
      },
      sources: {
        files: [
          'ng_templates/**/*.html',
          'styles/**/*.less',
          'js/**/*.js',
          'views/**/*.html',
          'json/**/*.json',
          'json_for_mr_brown/**/*.json'
        ],
        tasks: ['build'],
        options: {
          events: ['changed', 'added'],
          nospawn: true
        }
      }
    },
    clean: {
      bower: ['bower_components'],
      build: ['doctor.html', 'patient.html', 'build/**/*']
    },
    concat: {
      css: {
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css',
          'build/*.css'
        ],
        dest: 'build/timeline.css'
      },
      commonStuff: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-animate/angular-animate.min.js',
          'bower_components/angular-route/angular-route.min.js',
          'bower_components/angular-sanitize/angular-sanitize.min.js',
          'build/patients.js',
          'build/mrBrownData.js',
          'js/common.js',
          'js/templates.js',
          'js/ng-mobile-menu.js'
        ],
        dest: 'build/common_stuff.js'
      },
      calendarStuff: {
        src: [
          'bower_components/jquery-ui/ui/jquery-ui.js',
          'bower_components/angular-ui-calendar/src/calendar.js',
          'bower_components/fullcalendar/fullcalendar.js',
          'bower_components/fullcalendar/gcal.js'
        ],
        dest: 'build/calendar_stuff.js'
      }
    },
    ngtemplates: {
      timelineWithAnimation: {
        src: 'ng_templates/*.html',
        dest: 'js/templates.js',
        options: {
          module: 'timeline-with-animation',
          prefix: '/'
        }
      }
    },
    less: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.less', '!.*#.less'],
          dest: 'build',
          ext: '.css'
        }]
      }
    },
    assemble: {
      options: {
        flatten: true,
        layout: ['views/layouts/index.html'],
        partials: ['views/**/_*.html']
      },
      doctor: {
        src: ['views/doctor.html'],
        dest: './'
      },
      patient: {
        src: ['views/patient.html'],
        dest: './'
      }
    },
    json: {
      patients: {
        options: {
            namespace: 'patients',
            processName: convertJsonName
        },
        src: ['json/**/*.json'],
        dest: 'build/patients.js'
      },
      mrBrownData: {
        options: {
            namespace: 'mrBrownData',
            processName: convertJsonName
        },
        src: ['json_for_mr_brown/**/*.json'],
        dest: 'build/mrBrownData.js'
      }
    },
    bower: { install: { options: { copy: false, verbose: true } } }
  })
  grunt.registerTask('bowerInstall', [
    'clean:bower', 'bower'
  ]);
  grunt.registerTask('build', [
    'clean:build',
    'less',
    'ngtemplates',
    'assemble',
    'json',
    'concat'
  ]);
  grunt.registerTask('all', [
    'bowerInstall', 'build'
  ]);
};
