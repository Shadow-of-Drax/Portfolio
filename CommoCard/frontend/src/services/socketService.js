import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export const sendMessage = (message) => {
  socket.emit("message", message);
};

export const receiveMessage = (callback) => {
  socket.on("message", (message) => callback(message));
};
