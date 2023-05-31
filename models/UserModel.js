const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePicture: String,
    bio: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
});

module.exports = mongoose.model('User', UserSchema);