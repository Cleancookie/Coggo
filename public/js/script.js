var startTime;
var socket  = io.connect();

startTime = Date.now();
socket.emit('yerd');
setInterval(function() {
	startTime = Date.now();
	socket.emit('yerd');
}, 1000);

socket.on('yerded', function() {
	latency = Date.now() - startTime;
	console.log(latency);
});