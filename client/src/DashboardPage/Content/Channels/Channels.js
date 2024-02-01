import React from "react";
import { ChannelCard } from "./ChannelCard";

export const Channels = ({ channels }) => {
  return (
    <div className="channels-container">
      {channels.map((c) => {
        <ChannelCard
          key={c.id}
          title={c.title}
          username={c.username}
          isOnline={c.isOnline}
          avatarUrl={c.avatarUrl}
          navigateToChannelHandler={() => {}}
        />;
      })}
    </div>
  );
};
