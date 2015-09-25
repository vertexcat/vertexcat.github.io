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

      imagemin: {
        main: {
          files: [{
            expand: true,
            cwd: 'images/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/'
          }]
        },
        blog: {
          files: [{
            expand: true,
            cwd: 'images/blog/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/blog/'
          }]
        },
        comics: {
          files: [{
            expand: true,
            cwd: 'images/comics-etc/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/comics-etc/'
          }]
        },
        illustration: {
          files: [{
            expand: true,
            cwd: 'images/illustration/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/illustration/'
          }]
        },
      },

      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
        files: [{
          expand: true,
          cwd: '_site',
          src: ['**/*.{html,php}'],
          dest: '_site'
        }]
      }
    },

      watch: {
        js: {
          files: ['js/global.js'],
          tasks: ['buildjs', 'buildimg', 'buildhtml']
        }
      },

    });

 grunt.registerTask('default', ['watch']);
 grunt.registerTask('buildjs', ['concat', 'uglify']);
 grunt.registerTask('buildimg', ['imagemin']);
 grunt.registerTask('buildhtml', ['htmlmin']);

};