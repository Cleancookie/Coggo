const io = require('socket.io-client');

(function() {
    let socket = io();

    socket.on('connect', () => console.log('Websocket connected'))
})()