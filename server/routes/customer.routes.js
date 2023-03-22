const express = require('express');
const passport = require('../auth');
const { createCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer, customerLogin, customerLogout, customerLoginFailed } = require('../controllers/customer.controllers');
const { userAuthorization } = require('../middleware/authorization.middleware');

const cardRouter = require('./card.routes');
const cartRouter = require('./cart.routes');
const orderRouter = require('./order.routes');

const customerRouter = express.Router();

customerRouter.get('/login', customerLoginFailed);
customerRouter.post('/login', passport.authenticate('local', { failureMessage: true, failureRedirect: '/customers/login' }), customerLogin);
customerRouter.delete('/logout', customerLogout);

// handling card management
customerRouter.use('/', cardRouter);

// handling cart operations
customerRouter.use('/', cartRouter);

// handling order operations
customerRouter.use('/', orderRouter);

// handling customer management
customerRouter.get('/', getCustomers);
customerRouter.get('/:username', userAuthorization, getCustomer)
customerRouter.post('/', createCustomer);
customerRouter.put('/:username', userAuthorization, updateCustomer);
customerRouter.delete('/:username', userAuthorization, deleteCustomer);


module.exports = customerRouter;
