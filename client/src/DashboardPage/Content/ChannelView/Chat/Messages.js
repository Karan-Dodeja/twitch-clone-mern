import React from "react";

const messagesD = [
  {
    author: "Jogn",
    content: "Hellow",
    id: 1,
  },
  {
    author: "Jogn",
    content: "Hellow",
    id: 2,
  },
];

const Message = ({ author, content }) => {
  return (
    <span className="chat-messages-message">
      <span style={{ fontWeight: "bold" }}>{author}:</span>
      {content}
    </span>
  );
};

export const Messages = ({ messages }) => {
  return (
    <div className="chat-messages-container">
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </div>
  );
};
