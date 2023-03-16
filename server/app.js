const express = require('express');
const mongoose = require('mongoose');
const { connectDatabase } = require('./utils');

const { requestDetails } =  require('./middleware/general.middleware');

mongoose.set('strictQuery', false);

const app = express();

connectDatabase().catch(err => console.log(err));

app.use(requestDetails);

app.get('/', (req, res) => {
    res.send('Working!!!!!!');
});

module.exports = app;
