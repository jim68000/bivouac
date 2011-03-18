var http = require('http'), fs = require('fs'), url = require('url');
var biv = require('./bivutils.js');
var router = require('./router.js');
var config = require('./config/config.js');
var Response = require('./types/response.js').Response; // Maybe types should be just one module?
var ws = require('./ws.js');
var routes = require('./config/routes.js');

//set the app up
routes.setup();

http.createServer(function (req, res) {	
	req.startTime = new Date().getTime();
	var build_res = router.resolve(req.url);
	build_res.handle(req, res, ws.writer);
}).listen(config.APP_PORT);