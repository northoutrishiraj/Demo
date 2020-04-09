const io = io.Socket = require('socket.io-client');

var socket = new io.Socket('localhost',{
	port: 8080
});
socket.connect(); 


socket.on('connect',function() {
	console.log('Client has connected to the server!');
});

socket.on('message',function(data) {
	console.log('Received a message from the server!',data);
});

socket.on('disconnect',function() {
	console.log('The client has disconnected!');
});


function sendMessageToServer(message) {
	socket.send(message);
}

