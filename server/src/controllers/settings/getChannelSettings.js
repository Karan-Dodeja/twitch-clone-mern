import User from '../../models/User.js';

export const getChannelSettings = async (req, res) => {
    try {
        const { userId } = req.user;

        // getting user settings from DB
        const userData = await User.findById(userId, {
            channel: 1,
            username: 1
        }).populate("channel")

        return res.status(200).json({
            id: channel._id,
            username: userData.username,
            title: userData.channel.title,
            description: userData.channel.description,
            avatarUrl: userData.channel.avatarUrl,
            streamKey: userData.channel.streamKey,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong.");
    }
}