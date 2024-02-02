import React from "react";
import io from "socket.io-client";

let socket;

export const connectWithSocketServer = () => {
  socket = io("http://localhost:5002");

  socket.on("connect", () => {
    console.log("Successfully connected with socket.io server.");
    console.log(socket.id);
  });
};

export const socketConn = () => {
  return <div></div>;
};
