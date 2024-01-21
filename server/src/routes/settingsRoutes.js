import express  from "express";
import ExpressValidator from 'express-joi-validation';
import Joi from "joi";
import { verifyToken } from "../middlewares/auth";
import { getChannelSettings } from "../controllers/settings/getChannelSettings.js"

const router = express.Router();

const validator = ExpressValidator.createValidator();

router.get('/channel', verifyToken, getChannelSettings);

export default router;