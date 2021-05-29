require('dotenv').config();

const express = require('express');
const { resolve } = require('path');
const homeRoutes = require('./src/routes/home.routes');
const userRoutes = require('./src/routes/user.routes');
const itemRoutes = require('./src/routes/item.routes');
const connectToDatabase = require('./src/utils/connectToDatabase');

const connectionPort = process.env.PORT || '3000';
const app = express();

const run = async () => {
  try {
    await connectToDatabase();

    app.use(express.urlencoded({ extended: true }));

    app.set('views', resolve(__dirname, 'src', 'views'));
    app.set('view engine', 'ejs');

    app.use(homeRoutes);
    app.use(userRoutes);
    app.use(itemRoutes);

    app.listen(connectionPort, () => console.log(`successfull listening to port ${connectionPort}`));
  } catch (err) {
    console.log('fail while connecting to database');
  }
};

run();
