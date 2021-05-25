const mongoose = require('mongoose');
const UserSchema = require('../../../schema/User');

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
