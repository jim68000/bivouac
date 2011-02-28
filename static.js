(function(){
	
	
	var config = require('./config.js');
	var Response = require('./types/response.js').Response;
	var fs = require('fs');
	
	exports.is_static = true;
	
	exports.handle = function(url) {
		var outfile = null;
		try {
            var stat = fs.statSync(config.static_location + url).isFile();
                var outfile = fs.readFileSync(config.static_location + url);
				var filex = url.substring(url.lastIndexOf(".")+1);
				// TODO fix this
				// The below has the side effect that if the mime-stype is not found in the config table it sends undef, which chauses response
				// to default to text/html - 
				return Response(outfile, '200', config.mimes[filex]); 
        } catch(e) {
				return Response('404 page not found ' + url + " " + e.message, '404', 'text/html');
        }
	}
	
	
}).call(this)