(function(){
	var html = require('../html.js');
	var Response = require('../types/response.js').Response;
	var log = require('../logger.js');
	exports.VERSION = '0.1';	

	exports.render = function(url) {
		return "i\'ll have a lager";
	};
	
	exports.handle = function(req, response, writer) {
		writer(req, response, Response(html.doc("Beer", "I will drink the place dry"), 200));
	};
	
}).call(this);