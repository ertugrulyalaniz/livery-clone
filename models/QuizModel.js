const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswerIndex: Number,
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' }
});

module.exports = mongoose.model('Quiz', quizSchema);
