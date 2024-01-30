import React, { useState } from "react";
import { getChannelSettings } from "../../api/api";
import { toast } from "react-hot-toast";

export const useChannelSettings = () => {
  const [channelSettings, setChannelSettings] = useState(null);

  // Fetch saved channel settings from api
  const fetchChannelSettings = async () => {
    const response = await getChannelSettings();
    if (response.error) {
      // eslint-disable-next-line no-undef
      return toast.error(
        response.exception?.response?.data ||
          "Error occurred when fetching channel settings from server."
      );
    }

    setChannelSettings({
      username: response.data.username,
      title: response.data.title,
      description: response.data.description,
      avatarUrl: response.data.avatarUrl,
      streamKey: response.data.streamKey,
    });
  };

  // save changed settings to DB
  const saveSettings = () => {};

  return {
    isFetching: !channelSettings,
    channelSettings,
    saveSettings,
  };
};
