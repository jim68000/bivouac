(function(){
	var router = require('../router.js');
	var static_handler = require('../handlers/static.js');
	var remapper = require('../handlers/remapper.js');
	exports.setup = function() {
		router.add_route(/.*favicon.ico.*/, 	static_handler);
		router.add_route(/.*.html/, 			static_handler); 
		router.add_route(/^\/$/, 					remapper);
		router.add_route(/\/.*/, 				static_handler);
	};
}).call(this);