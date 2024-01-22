import express from "express";
import ExpressValidator from 'express-joi-validation';
import Joi from "joi";
import { verifyToken } from "../middlewares/auth";
import { getChannelSettings, putChannelSettings, patchChangePassword } from "../controllers/controller.js";

const router = express.Router();

const validator = ExpressValidator.createValidator();

// Channel settings schema to check body data
const channelSettingsSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    description: Joi.string().min(10).max(200).required(),
    title: Joi.string().min(10).max(30).required(),
    avatarUrl: Joi.string().uri().required(),
})

// Validate password schema to check entered data is valid
const changePasswordSchema = Joi.object({
    password: Joi.string().min(6).max(12),
    newPassword: Joi.string().min(6).max(12),
})

router.get('/channel', verifyToken, getChannelSettings);

router.put('/channel', verifyToken, validator.body(channelSettingsSchema), putChannelSettings)

router.patch('/password', verifyToken, validator.body(changePasswordSchema), patchChangePassword)


export default router;