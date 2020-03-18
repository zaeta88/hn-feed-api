const mongoose = require('mongoose');

const StorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Story', StorySchema);
