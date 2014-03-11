module.exports = function(grunt){
    grunt.initConfig({
    simplemocha: {
        test: {
            src: ['tests/**/*.js'],
        },
    }
    });

    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.registerTask('default', ['simplemocha:test']);
}
