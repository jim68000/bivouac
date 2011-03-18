(function(){
	
	var this_loc = "/Users/jim/Dropbox/node/bivouac";
	
	
	exports.VERSION = '0.2';	
	exports.APP_PORT = "8124";
	exports.controller_location = "./controllers/";
	exports.this_loc = this_loc;
	exports.static_location = this_loc + "/static";
	exports.enable_route_mem_cache = true;
	exports.deployment = "development";
	exports.default_file = "index.html";
	exports.log_level = 0; // FIXME point to external config
	exports.mimes = {
		"html": "text/html",
		"ico": "image/vnd.microsoft.icon",
		"css": "text/css",
		"jpg": "image/jpeg",
		"png": "image/png",
		"gif": "image/gif",
		"js": "text/javascript",
		"json": "text/plain", 
		"pdf": "application/pdf"
	};
	exports.bloom = {
		"start_delimiter": "((",
		"end_delimiter": "))",
		"vm_start_delimiter": "{",
		"vm_end_delimiter": "}",
		"inplace_variable_indicator": "="   
	};
	
}).call(this);