var env = process.env.NODE_ENV || 'dev';
console.log('ENVIRONMENT: ' + env);

// Setup
var express = require('express'); // Load Express framework
var io = require('socket.io'); // Used for websockets

var app = express();
var constant = require('./config/constants'); // Constants

var port = process.env.PORT || 13337;
var flash = require('connect-flash'); // For flash messages
var path = require('path'); // Recursively require(...) files from a directory tree in Node.js

var morgan = require('morgan'); // HTTP logger
var cookieParser = require('cookie-parser'); // Cookie parser
var bodyParser = require('body-parser'); // Used to parse html forms 
var session = require('express-session'); // For sessions
var dateFormat = require('dateformat'); // For better date formatting

// Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose'); // MongoDB ORM
var configDB = require('./config/database.js');
switch (env) {
	case "dev":
		mongoose.connect(configDB.dev); // connect to our database
		break;
	default:
		mongoose.connect(configDB.live); // connect to our database
}

// Set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms

// View engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(flash()); // use connect-flash for flash messages stored in session

// Routes
require('./config/routes.js')(app);

// Launch
io.listen(app.listen(port))
console.log('The magic happens on port ' + port);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo});
});

app.use(function (req, res, next) {
    res.status(500).render('404', {title: "Sorry, page not found"});
});
exports = module.exports = app;