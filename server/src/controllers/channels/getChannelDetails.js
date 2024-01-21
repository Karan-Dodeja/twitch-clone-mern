export const getChannelDetails = async (req, res) => {
    return res.status(200).json({
        id: 1,
        title: 'Title',
        description: 'description',
        username: 'Martin',
        isOnline: false,
        streamUrl: 'hhtp'
    });
};