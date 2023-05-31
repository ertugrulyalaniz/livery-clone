const Poll = require('../models/PollModel');

// Controller function to create a new poll
const createPoll = async (req, res) => {
    try {
        const { question, options } = req.body;
        const poll = new Poll({
            question,
            options
        });
        const savedPoll = await poll.save();
        res.status(201).json(savedPoll);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the poll' });
    }
};

// Controller function to get a poll by ID
const getPollById = async (req, res) => {
    try {
        const { pollId } = req.params;
        const poll = await Poll.findById(pollId);
        if (!poll) {
            return res.status(404).json({ error: 'Poll not found' });
        }
        res.json(poll);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the poll' });
    }
};

// Controller function to update a poll
const updatePoll = async (req, res) => {
    try {
        const { pollId } = req.params;
        const { question, options } = req.body;
        const updatedPoll = await Poll.findByIdAndUpdate(
            pollId,
            { question, options },
            { new: true }
        );
        if (!updatedPoll) {
            return res.status(404).json({ error: 'Poll not found' });
        }
        res.json(updatedPoll);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the poll' });
    }
};

// Controller function to delete a poll
const deletePoll = async (req, res) => {
    try {
        const { pollId } = req.params;
        const deletedPoll = await Poll.findByIdAndDelete(pollId);
        if (!deletedPoll) {
            return res.status(404).json({ error: 'Poll not found' });
        }
        res.json({ message: 'Poll deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the poll' });
    }
};

module.exports = {
    createPoll,
    getPollById,
    updatePoll,
    deletePoll,
};
