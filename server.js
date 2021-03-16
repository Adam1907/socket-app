const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();


const server = http.createServer(app);
const io = socketio(server);


// Static folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('User Online');
  
  socket.on('codeboard-message', (msg) => {
  console.log('message: ' + msg);
	socket.broadcast.emit('message-from-others', msg);
  });
  
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => 
console.log(`Server running on port ${PORT}`));