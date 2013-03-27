module.exports = function(grunt) {
    'use strict';

    var play = require('play');

    grunt.registerMultiTask('play', 'Play Sound !', function() {

        if (this.data.file === undefined) {
            grunt.log.error('file not specified.');
            return;
        }

        play.sound(this.data.file);

    });
};