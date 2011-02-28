var http = require('http'), fs = require('fs'), url = require('url');
var biv = require('./bivutils.js');
var router = require('./router.js');
var config = require('./config.js');
var Response = require('./types/response.js').Response; // Maybe types should be just one module?
var static_handler = require('./static.js');


//set the app up
router.add_route(/.*mybeer.*/, "beer.js");
router.add_route(/.*broken.*/, "broken.js");
router.add_route(/beer.html/, "beer.js");
router.add_route(/store.*/, static_handler);
router.add_route(/.*favicon.ico.*/, static_handler);
router.add_route(/.*.html/, static_handler); 
router.add_route(/\/.*/, "index.js");


http.createServer(function (req, res) {	
	var build_res = router.resolve(req.url);
	// TODO can the below be done async?
	var tres = build_res.handle(req.url);
	res.writeHead(tres.code, {'Content-Type': tres.mime});
	res.write(tres.payload);
	res.end();
	biv.log(req, res, tres);
}).listen(8124);