var socket = io();

socket.on('connect', function(){
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'CHIp',
        text: 'Yup, this works'
    });
});

socket.on('disconnect', function(){console.log('disconnected')});

socket.on('newMessage', function(message){console.log('newMessage', message) });