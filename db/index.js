/*var mongo = require('mongodb').mongoClient // why mongoClient ?
mongo.connect(`mongodb://localhost:3000/TODOlist` , function (err, db) {
	if (err) {
		console.log('err : ', err);
	} else {
		exports.db = db ;
	}
})*/

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:3000/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  //db.close();
});