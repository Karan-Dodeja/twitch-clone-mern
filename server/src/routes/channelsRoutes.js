import express from 'express';
import ExpressValidation from 'express-joi-validation';
import Joi from 'joi';
import {
    getChannelDetails,
    getChannels,
    getFollowedChannels,
    postFollowChannel
} from "../controllers/controller.js"

const router = express.Router();

const channelDetailsSchema = Joi.object({
    channelId: Joi.string().required(),

})

const validator = ExpressValidation.createValidator({});

router.post('/followed', verifyToken, getFollowedChannels);

router.post('/follow', verifyToken, validator.params(channelDetailsSchema), postFollowChannel);

router.get('/:channelId', validator.params(channelDetailsSchema), getChannelDetails)

router.get('/', getChannels)

export default router;