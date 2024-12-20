const express = require("express");
const app = express();
const http = require("http");
const PORT = 3000;

// Create Express http server
const server = http.createServer(app);

// Server listens on port
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

// Initialize Socket IO on server
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

// Here we need to create the states for the rive animation and
// set up an interval that updates the values
let hp = 100;

setInterval(() => {
  hp = hp - 1;
}, 1000);

setInterval(() => {
  io.sockets.emit("hp", { hp: hp });
}, 200);

// A user connects to the server (opens a socket)
io.sockets.on("connection", function (socket) {
  // Server recieves a ping and responds with an emit event (sends a message to all connected sockets)
  io.sockets.emit("greet", { mesasge: "Server says hello" });

  socket.on("hello", (data) => {
    console.log("Recieved client ping: ", data);


  });
});
