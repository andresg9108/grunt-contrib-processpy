'use strict';

module.exports = function(grunt) {
	grunt.loadTasks('tasks');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		processpy: {
			sql: [{
				file: './example/sql/myfile.sql', 
				folder: './example/sql/files'
			}],
			rts: [{
				folder: './example/rts',
				search: 'Old string',
				replace: 'New string'
			}]
		}
	});
};
