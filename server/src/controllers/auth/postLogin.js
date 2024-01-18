import User from "../../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ // Check if email exists
            email: email,
        })
        if (user && (await bcrypt.compare(password, user.password))) { // decrypt password and compare it with entered password
            // create JWT token
            const token = jwt.sign( // create jwt token
                // user details that are encryted
                {
                    userId: user._id,
                    email: user.email,
                },
                process.env.TOKEN_KEY,// secret
                // additional config
                {
                    expiresIn: "5h",
                }
            );

            return res.status(200).json({
                userDetails: {
                    email: user.email,
                    username: user.username,
                    token
                }
            })
        }
        return res.status(400).send("Invalid credentials. Please try again.")
    } catch (err) {
        return res.status(500).send("Please try again later.")
    }
}