const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

router.post('/register', async (req, res) => {
  try {
    const { name, fullName, address, mobileNumber, nicNumber, dateOfBirth, email, password } = req.body;

    console.log('Received registration request:', req.body);

    // Check if mobile number, NIC number, email, or name already exists
    const existingUser = await User.findOne({
      $or: [
        { mobileNumber },
        { nicNumber },
        { email },
        { name }
      ]
    });

    if (existingUser) {
      console.log('Existing User:', existingUser);
      return res.status(400).json({ message: 'Name, Mobile number, NIC number, or email already exists. Please use another one.', existingUser });
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

    console.log('User saved successfully:', newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
