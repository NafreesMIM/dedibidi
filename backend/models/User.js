const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  fullName: String,
  address: String,
  mobileNumber: String,
  nicNumber: String,
  dateOfBirth: Date,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema, 'users');
