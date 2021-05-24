require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const app = express();
const homeRoutes = require('./routes/home.routes');

mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => app.emit('database connected'))
  .catch((err) => app.emit('database error'));

app.use(express.urlencoded({ extended: true }));

app.set('views', resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(homeRoutes);

app.on('database connected', () => {
  app.listen(3000);
});

app.on('database error', () => {
  app.send('error while connecting to database');
});
