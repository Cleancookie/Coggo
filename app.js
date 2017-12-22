var env = process.env.NODE_ENV || 'dev';
console.log('ENVIRONMENT: ' + env);

// Setup
var express = require('express'); // Load Express framework
var app = express();
var expressLayouts = require('express-ejs-layouts'); // ejs layouts
var io = require('socket.io'); // Used for websockets
var port = process.env.PORT || 13337;
var path = require('path'); // Recursively require(...) files from a directory tree in Node.js
var morgan = require('morgan'); // HTTP logger
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

// Use middleware
app.use(expressLayouts);

// Database
switch (env) {
	case "dev":
		mongoose.connect(configDB.dev); // connect to our database
		break;
	default:
		mongoose.connect(configDB.live); // connect to our database
}

// View engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// Routes
require('./config/routes.js')(app);

// Launch
io.listen(app.listen(port))
console.log('The magic happens on port ' + port);