var app = require('../index.js');



exports.getMainPage = function (req, res) {
	res.render('index');
}