const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to handle login requests
router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name, password });
    if (user) {
      // Authentication successful
      res.status(200).json({ message: 'Login successful' });
    } else {
      // Authentication failed
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
