(function(){
	
	
	var config = require('./config.js');
	var Response = require('./types/response.js').Response;
	var fs = require('fs');
	
	exports.is_static = true;
	// build_res.handle(req.url, res, ws.writer);
	exports.handle = function(url, res, writer) {
		fs.stat(config.static_location + url, function(err, stat) {
			if (!err) {
				fs.readFile((config.static_location + url), function(err, data) {
					if (!err) {
						var filex = url.substring(url.lastIndexOf(".")+1);
						var response = Response(data, '200', config.mimes[filex]);
						writer(res, response);						
					} else {
						writer(res, Response('Problem with file ' + url + " " + err, '404', 'text/html'));
					}	
				});
			} else {
				writer(res, Response('Problem with file ' + url + " " + err, 404, 'text/html'));
			}
			
		});
	};
	
	
}).call(this)