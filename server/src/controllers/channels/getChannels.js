import User from "../../models/User"

export const getChannels = async (_, res) => {

    try {
        // Find Channels/Users
        const users = await User.find(
            {}, {
            channel: 1,
            username: 1,
        }).populate("channel") // populate data from channel models

        // populate the details of the channel/user
        const channels = users
            .filter(u => u.channel.isActive)
            .map(user => {
                return {
                    id: user.channel._id,
                    title: user.channel.title,
                    avatarUrl: user.channel.avatarUrl,
                    username: user.username,
                    isOnline: false,
                }
            })

        return res.json({
            channels,
        })
    } catch (error) {
        return res.status(500).message("Something went wrong!")
    }

}