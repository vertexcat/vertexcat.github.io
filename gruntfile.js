module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      scsslint: {
        allFiles: [
          '_sass/*.scss',
        ],
        options: {
          bundleExec: true,
          config: '.scss-lint.yml',
          reporterOutput: 'scss-lint-report.xml',
          colorizeOutput: true
        },
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
      },

    });


 grunt.registerTask('buildjs', ['concat', 'uglify']);
 grunt.registerTask('buildhtml', ['htmlmin']);
  grunt.registerTask('lint', ['scsslint']);
 grunt.registerTask('default', [
  'buildjs',
  'buildhtml',
  'watch'
  ]);
};