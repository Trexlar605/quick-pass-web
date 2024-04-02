// server.js

const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const messages = [];

wss.on("connection", (ws) => {
  // Send existing messages to the newly connected client
  ws.send(JSON.stringify(messages));

  ws.on("message", (message) => {
    const newMessage = JSON.parse(message);
    messages.push(newMessage);
    // Broadcast the new message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(newMessage));
      }
    });
  });
});

server.listen(5000, () => {
  console.log("Server started on port 5000");
});
