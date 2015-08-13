'use strict';
module.exports = function register(grunt) {
    grunt.registerMultiTask('reactTemplates', function () {
      try {
        var rtOptions = this.options();
        var path = require('path');
        rtOptions._ = this.filesSrc.map(function(file) { return path.resolve(file)});
        var exitCode = require('react-templates').executeOptions(rtOptions);
        grunt.log.ok('processed ' + this.filesSrc.length + ' file' + (this.filesSrc.length > 1 ? 's' : ''));
        return exitCode === 0;
      } catch (e) {
        grunt.log.error('Error: ' + e + ' ' + e.stack());
      }
    });
    grunt.registerTask('react-templates', function() {
      grunt.task.run(['reactTemplates'].concat(this.args).join(':'));
    });
};
