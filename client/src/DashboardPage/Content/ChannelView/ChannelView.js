import React from "react";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";

export const ChannelView = () => {
  return (
    <div className="channel-container">
      <div className="channel-video-description-container">
        <div className="channel-offline-placeholder">
          <span>Channel is offline.</span>
        </div>
        <ChannelDescription />
      </div>
      <Chat />
    </div>
  );
};
