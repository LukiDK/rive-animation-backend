import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

// Initializes the socket IO connection
// Its important to note that during development this should be "localhost", but as soon as
// we host the backend online on Railway, we need to change this to the correct URL
export const socket = io("http://127.0.0.1:3000");
export const ioSocket = socket.connect("http://127.0.0.1:3000");
