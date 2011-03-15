var http = require('http'), fs = require('fs'), url = require('url');
var biv = require('./bivutils.js');
var router = require('./router.js');
var config = require('./config.js');
var Response = require('./types/response.js').Response; // Maybe types should be just one module?
var static_handler = require('./static.js');
var ws = require('./ws.js');


//set the app up
//TODO move this somewhere else
router.add_route(/.*json.*/, "guardian.js");
router.add_route(/.*favicon.ico.*/, static_handler);
router.add_route(/.*.html/, static_handler); 
router.add_route(/\/.*/, static_handler);


http.createServer(function (req, res) {	
	var build_res = router.resolve(req.url);
	build_res.handle(req.url, res, ws.writer);
	biv.log(req, res);
}).listen(8124);