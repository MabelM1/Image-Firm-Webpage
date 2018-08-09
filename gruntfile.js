//The "wrapper" function
module.exports = function(grunt) {
	const sass = require("node-sass");

	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		//COMPILE SASS TO CSS USING NODE-SASS
		sass: {
			options: {
				implementation: sass,
				sourceMap: false,
				includePaths: require("bourbon").includePaths
			},
			dist: {
				files: {
					"public/css/styles.css": "assets/scss/styles.scss"
				}
			}
		},

		//GRUNT CONTRIB WATCH
		watch: {
			sass: {
				files: ["assets/scss/**/*.scss"],
				tasks: ["sass"]
			},
			scripts: {
				files: ["assets/js/*.js"],
				tasks: ["uglify"]
			}
		},

		//GRUNT CONTRIB UGLIFY
		uglify: {
			my_target: {
				files: {
					"public/js/scripts.js": ["assets/js/scripts.js"]
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	require("load-grunt-tasks")(grunt);

	// Default task(s).
	grunt.registerTask("default", ["watch"]);
};
