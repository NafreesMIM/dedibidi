const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { name, fullName, address, mobileNumber, nicNumber, dateOfBirth, email, password } = req.body;

  try {
    // Check if mobile number, NIC number, or email already exists
    const existingUser = await User.findOne({
      $or: [
        { mobileNumber },
        { nicNumber },
        { email }
      ]
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Mobile number, NIC number, or email already exists' });
    }

    // Create new user
    const newUser = new User({
      name,
      fullName,
      address,
      mobileNumber,
      nicNumber,
      dateOfBirth,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
