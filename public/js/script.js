var startTime;
var socket = io();

setInterval(function() {
  startTime = Date.now();
  socket.emit('ping');
  console.log('sent');
}, 500);

socket.on('pong', function() {
  latency = Date.now() - startTime;
  console.log(latency);
});

socket.on('yerd', function() {
	console.log('yerded');
});