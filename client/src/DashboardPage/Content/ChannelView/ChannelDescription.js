import React from "react";

export const ChannelDescription = ({ title, username, description }) => {
  return (
    <div className="channel-description-container">
      <span className="channel-description-title">{username}</span>
      <span className="channel-description-subtitle">{title}</span>
      <span className="channel-description-box">
        <span className="channel-description">{description}</span>
      </span>
    </div>
  );
};
