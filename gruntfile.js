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
				sourceMap: false
			},
			dist: {
				files: {
					"public/css/styles.css": "assets/scss/styles.scss"
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	require("load-grunt-tasks")(grunt);

	// Default task(s).
	grunt.registerTask("default", []);
};
