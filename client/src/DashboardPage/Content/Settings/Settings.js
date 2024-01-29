import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from './ChannelSettings';

const channelSettings = {
  title: "test",
  description: "description",
  avatarUrl: "none",
  username: "Martin",
  streamKey: "1234",
};

export const Settings = () => {
  return (
    <div className="settings-container">
      <span>Settings</span>
      <ChannelSettings />
      <StreamKey streamKey={channelSettings.streamKey} />
    </div>
  );
};
