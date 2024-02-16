const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: String,
  fullName: String,
  address: String,
  mobileNumber: String,
  nicNumber: String,
  dateOfBirth: Date,
  email: String,
  password: String,
  // Add more fields as needed
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
