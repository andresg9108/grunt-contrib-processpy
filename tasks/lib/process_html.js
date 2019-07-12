module.exports.init = function(grunt){
	var exports = {};

	exports.exec = function(done){
		var command, process, exec;
		 
		command = "python node_modules/processpy/process.py -html";
		grunt.log.writeln('Run: ' + command);
		exec = require('child_process').exec;
		process = exec(command, function (error, stdout, stderr) {
			if (error) {
				if(error.code !== 0){
					grunt.warn(stderr);
					grunt.log.writeln(error.stack);
				}
			}
			done();
		});
	};
	 
	return(exports);
};