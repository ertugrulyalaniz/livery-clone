const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    startTime: { type: Date, required: true },
    endTime: Date,
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Session', SessionSchema);
