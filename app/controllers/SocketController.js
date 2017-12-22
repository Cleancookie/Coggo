exports.init = function(io, socket){
	io.on('connection', function (socket) {
		socket.on('yerd', function(){
			socket.emit('yerded');
		});	
	});
};