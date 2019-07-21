'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        processpy: {
            sql: [{
                file: 'E:/sql/test/test.sql', 
                folder: 'E:/sql/test/sql'
            },{
                file: 'E:/sql/test/test2.sql',
                folder: 'E:/sql/test/sql2'
            }]
        }
    });
    
	grunt.loadTasks('tasks');
};
