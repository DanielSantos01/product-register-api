require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const connectionPort = process.env.PORT || 3000;
const app = express();
const homeRoutes = require('./routes/home.routes');
const userRoutes = require('./routes/user.routes');

mongoose.connect(
  'mongodb+srv://danielsantos:staging010203@staging1.9jkrt.mongodb.net/staging?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => app.emit('database connected'))
  .catch(() => app.emit('database failed'));

app.use(express.urlencoded({ extended: true }));

app.set('views', resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(homeRoutes);
app.use(userRoutes);

app.on('database connected', () => {
  app.listen(connectionPort, () => console.log(`successfull listening to port ${connectionPort}`));
});

app.on('database failed', () => console.log('fail while connecting to database'));
