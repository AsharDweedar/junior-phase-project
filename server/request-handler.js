var app = require('../index.js');
var path = require('path');
var main = path.join(__dirname + './../public/src/index.html');


// exports.getMainPage = function (req, res) {
// 	console.log('to main page view')
// 	res.render('index', {hi : [1,2,3,4,5,10 ,'!!']});
// }

exports.getMainPage = function (req, res) {
	res.sendFile(main);
}