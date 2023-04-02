const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  province: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: String,
  user_type: {type: String, default: 'lawyer'},
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, required: true, select: false },
    sessionToken: { type: String, select: false },
    confirmed: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
  }
}, {
  timestamps: true
});

const User = mongoose.model("Users", userSchema);

export const findUserByEmail = (email) => {
  User.findOne({ email });
}

export const createNewUser = (values) => {
  new User(values).save().then((user) => user.toObject());
}

export const getUserBySession = (sessionToken) => {
  User.findOne({ 'authentication.sessionToken': sessionToken });
}

module.exports = User;

/* select: false means that when you use a controller to fetch a user, you don't want to fetch the authentication object by accident */