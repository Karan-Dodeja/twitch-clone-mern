import React from "react";
import { ChannelCard } from "./ChannelCard";

export const dummyChannels = [
  {
    id: 1,
    title: "test",
    avatarUrl: null,
    username: "Martin",
    isOnline: false,
  },
  {
    id: 2,
    title: "test 1",
    avatarUrl: null,
    username: "Marti",
    isOnline: false,
  },
  {
    id: 3,
    title: "test 2",
    avatarUrl: null,
    username: "Mart",
    isOnline: true,
  },
  {
    id: 3,
    title: "test 3",
    avatarUrl: null,
    username: "Anna",
    isOnline: true,
  },
];

export const Channels = () => {
  return (
    <div className="channels-container">
      {dummyChannels.map((c) => {
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
