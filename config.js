(function(){
	exports.VERSION = '0.1';	
	exports.controller_location = "./controllers/";
	exports.static_location = "/Users/jim/Dropbox/node/bivouac/static";
	exports.enable_mem_cache = false;
	exports.deployment = "development";
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