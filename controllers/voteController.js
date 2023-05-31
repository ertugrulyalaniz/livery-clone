const Vote = require('../models/VoteModel');

// Controller function to create a new vote
const createVote = async (req, res) => {
    try {
        const { user, option } = req.body;
        const vote = new Vote({
            user,
            option
        });
        const savedVote = await vote.save();
        res.status(201).json(savedVote);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the vote' });
    }
};

// Controller function to get a vote by ID
const getVoteById = async (req, res) => {
    try {
        const { voteId } = req.params;
        const vote = await Vote.findById(voteId);
        if (!vote) {
            return res.status(404).json({ error: 'Vote not found' });
        }
        res.json(vote);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the vote' });
    }
};

// Controller function to update a vote
const updateVote = async (req, res) => {
    try {
        const { voteId } = req.params;
        const { user, option } = req.body;
        const updatedVote = await Vote.findByIdAndUpdate(
            voteId,
            { user, option },
            { new: true }
        );
        if (!updatedVote) {
            return res.status(404).json({ error: 'Vote not found' });
        }
        res.json(updatedVote);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the vote' });
    }
};

// Controller function to delete a vote
const deleteVote = async (req, res) => {
    try {
        const { voteId } = req.params;
        const deletedVote = await Vote.findByIdAndDelete(voteId);
        if (!deletedVote) {
            return res.status(404).json({ error: 'Vote not found' });
        }
        res.json({ message: 'Vote deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the vote' });
    }
};

module.exports = {
    createVote,
    getVoteById,
    updateVote,
    deleteVote,
};
