import bcrypt from "bcryptjs/dist/bcrypt";
import User from "../../models/User";

export const patchChangePassword = async (req, res) => {
    try {
        const { userId } = req.user;
        const { password, newPassword } = req.body;
        const userData = await User.findById(userId, { password: 1 }); // get password from DB to check
        const isPasswordCorrect = await bcrypt.compare(password, userData.password)
        if (!isPasswordCorrect) {
            return res.status(400).send('Invalid password please try again.')
        }
        const encrypredPassword = await bcrypt.hash(newPassword, 10) // encrypt new password
        await User.updateOne({ _id: userId }, { password: encrypredPassword }) // update encrypted password in DB on specific ID
        return res.status(200).send('Password changed succesfully');
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong.")
    }
}