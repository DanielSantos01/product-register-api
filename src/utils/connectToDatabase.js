const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose.connect(
    process.env.CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
};
