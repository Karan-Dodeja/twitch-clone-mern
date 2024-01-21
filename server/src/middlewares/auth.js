import jwt from 'jsonwebtoken';

const config = process.env;

export const verifyToken = (req, res, next) => {

    let token = req.body.token || req.query.token || req.header['authorization'] // get token from controller end

    if (!token) {
        return res.status(500).message("A token is required for authentication.");
    }

    try {
        token = token.replace(/^Bearer\s+/, "")
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded; // assign token to user properties so we can get details
    } catch (error) {
        return res.status(401).message("Invalid Token.");
    }

    return next()

}