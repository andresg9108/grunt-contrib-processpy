'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        processpy: {
            options: {
            },
        }
    });
    
	grunt.loadTasks('tasks');
};
