'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-angular-templates');
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
    watch: {
      options: {
        nospawn: true
      },
      sources: {
        files: ['templates/**/*.html'],
        tasks: ['build'],
        options: {
          events: ['changed', 'added'],
          nospawn: true
        }
      }
    }
  })
  grunt.registerTask('build', ['ngtemplates']);
};
