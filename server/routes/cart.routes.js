const express = require('express');

const { getUserCart, addItemToCart, removeItemFromCart, clearCart } = require('../controllers/cart.controllers');

const cartRouter = express.Router();

cartRouter.get('/:username/cart', getUserCart);
cartRouter.put('/:username/cart/add', addItemToCart);
cartRouter.put('/:username/cart/remove', removeItemFromCart);
cartRouter.put('/:username/cart/clear', clearCart);

module.exports = cartRouter;
