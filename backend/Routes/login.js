// auth.js

const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();

// Connection URI
const uri = 'mongodb://localhost:27017';
const dbName = 'dedibidi';
const collectionName = 'users';

// Login endpoint
router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Find user by username
        const user = await collection.findOne({ name });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
});

module.exports = router;
