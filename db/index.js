var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


var tasksSchema = mongoose.Schema({
	task : String,
    name: String
});


exports.task = mongoose.model('task', tasksSchema);

console.log('inside mongoose file')

// Connection URL
var url = 'mongodb://http://127.0.0.1:3000/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server : db");
});