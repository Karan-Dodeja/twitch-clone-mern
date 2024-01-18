import User from "../../models/User.js"
import bcrypt from "bcryptjs"

export const postRegister = async (req, res) => {

    try {
        const { username, email, password } = req.body
        const userExists = await User.exists({
            email
        })
        if (userExists) {
            return res.status(409).send('Email already exists.') // Check if email exists in DB
        }
        const encryptedPassword = await bcrypt.hash(password, 10); // Encrypt password
        const user = await User.create({ // using user model to save data
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error occured. Please try again later.')
    }

    return res.send("User has been added to the database!")
}