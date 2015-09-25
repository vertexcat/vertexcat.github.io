module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      concat: {   
        build: {
          src: [
            'js/lib/*.js', // All JS in the libs folder
            'js/custom.js'  // This specific file
          ],
        dest: 'js/build/global.js',
        }
      },

      uglify: {
    		build: {
        	files: {
            'js/build/global.min.js': ['js/build/global.js']
          }
        }
      },

      watch: {
        js: {
          files: ['js/*','js/lib/*'],
          tasks: ['buildjs']
        },
      },

    });


 grunt.registerTask('buildjs', ['concat', 'uglify']);
 grunt.registerTask('default', [
  'buildjs',
  'watch'
  ]);
};