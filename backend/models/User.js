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

// Static method to check if any of the provided fields already exist
userSchema.statics.exists = async function (fields) {
  const user = await this.findOne({ $or: fields }).exec();
  return !!user;
};

module.exports = mongoose.model('User', userSchema);
