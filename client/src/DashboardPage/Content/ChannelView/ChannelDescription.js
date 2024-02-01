import React from "react";
import { useFollowChannel, useUserDetails } from "../../../shared/hooks";
import { followChannel } from "../../../api";

const FollowedButton = ({ channelId }) => {
  const { followChannel } = useFollowChannel();
  const handleFollowChannel = () => {
    followChannel(channelId);
  };

  return (
    <button onClick={handleFollowChannel} className="channel-follow-button">
      Follow
    </button>
  );
};

export const ChannelDescription = ({
  title,
  username,
  channelId,
  description,
}) => {
  const { isLogged } = useUserDetails();
  return (
    <div className="channel-description-container">
      <span className="channel-description-title">
        {username}
        <span>
          {isLogged && (
            <FollowedButton
              className="channel-follow-button"
              channelId={channelId}
            />
          )}
        </span>
      </span>
      <span className="channel-description-subtitle">{title}</span>
      <span className="channel-description-box">
        <span className="channel-description">{description}</span>
      </span>
    </div>
  );
};
