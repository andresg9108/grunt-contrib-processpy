'use strict';
module.exports = function(grunt) {

	var oConfig = grunt.config();
	var oProcesspy = oConfig.processpy;
	var sPath = oProcesspy.options.path;

	var oProcessHtml = require('./lib/process_html.js').init(grunt);
	grunt.registerTask('html', 'Execute the "process.py -html".',
	function(){
		var done = this.async();
		oProcessHtml.exec(done);
	});
};