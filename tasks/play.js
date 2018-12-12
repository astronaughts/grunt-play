const path = require("path");
const player = require("play-sound")((opts = {}));

var sounds = [];
sounds["fanfare"] = "node_modules/grunt-play/sounds/fanfare.mp3";
sounds["beep"] = "node_modules/grunt-play/sounds/beep.mp3";

module.exports = function(grunt) {
  "use strict";
  grunt.registerMultiTask("play", "Play Sound !", function() {
    var file = "";
    if (this.data.sound) {
      file = sounds[this.data.sound];
      if (file === undefined) {
        grunt.log.error("unknown sound: " + this.data.sound);
        return;
      }
    } else {
      if (this.data.file === undefined) {
        grunt.log.error("file not specified.");
        return;
      }
      if (!grunt.file.exists(this.data.file)) {
        grunt.log.error("File not found.", this.data.file);
        return;
      }
      file = this.data.file;
    }

    var fullpath = path.resolve(file);
    if (this.data.player !== undefined) {
      player.player = this.data.player;
    }

    player.play(fullpath, function(err) {
      grunt.log.error("Beep!");
      if (err) {
        grunt.log.error(err);
      }
    });
  });
};
