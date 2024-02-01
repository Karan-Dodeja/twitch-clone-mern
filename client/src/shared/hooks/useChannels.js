import React, { useEffect, useState } from "react";
import { getFollowedChannels, getChannels } from "../../api/api";
import { toast } from "react-hot-toast";

export const useChannels = () => {
  const [channels, setChannels] = useState(null);

  const getChannels = async (isLogged = false) => {
    const response = await getChannels();

    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occurred when fetching channels."
      );
    }

    if (!isLogged) {
      return setChannels({
        channels: response.data.channels,
      });
    }

    const followedChannelsData = await getFollowedChannels();

    if (followedChannelsData.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occurred when fetching followed channels."
      );
    }

    setChannels({
      channels: response.data.channels,
      followedChannels: response.data.channels.filter((channel) =>
        followedChannelsData.data.followedChannels.includes(channel.id)
      ),
    });
  };

  useEffect(() => {}, []);

  return {
    getChannels,
    isFetching: !Boolean(channels),
    allChannels: channels?.channels,
    followedChannels: channels?.followedChannels,
  };
};
