import React, { useState } from "react";

export const NewMessageInput = () => {
  const [messageContent, setMessageContent] = useState("");

  const handleValueChange = (e) => {
    setMessageContent(e.target.value);
  };

  const handleSendMessage = () => {
    setMessageContent("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-message-input-container">
      <input
        className="chat-message-input"
        placeholder="Type message..."
        value={messageContent}
        onChange={handleValueChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
