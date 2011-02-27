(function(){
	
	
	var config = require('../config.js');
	var fs = require('fs');
	
	exports.is_static = true;
	
	
	
	exports.handle = function(url) {
		var outfile = null;
		try {
            var stat = fs.statSync(config.static_location + url).isFile();
            if (stat) {
                var outfile = fs.readFileSync(config.static_location + url);
				var filex = url.substring(url.lastIndexOf(".")+1);
				
				 return {
						mime: config.mimes[filex],
						payload: outfile
					} 
				} else {
					return {
						mime: 'text/plain',
						payload: 'broken - couldnt find ' + config.static_location + url
					}
				}
        } catch(e) {
			return {
				mime: 'text/plain',
				payload: 'broken - ' + e.message + 'couldnt find ' + config.static_location + url
			}
        }
	}
	
	
}).call(this)