require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const connectionPort = process.env.PORT || 3000;
const app = express();
const homeRoutes = require('./routes/home.routes');

mongoose.connect(
  ' mongodb+srv://danielsantos:staging010203@staging1.9jkrt.mongodb.net/staging?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => app.emit('database connected'))
  .catch((err) => app.emit('database error'));

app.use(express.urlencoded({ extended: true }));

app.set('views', resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(homeRoutes);

app.on('database connected', () => {
  app.listen(connectionPort, () => console.log(`successfull listening to port ${connectionPort}`));
});

app.on('database error', () => {
  console.log('error while connecting to database');
});
