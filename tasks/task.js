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
};