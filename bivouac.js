var http = require('http');
var fs = require('fs');
var url = require('url');
var biv = require('./bivutils.js');
var router = require('./router.js');
var config = require('./config.js');

http.createServer(function (req, res) {
	router.add_route(/.*mybeer.*/, "beer.js");
	router.add_route(/.*broken.*/, "broken.js");
	
	router.add_route(/\/.*/, "index.js");	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(router.resolve(req.url).render(req.url));

}).listen(8124);