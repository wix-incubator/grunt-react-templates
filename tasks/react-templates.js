'use strict';

module.exports = function register(grunt) {
    var async = require('async');
    var reactTemplates = require('react-templates');
    var path = require('path');
    var chalk = require('chalk');

    grunt.registerMultiTask('reactTemplates', 'Compile react template files into react js', function() {
        var done = this.async();

        var options = this.options({
            defines: null
        });

        var filesCreatedCount = 0;

        async.forEachSeries(this.files, function(f, n) {
            var destFile = path.normalize(f.dest);
            var srcFiles = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                return true;
            });

            if (srcFiles.length === 0) {
                // No src files, goto next target. Warn would have been issued above.
                return n();
            }

            var compiled = [];
            async.concatSeries(srcFiles, function(file, next) {
                compile(file, options, function(css, err) {
                    if (!err) {
                        compiled.push(css);
                        next(null);
                    } else {
                        n(false);
                    }
                });
            }, function() {
                if (compiled.length < 1) {
                    grunt.log.warn('Destination not written because compiled files were empty.');
                } else {
                    grunt.file.write(destFile, compiled.join(grunt.util.normalizelf(grunt.util.linefeed)));
                    grunt.verbose.writeln('File ' + chalk.cyan(destFile) + ' created.');
                    filesCreatedCount++;
                }
                n();
            });
        }, function() {
            grunt.log.ok(filesCreatedCount + ' ' + grunt.util.pluralize(filesCreatedCount, 'file/files') + ' created.');
            done();
        });
    });

    var compile = function(srcFile, options, callback) {
        var srcCode = grunt.file.read(srcFile);
        try {
            var jsCode = reactTemplates.convertTemplateToReact(srcCode, options);
            callback(jsCode, false);
        }
        catch (e) {
            grunt.log.error('Got an unexpected exception ' +
              'from the react templates compiler. ' +
              'The original exception was: ' +
              e);
            callback(null, e);
        }
    }
};
