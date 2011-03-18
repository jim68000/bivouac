(function(){
	var html = require('../html.js');
	var Response = require('../types/response.js').Response;
	exports.VERSION = '0.1';	
	exports.render = function(url) {
		return "hello " + url;
	};
	
	exports.handle = function(url) {
		writer(req, response, Response("DATABASE ERROR " + err, 500));
	};
	
}).call(this);