var http = require('http');
var fs = require('fs');
var url = require('url');
var biv = require('./bivutils.js');
var router = require('./router.js');
var config = require('./config.js');
var Response = require('./types/response.js').Response; // Maybe types should be just one module?

http.createServer(function (req, res) {
	router.add_route(/.*mybeer.*/, "beer.js");
	router.add_route(/.*broken.*/, "broken.js");
	router.add_route(/store.*/, "static.js");
	router.add_route(/.*favicon.ico.*/, "static.js");
	router.add_route(/index.html/, "static.js"); //TODO handle static mapping in a way that isn't utterly sad
	router.add_route(/\/.*/, "index.js");	
	
	
	var build_res = router.resolve(req.url);

	if (build_res.is_static) {
		var tres = build_res.handle(req.url);
		res.writeHead(tres.code, {'Content-Type': tres.mime});
		res.write(tres.payload);
		res.end();
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(build_res.render(req.url));		
	}
	


}).listen(8124);