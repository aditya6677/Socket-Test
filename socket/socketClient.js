const socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', function(){
    console.log("Hello Socket");
});
socket.on('event', function(data){});
socket.on('disconnect', function(){});