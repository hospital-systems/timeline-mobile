'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-json');

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
          'json/**/*.json'
        ],
        tasks: ['build'],
        options: {
          events: ['changed', 'added'],
          nospawn: true
        }
      }
    },
    clean: ['*.html', 'build/**/*'],
    concat: {
      css: {
        src: ['build/*.css'],
        dest: 'build/timeline.css'
      },
      js: {
        src: ['build/json.js', 'js/*.js'],
        dest: 'build/timeline.js'
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
      views: {
        options: {
          flatten: true,
          layout: ['views/layouts/index.html'],
          partials: ['views/**/_*.html']
        },
        src: ['views/index.html'],
        dest: './'
      }
    },
    json: {
      timelineItems: {
        options: {
            namespace: 'patients',
            processName: function(filename) {
              return filename.replace (/(?:^|[-_])(\w)/g, function (_, c) {
                return c ? c.toUpperCase () : '';
              })
            }
        },
        src: ['json/**/*.json'],
        dest: 'build/json.js'
      }
    }
  })
  grunt.registerTask('build', [
    'clean',
    'less',
    'ngtemplates',
    'assemble',
    'json',
    'concat:css',
    'concat:js'
  ]);
};
