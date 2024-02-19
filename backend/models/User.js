const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  fullName: String,
  address: String,
  mobileNumber: { type: String, unique: true, required: true },
  nicNumber: { type: String, unique: true, required: true },
  dateOfBirth: Date,
  email: { type: String, unique: true, required: true },
  password: String,
});

module.exports = mongoose.model('User', userSchema);
