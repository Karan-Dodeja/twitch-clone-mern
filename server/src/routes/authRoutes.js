import express from "express"
import Joi from 'joi'
import ExpressValidation from 'express-joi-validation'
import { postRegister } from "../controllers/controller.js"
import { postLogin } from "../controllers/controller.js"

const router = express.Router()

const validator = ExpressValidation.createValidator({})

const registerSchema = Joi.object({// rules for inputs
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required()
})

const loginSchema = Joi.object({// rules for inputs
    password: Joi.string().min(3).max(12).required(),
    email: Joi.string().email().required()
})

router.post("/register", validator.body(registerSchema), postRegister) // register validator schema middleware

router.post("/login", validator.body(loginSchema), postLogin) // login validator schema middleware

export default router;