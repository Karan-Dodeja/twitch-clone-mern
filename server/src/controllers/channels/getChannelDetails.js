import User from '../../models/User.js'
import Channel from "../../models/Channel.js"

export const getChannelDetails = async (req, res) => {

    try {
        const { channelId } = req.params;

        const channel = await Channel.findById(channelId);

        if (!channel || !channel.isActive) {
            return res.status(404).send('Channel not found!')
        }

        const user = await User.findOne({ channel: channelId }, { username: 1 }) // Find user

        const streamUrl = 'http';

        const isOnline = false; // If user Online

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
        console.log(error)
        return res.status(500).send('Something went wrong.')
    }


};