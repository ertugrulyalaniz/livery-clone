const Session = require('../models/SessionModel');

// Controller function to create a new session
const createSession = async (req, res) => {
    try {
        const { name, date, location } = req.body;
        const session = new Session({
            name,
            date,
            location
        });
        const savedSession = await session.save();
        res.status(201).json(savedSession);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the session' });
    }
};

// Controller function to get a session by ID
const getSessionById = async (req, res) => {
    try {
        const { sessionId } = req.params;
        const session = await Session.findById(sessionId);
        if (!session) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.json(session);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the session' });
    }
};

// Controller function to update a session
const updateSession = async (req, res) => {
    try {
        const { sessionId } = req.params;
        const { name, date, location } = req.body;
        const updatedSession = await Session.findByIdAndUpdate(
            sessionId,
            { name, date, location },
            { new: true }
        );
        if (!updatedSession) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.json(updatedSession);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the session' });
    }
};

// Controller function to delete a session
const deleteSession = async (req, res) => {
    try {
        const { sessionId } = req.params;
        const deletedSession = await Session.findByIdAndDelete(sessionId);
        if (!deletedSession) {
            return res.status(404).json({ error: 'Session not found' });
        }
        res.json({ message: 'Session deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the session' });
    }
};

module.exports = {
    createSession,
    getSessionById,
    updateSession,
    deleteSession,
};
