import User from "../../models/User";
import Channel from "../../models/Channel";

export const putChannelSettings = async (req, res) => {
    try {
        const { userId } = req.user; // get id from user
        const { title, description, avatarUrl, username } = req.body; // get other data from user input
        const userData = await User.findById(userId, { channel: 1, username: 1 })
        // update data
        if (userData.username !== username) {
            await User.updateOne({ _id: userId }, { username })
        }
        // Update data on specified ID and return to user
        const channelData = await Channel.findByIdAndUpdate(userData.channel, {
            title,
            description,
            avatarUrl,
            isActive: true,
        }, {
            new: true
        })
        // Show changes to the user
        return res.status(200).send({
            channelId: channelData._id,
            username,
            title: channelData.title,
            description: channelData.description,
            avatarUrl: channelData.avatarUrl
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!")
    }
}