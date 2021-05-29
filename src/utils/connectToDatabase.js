const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect(
    'mongodb+srv://danielsantos:staging010203@staging1.9jkrt.mongodb.net/staging?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
};
