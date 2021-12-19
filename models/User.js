const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
