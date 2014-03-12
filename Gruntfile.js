'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-json');

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
    clean: ['doctor.html', 'patient.html', 'build/**/*'],
    concat: {
      css: {
        src: ['build/*.css'],
        dest: 'build/timeline.css'
      },
      jsForDoctor: {
        src: [
          'build/patients.js',
          'build/mrBrownData.js',
          'js/common.js',
          'js/doctor.js',
          'js/templates.js',
          'js/ng-mobile-menu.js'
        ],
        dest: 'build/doctor.js'
      },
      jsForPatient: {
        src: [
          'build/patients.js',
          'build/mrBrownData.js',
          'js/common.js',
          'js/patient.js',
          'js/templates.js',
          'js/ng-mobile-menu.js'
        ],
        dest: 'build/patient.js'
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
    }
  })
  grunt.registerTask('build', [
    'clean',
    'less',
    'ngtemplates',
    'assemble',
    'json',
    'concat'
  ]);
};
