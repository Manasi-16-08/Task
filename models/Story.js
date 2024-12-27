const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    eventDate: { type: Date, default: Date.now },
}, { timestamps: true });

const StoryModel = mongoose.model('Story', storySchema);
module.exports = StoryModel;
