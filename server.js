require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const connectionPort = process.env.PORT || 3000;
const app = express();
const homeRoutes = require('./routes/home.routes');

app.use(express.urlencoded({ extended: true }));

// app.set('views', resolve(__dirname, 'src', 'views'));
// app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Hello Heroku'));

app.listen(connectionPort, () => console.log(`successfull listening to port ${connectionPort}`));

app.on('database error', () => {
  console.log('error while connecting to database');
});
