const express = require('express');

const { getUserCart, addItemToCart, removeItemFromCart, clearCart } = require('../controllers/cart.controllers');
const { userAuthorization } = require('../middleware/authorization.middleware');

const cartRouter = express.Router();

cartRouter.get('/:username/cart', userAuthorization, getUserCart);
cartRouter.put('/:username/cart/add', userAuthorization, addItemToCart);
cartRouter.put('/:username/cart/remove', userAuthorization, removeItemFromCart);
cartRouter.put('/:username/cart/clear', userAuthorization, clearCart);

module.exports = cartRouter;
