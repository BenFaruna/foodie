const cors = require('cors');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { connectDatabase } = require('./utils');
const passport = require('./auth');

const { requestDetails } = require('./middleware/general.middleware');

const customerRouter = require('./routes/customer.routes');
const restaurantRouter = require('./routes/restaurant.routes');
const foodRouter = require('./routes/food.routes');

mongoose.set('strictQuery', false);

const app = express();

connectDatabase().catch(err => console.log(err));

const sess = {
  secret: process.env.secret || 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));
app.use(passport.session());

app.use(cors());
app.use(requestDetails);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/customers', customerRouter);
app.use('/restaurants', restaurantRouter);
app.use('/foods', foodRouter);

app.get('/', (req, res) => {
  // res.status(200).send('Working!!!!!!!!!!!');
  res.sendFile(__dirname + '/index.html');
});

module.exports = app;
