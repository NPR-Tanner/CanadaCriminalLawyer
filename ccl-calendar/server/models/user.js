const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  province: String,
  city: String,
  email: String,
  password: String,
  phone_number: String,
  user_type: String
}, {
  timestamps: true
});

const User = mongoose.model("Users", userSchema);

module.exports = User;