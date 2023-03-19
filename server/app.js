const express = require('express');
const mongoose = require('mongoose');
const { connectDatabase } = require('./utils');

const { requestDetails } =  require('./middleware/general.middleware');

const customerRouter = require('./routes/customer.routes');
const restaurantRouter = require('./routes/restaurant.routes');
const foodRouter = require('./routes/food.routes');

mongoose.set('strictQuery', false);

const app = express();

connectDatabase().catch(err => console.log(err));

app.use(requestDetails);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/customers', customerRouter);
app.use('/restaurants', restaurantRouter);
app.use('/foods', foodRouter);

app.get('/', (req, res) => {
    res.send('Working!!!!!!');
});

module.exports = app;
