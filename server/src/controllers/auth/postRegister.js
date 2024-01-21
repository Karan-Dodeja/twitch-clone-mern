import User from "../../models/User.js"
import Channel from "../../models/Channel.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

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
        
        // Create channel as user register
        const newChannel = await Channel.create({})

        const user = await User.create({ // using user model to save data
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
            channel: newChannel._id, // Connect channel with registered user
        })
        const token = jwt.sign( // create jwt token
            // user details that are encryted
            {
                userId: user._id,
                email,
            },
            process.env.TOKEN_KEY,// secret
            // additional config
            {
                expiresIn: "5h",
            }
        );
        return res.status(201).json({ // send success response
            userDetails: {
                email,
                username,
                token
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('Error occured. Please try again later.')
    }

    //return res.send("User has been added to the database!")
}