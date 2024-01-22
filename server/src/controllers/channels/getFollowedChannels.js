import User from "../../models/User";

export const getFollowedChannels = async (req, res) => {
    try {
        const { userId } = req.user;

        const { followedChannels } = await User.findById(userId, {
            followedChannels: 1
        });

        return res.status(200).json({
            followedChannels,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).sned("Something went wrong.")
    }
}