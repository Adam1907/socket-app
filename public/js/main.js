const socket = io();
const message = document.getElementById('message');
const send = document.getElementById('send');
const chatBox = document.getElementById('chatbox');

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


send.addEventListener('click', function(e) {
    if (message.value)
       socket.emit('chat', message.value);
});

socket.on('chat', msg => {
    console.log(msg);
    chatBox.innerHTML += `<div>${time} User: ${msg}</div>`;
});
