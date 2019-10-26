const io = require('socket.io')();
io.on('connection', client => {
    console.log(`Connected ${client.id}`);

    client.on('disconnect', () => {
        console.log(`Client ${client.id} disconnected`);
    });
});

io.listen(3000);