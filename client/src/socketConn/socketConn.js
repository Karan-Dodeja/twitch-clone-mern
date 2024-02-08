import React from "react";
import io from "socket.io-client";
import { useStore } from "../store";

let socket;

export const connectWithSocketServer = () => {
  socket = io("http://localhost:5002");

  socket.on("connect", () => {
    console.log("Successfully connected with socket.io server.");
    console.log(socket.id);
  });

  socket.on("chat-history", (chatHistory) => {
    const { setChatHistory } = useStore.getState();
    setChatHistory(chatHistory);
  });

  socket.on("chat-message", (chatMessage) => {
    const { chatHistory, setChatHistory } = useStore.getState();

    setChatHistory({
      channelId: chatHistory.channelId,
      messages: [
        ...chatHistory.messages,
        {
          author: chatMessage.author,
          content: chatMessage.content,
          date: chatMessage.date,
        },
      ],
    });
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
