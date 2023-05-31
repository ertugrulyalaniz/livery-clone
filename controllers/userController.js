const User = require('../models/UserModel');

// Controller function to create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password
        });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the user' });
    }
};

// Controller function to get a user by ID
const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the user' });
    }
};

// Controller function to update a user
const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const { name, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, password },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the user' });
    }
};

// Controller function to delete a user
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the user' });
    }
};

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
};
