import User from "../../models/User.js"

export const postRegister = async (req, res) => {

    const user = await User.create({
        username: 'Mark',
        email: 'ts@gmail.com',
        password: 'passwiord'
    })

    return res.send("User has been added to the database!")
}