export const getChannelSettings = async (req, res) => {
    try {
        const  { userId } = req.user;
        return res.status(200).send("This route is secured.")
    } catch (error) {
        return res.status(500).send("Something went wrong.")
    }
}