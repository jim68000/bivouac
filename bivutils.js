(function(){
	exports.VERSION = '0.1';
	exports.queries = function(query_string) {
		var pairs = query_string.split("&"), reqo = [];
		pairs.forEach(function(p) {
			var tp = p.split("=");
			reqo[tp[0]] = tp[1];
		});
		return reqo;
	}
	
	exports.log = function(req, res, tres) {
		var d = new Date();
		var date_string = d.toUTCString();
		console.log(date_string + " " + req.client.remoteAddress + " " + req.url + " " + tres.code);
	}
	
	exports.bug = function(msg) {
		if (config.deployment === 'development') {
			console.log(msg);
		}
	}
	
	
	
}).call(this)