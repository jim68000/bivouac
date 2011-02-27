(function(){
	
	
	var config = require('../config.js');
	var Response = require('../types/response.js').Response;
	var fs = require('fs');
	
	exports.is_static = true;
	
	exports.handle = function(url) {
		var outfile = null;
		try {
            var stat = fs.statSync(config.static_location + url).isFile();
                var outfile = fs.readFileSync(config.static_location + url);
				var filex = url.substring(url.lastIndexOf(".")+1);
				
				return Response(outfile, '200', config.mimes[filex]);
        } catch(e) {
			return {
				mime: 'text/html',
				code: '404',
				payload: '404 page not found ' + url + " " + e.message
			}
        }
	}
	
	
}).call(this)