const express = require('express');
const { createCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer } = require('../controllers/customer.controllers');

const cardRouter = require('./card.routes');
const cartRouter = require('./cart.routes');
const orderRouter = require('./order.routes');

const customerRouter = express.Router();

// handling card management
customerRouter.use('/', cardRouter);

// handling cart operations
customerRouter.use('/', cartRouter);

// handling order operations
customerRouter.use('/', orderRouter);

// handling customer management
customerRouter.get('/', getCustomers);
customerRouter.get('/:username', getCustomer)
customerRouter.post('/', createCustomer);
customerRouter.put('/:username', updateCustomer);
customerRouter.delete('/:username', deleteCustomer);

module.exports = customerRouter;
