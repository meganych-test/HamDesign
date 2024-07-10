const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    telegramid: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isConnected: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    referredBy: { type: String, default: null },
    userId: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
