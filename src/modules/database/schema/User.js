const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, require: false },
});

module.exports = UserSchema;
