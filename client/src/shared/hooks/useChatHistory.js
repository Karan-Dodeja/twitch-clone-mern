import React, { useEffect } from "react";
import { getChatHistory, sendChatMessage } from "../../socketConn";
import { useUserDetails } from "./useUserDetails";
import { closeChatSubscription } from "../../socketConn/socketConn";

export const useChatHistory = (channelId) => {
  const { isLogged, username } = useUserDetails();

  useEffect(() => {
    getChatHistory(channelId);

    return () => {
      closeChatSubscription(channelId);
    };
  }, []);

  const sendMessage = (message) => {
    sendChatMessage(channelId, {
      author: isLogged ? username : "Guest",
      content: message,
    });
  };

  return {
    messages: [],
    sendMessage,
  };
};
