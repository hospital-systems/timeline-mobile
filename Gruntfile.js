'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-swig');

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
          'views/**/*.html'
        ],
        tasks: ['build'],
        options: {
          events: ['changed', 'added'],
          nospawn: true
        }
      }
    },
    clean: ['*.html', 'ng_templates', 'build/**/*'],
    concat: {
      css: {
        src: ['build/*.css'],
        dest: 'build/timeline.css'
      },
      js: {
        src: ['js/timeline_items.js', 'js/*.js'],
        dest: 'build/timeline.js'
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
        engine: 'swig',
        swig: {
          varControls: ["<%=", "%>"]
        },
        layoutdir: 'src/views/layouts',
        flatten: true
      },
      // ngTemplates: {
      //   options: { partials: ['src/ng_templates/shared/*.html'] },
      //   src: ['src/ng_templates/*.html'],
      //   dest: 'ng_templates/'
      // },
      views: {
        options: {
          layout: 'index.html',
          partials: ['src/views/shared/*.html']
        },
        src: ['src/views/*.html'],
        dest: './'
      }
    },
    ngtemplates: {
      app: {
        src: ['ng_templates/*.html'],
        dest: 'js/templates.js',
        options: {
          module: 'angular-timeline-demo',
          prefix: '/'
        }
      }
    }
  })
  grunt.registerTask('build', [
    'clean',
    'less',
    'assemble',
    'ngtemplates',
    'concat:css',
    'concat:js'
  ]);
};
