const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  ownerId: { type: String, require: true },
  description: { type: String, require: false },
  category: { type: String, require: false },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false },
});

module.exports = ItemSchema;
