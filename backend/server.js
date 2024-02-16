const express = require('express');
const mongoose = require('mongoose');
const Register = require('./models/Register'); // Import the Mongoose model

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dedibidi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Route handler to handle POST requests to create a new registration
app.post('/api/register', async (req, res) => {
  try {
    const newRegistration = new Register(req.body);
    await newRegistration.save();
    res.status(201).json(newRegistration);
  } catch (error) {
    console.error('Error creating registration:', error);
    res.status(500).json({ error: 'An error occurred while creating the registration' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
