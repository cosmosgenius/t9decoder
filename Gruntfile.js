/*jslint node: true */
'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    globals: ['should'],
                    timeout: 10000,
                    ignoreLeaks: false,
                    ui: 'bdd',
                    reporter: 'spec',
                    require: ['should', 'coverage/blanket']
                },
                src: ['test/**/*.js']
            },
            'html-cov': {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage.html'
                },
                src: ['test/**/*.js']
            },
            'travis-cov': {
                options: {
                    reporter: 'travis-cov'
                },
                src: ['test/**/*.js']
            }
        },
        watch: {
            library: {
                files: ['src/**/*.js', '!**/node_modules/**'],
                tasks: ['mochaTest'],
                options: {
                    nospawn: true //Without this option specified express won't be reloaded
                }
            },
            configFiles: {
                files: ['Gruntfile.js', 'config/*.js'],
                options: {
                    reload: true
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['mochaTest']);
};