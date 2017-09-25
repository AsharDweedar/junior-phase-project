var routes = require('./server/request-handler.js');

var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static(path.join(__dirname, '../views')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(session({
    secret: 'secret-token-here',
    name: 'token',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
	console.log('get main page req');
	// if (!req.session) { //edit this line
	// 	routes.getSignInPage(req, res);
	// } else {
		//redirect to /tasks
	//}

	routes.getMainPage(req, res);
});

app.get('/tasks', (req, res) => {
	routes.getTasks(req, res);
	console.log('get tasks req')
});


exports.app = app.listen(process.env.PORT || 3000, function () {
	console.log('server is ON !!')
})




