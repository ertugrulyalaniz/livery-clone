const Message = require('../models/MessageModel');

// Controller function to create a new message
const createMessage = async (req, res) => {
    try {
        const { content, user, session } = req.body;
        const message = new Message({
            content,
            user,
            session
        });
        const savedMessage = await message.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the message' });
    }
};

// Controller function to get a message by ID
const getMessageById = async (req, res) => {
    try {
        const { messageId } = req.params;
        const message = await Message.findById(messageId);
        if (!message) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the message' });
    }
};

// Controller function to update a message
const updateMessage = async (req, res) => {
    try {
        const { messageId } = req.params;
        const { content, user, session } = req.body;
        const updatedMessage = await Message.findByIdAndUpdate(
            messageId,
            { content, user, session },
            { new: true }
        );
        if (!updatedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the message' });
    }
};

// Controller function to delete a message
const deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.params;
        const deletedMessage = await Message.findByIdAndDelete(messageId);
        if (!deletedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
