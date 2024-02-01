import React from "react";
import { followChannel as followChannelRequest } from "../../api/api";
import { toast } from "react-hot-toast";

export const useFollowChannel = () => {
  const followedChannel = async (channelId) => {
    const responseData = await followChannelRequest(channelId);

    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occurred while trying to follow a channel!"
      );
    }

    toast.success("Channel followed successfully.");
  };

  return {
    followedChannel,
  };
};
