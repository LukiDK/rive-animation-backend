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
        origin: "https://rive-animal.netlify.app",
    },
});

// Here we need to create the states for the rive animation and
// set up an interval that updates the values
let hp = 100;

setInterval(() => {
    if (hp > 0) {
        hp -= 1;
    }
}, 1000);

setInterval(() => {
    io.sockets.emit("hp", { hp: hp });
}, 200);

// A user connects to the server (opens a socket)
io.sockets.on("connection", function (socket) {
    // Server recieves a ping and responds with an emit event (sends a message to all connected sockets)
    io.sockets.emit("greet", { mesasge: "Server says hello" });

    socket.on("feed", function (data) {
        hp += 10;

        io.sockets.emit("hp", { hp: hp });
    });
});
