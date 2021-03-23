const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Složka se statickými soubory
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log("Novy uzivatel");
    socket.on('chat', msg => {
        io.emit('chat', msg);
    });
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, function() {
    console.log(`Server nasloucha na portu ${PORT}`);
})
