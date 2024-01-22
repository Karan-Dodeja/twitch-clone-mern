import User from "../../models/User";

export const postFollowChannel = async (req, res) => {
    try {
        const { userId } = req.user;
        const { channelId } = req.body;
        const userData = await User.findById(userId, { followedChannel: 1 });
        if (userData.followedChannel.includes(channelId)) {
            return res.status(400).send('You are already following this channel.')
        }
        userData.followedChannel.push(channelId) // follow channel
        await userData.save()
        return res.status(200).send('Channel followed succesfully')
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!")
    }
}