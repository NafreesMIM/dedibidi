// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Register = require('./models/Register'); // Assuming you have a Register model

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dedibidi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Route to handle registration
app.post('/api/register', (req, res) => {
  const { name, fullName, address, mobileNumber, nicNumber, dateOfBirth, email, password } = req.body;

  // Create a new Register document
  const newRegister = new Register({
    name,
    fullName,
    address,
    mobileNumber,
    nicNumber,
    dateOfBirth,
    email,
    password
  });

  // Save the new document to the database
  newRegister.save()
    .then(() => {
      res.status(201).json({ message: 'Registration successful' });
    })
    .catch(err => {
      console.error('Error during registration:', err);
      res.status(500).json({ error: 'An error occurred during registration' });
    });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
