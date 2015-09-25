module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      connect: {
        server: {
          options: {
            port: 4000,
            base: '_site'
          }
        }
      },

      jekyll: {
        dist: {
          options: {
          }
        }
      },
   
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

      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
        files: [{
          expand: true,
          cwd: '_site/',
          src: ['**/*.{html,php}', '*.{html,php}'],
          dest: '_site/'
        }]
      }
    },

      watch: {
        js: {
          files: ['js/*','js/lib/*'],
          tasks: ['buildjs']
        },
        html: {
          files: ['_site/*'],
          tasks: ['buildhtml']
        },
        jekyll: {
          files: ['_includes/**/*', '_layouts/**/*', '_plugins/**/*', '_posts/**/*', '*.html', '_config.yml', '_site/**/*.{html,php}'],
          tasks: ['jekyll', 'htmlmin'],
          options: {
            spawn: false
          }
        },
      },

    });


 grunt.registerTask('buildjs', ['concat', 'uglify']);
 grunt.registerTask('buildhtml', ['jekyll', 'htmlmin']);
  grunt.registerTask('connect', ['connect']);
 grunt.registerTask('default', [
  'connect',
  'buildjs',
  'buildhtml',
  'watch'
  ]);
};