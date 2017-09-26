
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/todos',  {
  useMongoClient: true
});


var tasksSchema = new mongoose.Schema({
	id : Number,
	task : String ,
	name : String
})
console.log('inside db !!')

exports.task = mongoose.model('task' , tasksSchema);

// var defaultTask = new task({ task: 'this is a task by default' , username : 'ashar' }).save(function (err, ins) {
// 			  if (err) console.log(err);
// 			  console.log(ins.task);
// 			});




// var mongoose = require('mongodb').MongoClient
//   , assert = require('assert');


// var tasksSchema = mongoose.Schema({
// 	task : String,
//     name: String
// });


// exports.task = mongoose.model('task', tasksSchema);

// console.log('inside mongoose file')

// // Connection URL
// var url = 'mongodb://http://127.0.0.1:3000/myproject';
// // Use connect method to connect to the Server
// mongoose.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server : db");
// });


