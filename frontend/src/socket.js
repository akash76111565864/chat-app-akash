// socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:3305", {
  withCredentials: true,
  transports: ['websocket'],
});

export default socket;
