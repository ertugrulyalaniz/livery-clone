const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    question: String,
    options: [String],
    votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vote' }],
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' }
});

module.exports = mongoose.model('Poll', pollSchema);