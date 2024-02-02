import React, { useEffect } from "react";
import { getChatHistory } from "../../socketConn";

export const useChatHistory = (channelId) => {
  useEffect(() => {
    getChatHistory(channelId);
  }, []);
  return {
    messages: [],
    sendMessage: () => {},
  };
};
