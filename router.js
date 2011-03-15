(function() {

    var config = require('./config.js'),
    fs = require('fs'),
    routes = [],
    remembered = [];
    exports.is_static = false;
    exports.VERSION = '0.1';
    exports.add_route = function(re, controller) {
        routes.push({
            "re": re,
            "controller": controller
        });
    };

    exports.resolve = function(url) {
        var outcon = null;

        if (remembered[url] !== undefined && config.enable_mem_cache) {
            outcon = remembered[url];

        } else {

            for (i in routes) {
                if (url.match(routes[i].re)) {
                    if (typeof routes[i].controller === 'object') {
                        return routes[i].controller;
                    }

                    try {
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