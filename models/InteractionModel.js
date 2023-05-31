const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    content: mongoose.Schema.Types.Mixed,
    startTime: Date,
    endTime: Date,
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
});

module.exports = mongoose.model('Interaction', InteractionSchema);
