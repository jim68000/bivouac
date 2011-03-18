(function(){
	
	
	var config = require('../config/config.js');
	var Response = require('../types/response.js').Response;
	var fs = require('fs');
	exports.VERSION = '0.2';
	exports.is_static = true;
	// build_res.handle(req.url, res, ws.writer);
	exports.handle = function(req, res, writer) {
		
		fs.stat(config.static_location + req.url, function(err, stat) {
			if (!err) {
				fs.readFile((config.static_location + req.url), function(err, data) {
					if (!err) {
						var filex = req.url.substring(req.url.lastIndexOf(".")+1);
						var response = Response(data, '200', config.mimes[filex]);
						writer(req, res, response);						
					} else {
						writer(req, res, Response('Problem with file ' + req.url + " " + err, '404', 'text/html'));
					}	
				});
			} else {
				writer(req, res, Response('Problem with file ' + req.url + " " + err, 404, 'text/html'));
			}
			
		});
	};
	
	
}).call(this)