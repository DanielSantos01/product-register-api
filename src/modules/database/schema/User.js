const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, require: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false },
});

module.exports = UserSchema;
