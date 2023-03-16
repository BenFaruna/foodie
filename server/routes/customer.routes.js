const express = require('express');
const { createCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer } = require('../controllers/customer.controllers');

const customerRouter = express.Router();

customerRouter.get('/', getCustomers);
customerRouter.get('/:username', getCustomer)
customerRouter.post('/', createCustomer);
customerRouter.put('/:username', updateCustomer);
customerRouter.delete('/:username', deleteCustomer);

module.exports = customerRouter;
