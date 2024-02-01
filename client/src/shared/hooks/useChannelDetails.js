import React, { useState } from "react";
import { getChannelDetails as getChannelDetailsRequest } from "../../api";
import { toast } from "react-hot-toast";

export const useChannelDetails = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const getChannelDetails = async (id) => {
    const responseData = await getChannelDetails();
    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occurred while fetching channel data"
      );
    }
    setChannelDetails(responseData.data);
  };

  return {
    channelDetails,
    isFetching: !channelDetails,
    getChannelDetails,
  };
};
