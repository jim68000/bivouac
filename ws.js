(function(){
	var Response = require('./types/response.js').Response;
		
	exports.VERSION = '0.1';	

	exports.render = function(url) {
		return "i\'ll have a lager";
	};
	
	exports.writer = function(res, payload) {
		res.writeHead(payload.code, {'Content-Type': payload.mime});
		res.write(payload.payload);
		res.end();
	};
	
}).call(this);