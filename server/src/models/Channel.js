import mongoose from 'mongoose'
import { v4 as uuid } from 'uuid'

const { Schema } = mongoose;

const defaultTitle = 'New Channel';
const defaultDescription = 'This is New Channel Description.';

// Channel Schema for DB
const channelSchema = new Schema({
    isActive: { type: Boolean, default: false },
    title: { type: String, default: defaultTitle },
    description: { type: String, default: defaultDescription },
    avatarUrl: { type: String, default: 'none' },
    streamKey: { type: String, default: uuid() },
    messages: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Message' }], // Connected message model/schema
        default: [],
    }
})

export default mongoose.model("Channel", channelSchema);