var routes = require('./server/request-handler.js');
var express = require('express');
var  path = require('path');
var  bodyParser = require('body-parser');


var app = express();
app.use(express.static(path.join(__dirname, '../public/src')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



app.get('/', (req, res) => {
	routes.getMainPage(req, res);
});


exports.app = app.listen(process.env.PORT || 3000, function () {
	console.log('server is ON !!')
})
