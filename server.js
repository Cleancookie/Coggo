// Variables
var express = require("express");
var app = express();
var port = 13337;

// Setup view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res){
	res.render('index');
})

// WebSockets
var io = require('socket.io').listen(app.listen(port));

// Done loading
console.log("Listening on port " + port);