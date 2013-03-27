/*
 * grunt-play
 * https://github.com/astronaughts/grunt-play/
 *
 * Copyright (c) 2013 Author, contributors
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  'use strict';
  
  grunt.initConfig({
    jshint: {
      all: [
        'tasks/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      scripts: {
        files: [
        	'tasks/**/*.js'
        ],
        tasks: ['jshint', 'play:fanfare']
      }
    },
    play: {
      fanfare: {
        file: './sounds/fanfare.mp3'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'play']);
};