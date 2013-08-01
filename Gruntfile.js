module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        coffee:{
            compileJoined: {
                options: {
                    join: true
                },
                files: {
                    'js/main.js': [
                        'coffee/util.coffee', 
                        'coffee/painter.coffee',
                        'coffee/renderer.coffee',
                        'coffee/loop.coffee',
                    ] // concat then compile into single file
                }
            },
        },
        watch: {
            coffee: {
                files: ['coffee/*.coffee'],
                tasks: 'coffee'
            }
        }
    });
    grunt.registerTask('default',[
        'coffee', 'watch'
    ]);
}
