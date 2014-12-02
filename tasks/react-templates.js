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

//            options._ = this.data.src; // set positional arguments
            conf._ = files;
            var ret = reactTemplates.executeOptions(conf);
            return ret === 0;
//        options.config = options.config ? path.resolve(options.config) : '';

//        grunt.log.writeln('this.filesSrc: ' + this.filesSrc);
//        grunt.log.writeln('options: ' + JSON.stringify(options, undefined, 2));

//            var packages = require('./lib/cli');
//            return packages.execute(options) === 0;

//            files.forEach(function convert(file) {
//                try {
//                    var outFile = file + '.js';
//                    var context = reactTemplates.context;
//                    reactTemplates.convertFile(file, outFile, conf, context);
//                    context.getMessages().forEach(function (m) {
//                        grunt.log.writeln('converting file ' + file + ' => ' + outFile);
//                    });
//                    grunt.log.writeln('converting file ' + file + ' => ' + outFile);
//                } catch (e) {
//                    grunt.log.writeln('Error converting: ' + file + ', ' + e);
//                }
//            });
        } catch (e) {
            grunt.log.writeln('Error: ' + e);
        }
    });
};
