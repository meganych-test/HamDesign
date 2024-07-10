require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Serve the players.html file at the /players endpoint
app.get('/players', (req, res) => {
    res.sendFile(path.join(__dirname, 'players.html'));
});

// Define the /api/players endpoint to fetch player data
app.get('/api/players', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users.');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
