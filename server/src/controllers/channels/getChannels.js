import User from "../../models/User";
import axios from "axios";

export const getChannels = async (_, res) => {
  try {
    // Find Channels/Users
    const users = await User.find(
      {},
      {
        channel: 1,
        username: 1,
      }
    ).populate("channel"); // populate data from channel models

    const activeStreamsData = await axios.get(
      "http://localhost:8000/api/streams"
    );

    const activeStreams = activeStreamsData.data;

    let liveStreams = [];

    for (const streamId in activeStreams?.live) {
      if (
        activeStreams.live[streamId].publisher &&
        activeStreams.live[streamId].publisher !== null
      ) {
        liveStreams.push(streamId);
      }
    }

    // populate the details of the channel/user
    const channels = users
      .filter((u) => u.channel.isActive)
      .map((user) => {
        return {
          id: user.channel._id,
          title: user.channel.title,
          avatarUrl: user.channel.avatarUrl,
          username: user.username,
          isOnline: liveStreams.includes(user.channel.streamKey),
        };
      });
    return res.json({
      channels,
    });
  } catch (error) {
    return res.status(500).message("Something went wrong!");
  }
};