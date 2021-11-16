module.exports.init = function(grunt){
	var exports = {};

	exports.exec = function(done, aRts){
		for (var i=0; i<aRts.length; i++) {
			var oRts = aRts[i];
			var sFolder = oRts.folder;
			var sSearch = oRts.search;
			var sReplace = oRts.replace;

			var command, process, exec;

			command = `python node_modules/processpy/process.py -rts ${sFolder} "${sSearch}" "${sReplace}"`;
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