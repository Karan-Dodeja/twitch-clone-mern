import User from "../../models/User.js";
import axios from "axios";
import Channel from "../../models/Channel.js";

export const getChannelDetails = async (req, res) => {
  try {
    const { channelId } = req.params;

    const channel = await Channel.findById(channelId);

    if (!channel || !channel.isActive) {
      return res.status(404).send("Channel not found!");
    }

    const user = await User.findOne({ channel: channelId }, { username: 1 }); // Find user

    const streamUrl = `http://localhost:8000/live/${channel.streamKey}.flv`;

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

    const isOnline = liveStreams.includes(channel.streamKey); // If user Online

    // get users data from DB
    return res.status(200).json({
      id: channel.id,
      title: channel.title,
      description: channel.description,
      username: user.username,
      isOnline,
      streamUrl: streamUrl,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("Something went wrong.Please check channel url.");
  }
};
