'use strict';
module.exports = function register(grunt) {
    grunt.registerTask('react-templates', function () {
        try {
            var reactTemplates = require('react-templates');
            var conf = grunt.config.get('reactTemplates');
//            console.log(conf);
            var src = conf.src || ['packages/*/src/main/**/*.rt'];
            var glob = require('glob');
//        var files = glob.sync(src, {cwd: process.cwd()});

            var files = [];
            src.forEach(function (s) {
                files = files.concat(glob.sync(s, {cwd: process.cwd()}));
            });

//            console.log(files);

            files.forEach(function convert(file) {
                try {
                    var outFile = file + '.js';
                    reactTemplates.convertFile(file, outFile);
                    grunt.log.writeln('converting file ' + file + ' => ' + outFile);
                } catch (e) {
                    grunt.log.writeln('Error converting: ' + file + ', ' + e);
                }
            });
        } catch (e) {
            grunt.log.writeln('Error: ' + e);
        }
    });
};
