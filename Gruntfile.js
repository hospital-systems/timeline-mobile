'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    ngtemplates: {
      app: {
        src: 'templates/*.html',
        dest: 'js/templates.js',
        options: {
          module: 'angular-timeline-demo',
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
    clean: ['build/**/*'],
    concat: {
      css: {
        src: ['build/*.css'],
        dest: 'build/timeline.css'
      },
      js: {
        src: ['js/*.js'],
        dest: 'build/timeline.js'
      }
    },
    watch: {
      options: {
        nospawn: true
      },
      sources: {
        files: ['templates/**/*.html', 'styles/**/*.less', 'js/**/*.js'],
        tasks: ['build'],
        options: {
          events: ['changed', 'added'],
          nospawn: true
        }
      }
    }
  })
  grunt.registerTask('build', [
    'clean',
    'less',
    'ngtemplates',
    'concat:css',
    'concat:js'
  ]);
};
