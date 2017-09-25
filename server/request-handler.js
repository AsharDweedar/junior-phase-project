var app = require('../index.js');
var path = require('path');
var db = require('../db/index.js'); //should i put index.js 
var main = path.join(__dirname + './../public/src/index.html');
var signIn = path.join(__dirname + './../public/src/signin.html');

exports.getMainPage = function (req, res) {
	console.log('sending : ', main)
	res.sendFile(main);
}

exports.getSignInPage = function (req, res) {
	console.log('sending : ', signIn)
	res.sendFile(signIn);
}

exports.getTasks = function (req, res) {
	console.log('sending : ', 'tasks');
	//go to db
		//get tasks :
		// var tasks = db.something 
		//send tasks array
	//res.send(tasks);
}
