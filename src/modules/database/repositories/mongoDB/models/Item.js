const mongoose = require('mongoose');
const ItemSchema = require('../../../schema/Item');

const ItemModel = mongoose.model('items', ItemSchema);

module.exports = ItemModel;
