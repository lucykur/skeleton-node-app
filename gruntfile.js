module.exports = function(grunt){
    grunt.initConfig({
        simplemocha: {
            unit: {
                src: ['tests/unit/**/*.js'],
            },
            functional: {
                src: ['tests/functional/**/*.js'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.registerTask('start-application', function() { require('./app');})
    grunt.registerTask('default', ['simplemocha:unit', 'start-application', 'simplemocha:functional']);
}
