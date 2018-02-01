var socket = io();

socket.on('connect', function(){
    console.log('connected to server');
});

socket.on('disconnect', function(){console.log('disconnected')});

socket.on('newMessage', function(message){console.log('newMessage', message) });

// socket.emit('createMessage', {
//     from: 'asdasd',
//     text: 'hey'
// }, function(data){console.log('got it', data) });