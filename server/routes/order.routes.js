const express = require('express');
const { getCustomerOrder, addCustomerOrder, updateOrderStatus, getAllOrders, getSpecificOrder } = require('../controllers/order.controllers');

const orderRouter = express.Router();

orderRouter.get('/orders', getAllOrders);
orderRouter.put('/orders', updateOrderStatus);
orderRouter.get('/orders/:orderId', getSpecificOrder);
orderRouter.get('/:username/orders', getCustomerOrder);
orderRouter.post('/:username/orders', addCustomerOrder);

module.exports = orderRouter;
