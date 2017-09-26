var app = require('../index.js');
var path = require('path');
var db = require('../db/index.js'); //should i put index.js 
var main = path.join(__dirname + './../public/src/');
// var signIn = path.join(__dirname + './../public/src/signin.html');
var bodyParser = require('body-parser');


exports.getMainPage = function (req, res) {
    console.log('sending : ', main)
    res.sendFile('index.html' , path.join(__dirname + './../public/src'));
}

exports.postTask = function (req, res) {
    console.log('posting : ', req.body);
    var task = new db.task ({name : req.body.name , task : req.body.task});
    task.save((err, data) => {
    	if (!err) {
    		res.send('saved');
    	} else {
    		console.log('failed to save task : ', req.body)
    	}
    })
}

exports.getTasks = function (req, res) {
    console.log('sending : tasks');
    var tasks = new db.task();

    tasks.find((err, data) => {
    	if (!err) {
	    	console.log('data found : ')
	        res.send(data);
	    }
        else {
        	console.log('error while trying to find data ')
        }
    })
}
