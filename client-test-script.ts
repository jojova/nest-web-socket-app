const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
  socket.emit('message', 'Hello from client'); // Send a message to the server
});

socket.on('message', (data) => {
  console.log(`Received message from server: ${data}`);
  // Process the received message
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
