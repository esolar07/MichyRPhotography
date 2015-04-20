module.exports = function(grunt){
	
	//Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify:{
			prod:{
				src: 'js/*.js',
				dest:'js/script.min.js'
			},
			dev:{
				options:{
					beautify:true,
					mangle:false,
					compress:false,
					preserveComments:'all'
				},
				src: 'js/*.js',
				dest:'js/script.min.js'
			}
		},
		sass:{
			dev: {
				options:{
					outputStyle: 'expanded'
				},
				files: {
					'stylesheets/app.css': 'scss/app.scss'
				}
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'stylesheets/app.css': 'scss/app.scss'
				}
			}
		},
		watch: {
			js: {
				file: ['js/*.js'],
				task: ['uglify:dev']
			},
			css: {
				file: ['scss/app.scss'],
				task: ['sass:dev']
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	//Register task(s)
	grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
	grunt.registerTask('build', ['uglify:build', 'sass:build']);
};