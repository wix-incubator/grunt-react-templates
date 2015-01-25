'use strict';
module.exports = function register(grunt) {
    grunt.registerTask('react-templates', function () {
        try {
            var reactTemplates = require('react-templates');
            var conf = grunt.config.get('reactTemplates');
            var src = conf.src || ['**/*.rt'];
            var glob = require('glob');

            var files = [];
            src.forEach(function (s) {
                files = files.concat(glob.sync(s, {cwd: process.cwd()}));
            });

            conf._ = files;
            var ret = reactTemplates.executeOptions(conf);
            return ret === 0;
        } catch (e) {
            grunt.log.writeln('Error: ' + e);
        }
    });
};
