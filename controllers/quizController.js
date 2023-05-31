const Quiz = require('../models/QuizModel');

// Controller function to create a new quiz
const createQuiz = async (req, res) => {
    try {
        const { question, options, correctAnswer } = req.body;
        const quiz = new Quiz({
            question,
            options,
            correctAnswer
        });
        const savedQuiz = await quiz.save();
        res.status(201).json(savedQuiz);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the quiz' });
    }
};

// Controller function to get a quiz by ID
const getQuizById = async (req, res) => {
    try {
        const { quizId } = req.params;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the quiz' });
    }
};

// Controller function to update a quiz
const updateQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const { question, options, correctAnswer } = req.body;
        const updatedQuiz = await Quiz.findByIdAndUpdate(
            quizId,
            { question, options, correctAnswer },
            { new: true }
        );
        if (!updatedQuiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.json(updatedQuiz);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the quiz' });
    }
};

// Controller function to delete a quiz
const deleteQuiz = async (req, res) => {
    try {
        const { quizId } = req.params;
        const deletedQuiz = await Quiz.findByIdAndDelete(quizId);
        if (!deletedQuiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        res.json({ message: 'Quiz deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the quiz' });
    }
};

module.exports = {
    createQuiz,
    getQuizById,
    updateQuiz,
    deleteQuiz,
};
