import React from "react";
import io from "socket.io-client";

let socket;

export const connectWithSocketServer = () => {
  socket = io("http://localhost:5002");

  socket.on("connect", () => {
    console.log("Successfully connected with socket.io server.");
    console.log(socket.id);
  });

  socket.on("chat-history", (chatHistory) => {
    console.log("chat-history-came-from-server");
  });

  socket.on("chat-message", (chatMessage) => {
    console.log("new message came");
    console.log(chatMessage);
  });
};

export const getChatHistory = (channelId) => {
  socket.join(channelId);
  socket.emit("chat-history", channelId);
};

export const sendChannelMessage = (toChannel, messageData) => {
  socket.emit("chat-message", {
    toChannel,
    messageData,
  });
};

export const closeChatSubscription = (channelId) => {
  socket.io("chat-unsubscribe", channelId);
};
