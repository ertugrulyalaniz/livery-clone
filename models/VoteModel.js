const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
    choice: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', voteSchema);
