const express = require('express');
const { createCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer } = require('../controllers/customer.controllers');
const { getCard, addCard, deleteCard, updateCard } = require('../controllers/card.controllers');
const { getUserCart, addItemToCart, removeItemFromCart, clearCart } = require('../controllers/cart.controllers');

const customerRouter = express.Router();

// handling user management
customerRouter.get('/', getCustomers);
customerRouter.get('/:username', getCustomer)
customerRouter.post('/', createCustomer);
customerRouter.put('/:username', updateCustomer);
customerRouter.delete('/:username', deleteCustomer);

// handling card management
customerRouter.get('/:username/card', getCard);
customerRouter.post('/:username/card', addCard);
customerRouter.put('/:username/card', updateCard);
customerRouter.delete('/:username/card', deleteCard);

// handling cart operations
customerRouter.get('/:username/cart', getUserCart);
customerRouter.put('/:username/cart/add', addItemToCart);
customerRouter.put('/:username/cart/remove', removeItemFromCart);
customerRouter.put('/:username/cart/clear', clearCart);

module.exports = customerRouter;
