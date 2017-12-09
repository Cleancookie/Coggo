// Variables
var express = require("express");
var app = express();
var port = 13337;
// var port = process.env.PORT;

// Setup view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static(__dirname + '/public'));

// Routes
var index = require('./routes/index');
app.use('/', index);

// WebSockets
var io = require('socket.io').listen(app.listen(port));

// Done loading
console.log("Listening on port " + port);