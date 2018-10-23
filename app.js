'use strict';

const env = process.env.NODE_ENV || 'dev';
console.log('ENVIRONMENT: ' + env);

// Setup
const express = require('express');             // Express framework
const app = express();                          // Express app
const socketio = require('socket.io');          // Used for websockets
const port = process.env.PORT || 13337;         // Port to run on 
const path = require('path');                   // Recursively require(...) files from a directory tree in Node.js
const bodyParser = require('body-parser');      // Middleware for req.Body
const cookieParser = require('cookie-parser');  // Cookie parser in req.cookies
const morgan = require('morgan')                // HTTP loggger

// View engine setup
app.use(express.static(path.join(__dirname, 'Views/public')));
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev')); // log every request to the console 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(cookieParser());

// Routes
app.use('/', require('./Config/Routes'));

// Launch
const io = socketio.listen(app.listen(port))
console.log('The magic happens on port ' + port);

// Sockets
