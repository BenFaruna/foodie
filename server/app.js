const cors = require('cors');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

const { connectDatabase } = require('./utils');
const passport = require('./auth');

const { requestDetails } = require('./middleware/general.middleware');

const customerRouter = require('./routes/customer.routes');
const restaurantRouter = require('./routes/restaurant.routes');
const foodRouter = require('./routes/food.routes');

mongoose.set('strictQuery', false);

const app = express();

connectDatabase().catch(err => console.log(err));

app.use(session({
  secret: process.env.secret || 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.session());

app.use(cors());
app.use(requestDetails);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/customers', customerRouter);
app.use('/restaurants', restaurantRouter);
app.use('/foods', foodRouter);

app.get('/', (req, res) => {
  res.status(200).send('Working!!!!!!!!!!!');
  // res.sendFile(__dirname + '/index.html');
});

module.exports = app;
