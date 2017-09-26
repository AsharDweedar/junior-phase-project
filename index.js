var routes = require('./server/request-handler.js');

var express = require('express');
var path = require('path');
//var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Add headers
app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});

//app.use(express.static(path.join(__dirname, '../views')));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
/*app.use(session({
    secret: 'secret-token-here',
    name: 'token',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));*/


//goes well
app.get('/', (req, res) => {
	console.log('get main page req');
	routes.getMainPage(req, res);
});

// working
app.get('/tasks', (req, res) => {
	console.log('get tasks req');
	routes.getTasks(req, res);
});
app.post('/tasks', (req, res) => {
	console.log('post a task req');
	routes.postTask(req, res);
});


exports.app = app.listen(process.env.PORT || 3000, function () {
	console.log('server is ON !!')
})




