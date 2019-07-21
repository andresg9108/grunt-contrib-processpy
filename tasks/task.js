'use strict';
module.exports = function(grunt) {
	// Test process
	grunt.registerTask('process-test', 'Hello World',
	function(){
		console.log('Hello World');
	});

	// Html process
	var oProcessHtml = require('./lib/process_html.js').init(grunt);
	grunt.registerTask('process-html', 'Execute the "process.py -html".',
	function(){
		var done = this.async();
		oProcessHtml.exec(done);
	});

	// SQL process
	var oProcessSQL = require('./lib/process_sql.js').init(grunt);
	grunt.registerTask('process-sql', 'Execute the "process.py -sql".',
	function(){
		var oConfig = grunt.config();
		var aSQL = oConfig.processpy.sql;

		var done = this.async();
		oProcessSQL.exec(done, aSQL);
	});
};