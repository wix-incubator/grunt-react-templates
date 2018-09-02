'use strict'
module.exports = function register(grunt) {
    grunt.registerMultiTask('reactTemplates', function () {
        try {
            const rtOptions = this.options()
            const path = require('path')
            rtOptions._ = this.filesSrc.map(file => path.resolve(file))
            const exitCode = require('react-templates').executeOptions(rtOptions)
            grunt.log.ok(`processed ${this.filesSrc.length} file${this.filesSrc.length > 1 ? 's' : ''}`)
            return exitCode === 0
        } catch (e) {
            grunt.log.error(`Error: ${e} ${e.stack()}`)
        }
    })

    grunt.registerTask('react-templates', function () {
        grunt.task.run(['reactTemplates'].concat(this.args).join(':'))
    })
}
