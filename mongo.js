(function(){
	
	//TODO refactor this into something looking less like the ramblings of a Cthulhu cultist
	
	var Db = require('mongodb').Db,
	  Connection = require('mongodb').Connection,
	    Server = require('mongodb').Server,
	  BSON = require('mongodb').BSONNative;

	var reportError = function(err) {
		console.log("err = " + err);
		return "error" + err;
	};
	

	var host = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';
	var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : Connection.DEFAULT_PORT;	
	var db = new Db('guardian', new Server(host, port, {}), {native_parser:true});
	var result = [];
	exports.VERSION = '0.1';	

	exports.get_collection_as_array = function(coll, callback) {
		db.open(function(err, db) {
			if (!err) {
				db.collection(coll, function(err, collection) {
					if (!err) {
						collection.find(function(err, cursor) {
							if (!err) {
								//console.log(cursor);
								cursor.toArray(function(err, items) {
									if (!err) {
										result = items;
										if (items.length == 0) {
											return "EMPTY";
										}
										callback(result);
										db.close();
									} else {
										reportError("" + err);
									}
								});
							} else {
								reportError(err);
							}
						});				
					} else {
						reportError(err);
					}
				});
			} else {
				reportError(err);
			}
		});		
	}
}).call(this);
