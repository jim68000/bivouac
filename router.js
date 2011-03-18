(function() {

    var config = require('./config/config.js'),
    fs = require('fs'),
	log = require('./logger.js'),
    routes = [],
    remembered = [];
    exports.VERSION = '0.1';
    exports.add_route = function(re, controller, override) {
        routes.push({
            "re": re,
            "controller": controller
        });
    };

    exports.resolve = function(url) {
        var outcon = null;

        if (remembered[url] !== undefined && config.enable_route_mem_cache) {
            outcon = remembered[url];
			log.applog("ROUTER", log.DEBUG, "found " + url + " in memcache", module);
        } else {

            for (i in routes) {
                if (url.match(routes[i].re)) {
                    if (typeof routes[i].controller === 'object') {
                        return routes[i].controller;
                    }

                    try {
	
						// TODO - optimise
                        var stat = fs.statSync(config.controller_location + routes[i].controller).isFile();
                        if (stat) {
                            outcon = require(config.controller_location + routes[i].controller);
                            remembered[url] = outcon;
                        }
                    } catch(e) {
                        outcon = {
                            render: function() {
                                return "broken somewhere " + e.message;
                            }
                        };
                    }
                    break;
                }
            }
        }


        return outcon;
    };

}).call(this);