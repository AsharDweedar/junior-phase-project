var path = require('path');
var db = require('../db/index');
// var signIn = path.join(__dirname + './../public/src/signin.html');
var bodyParser = require('body-parser');


exports.getMainPage = function (req, res) {
    console.log('sending to main')
    res.sendFile('index.html' , {root : path.join(__dirname + './../public/src/')});
}

exports.postTask = function (req, res) {
    var data = req.body ; 
    console.log('posting : ', data);
    var task = new db.task ({name : data.name , task : data.task}).save((err, instance) => {
    	if (!err) {
            console.log('saved : ' ,instance)
    		res.send('saved : '+ instance +'' );
    	} else {
    		console.log('failed to save task : ', data)
    	}
    })
    console.log('after saving line')
}

exports.getTasks = function (req, res) {
    console.log('sending : tasks');
    db.task.find((err, data) => {
       if (err) {
        console.log('error inside finding tasks !!');
       } else {
        console.log("success  fetching tasks")
        res.send(data)
       }
    });
}
