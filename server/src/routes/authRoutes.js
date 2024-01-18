import express from "express"

const router = express.Router()

router.get("/register", (req, res) => {
    return res.send("Register Route.")
})

router.get("/login", (req, res) => {
    return res.send("Login Route.")
})

export default router;