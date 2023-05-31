const Interaction = require('../models/InteractionModel');

// Controller function to create a new interaction
const createInteraction = async (req, res) => {
    try {
        const { type, content, startTime, endTime, session } = req.body;
        const interaction = new Interaction({
            type,
            content,
            startTime,
            endTime,
            session
        });
        const savedInteraction = await interaction.save();
        res.status(201).json(savedInteraction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the interaction' });
    }
};

// Controller function to get an interaction by ID
const getInteractionById = async (req, res) => {
    try {
        const { interactionId } = req.params;
        const interaction = await Interaction.findById(interactionId);
        if (!interaction) {
            return res.status(404).json({ error: 'Interaction not found' });
        }
        res.json(interaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the interaction' });
    }
};

// Controller function to update an interaction
const updateInteraction = async (req, res) => {
    try {
        const { interactionId } = req.params;
        const { type, content, startTime, endTime } = req.body;
        const updatedInteraction = await Interaction.findByIdAndUpdate(
            interactionId,
            { type, content, startTime, endTime },
            { new: true }
        );
        if (!updatedInteraction) {
            return res.status(404).json({ error: 'Interaction not found' });
        }
        res.json(updatedInteraction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the interaction' });
    }
};

// Controller function to delete an interaction
const deleteInteraction = async (req, res) => {
    try {
        const { interactionId } = req.params;
        const deletedInteraction = await Interaction.findByIdAndDelete(interactionId);
        if (!deletedInteraction) {
            return res.status(404).json({ error: 'Interaction not found' });
        }
        res.json({ message: 'Interaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the interaction' });
    }
};

module.exports = {
    createInteraction,
    getInteractionById,
    updateInteraction,
    deleteInteraction,
};
