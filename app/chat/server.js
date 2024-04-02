const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors"); // Import cors module

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Allow all origins

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
