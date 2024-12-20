import { ioSocket } from "./socketController.js";

/* This file contains all the socket.io receivers.
 * That means everything the server emits to the client should be put in here. When the server emits (sends) a message
 * to the frontend such as "status" or "feed", the client responds with the code inside the socket.on block.
 */

// Updates rive values with received status updates from server
ioSocket.on("greet", (data) => {
  console.log("Server says: ", data);
});
