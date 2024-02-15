const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for "register" collection
const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  nicNumber: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create model for "register" collection
const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
