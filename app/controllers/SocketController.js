exports.init = function(io){
	io.on('connection', function (socket) {
		socket.on('yerd', function(){
			socket.emit('yerded');
		});	
	});
};