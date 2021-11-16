module.exports.init = function(grunt){
	var exports = {};

	exports.exec = function(done, aSQL){
		for (var i=0; i<aSQL.length; i++) {
			var oSQL = aSQL[i];
			var sFile = oSQL.file;
			var sFolder = oSQL.folder;

			var command, process, exec;

			command = `python node_modules/processpy/process.py -sql ${sFile} ${sFolder}`;
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
		}
	};
	 
	return(exports);
};