const express = require('express');
const { getCustomerOrder, addCustomerOrder, updateOrderStatus, getAllOrders, getSpecificOrder } = require('../controllers/order.controllers');
const { userAuthorization } = require('../middleware/authorization.middleware');

const orderRouter = express.Router();

orderRouter.get('/orders', getAllOrders);
orderRouter.put('/orders', updateOrderStatus);
orderRouter.get('/orders/:orderId', getSpecificOrder);
orderRouter.get('/:username/orders', userAuthorization, getCustomerOrder);
orderRouter.post('/:username/orders', userAuthorization, addCustomerOrder);

module.exports = orderRouter;
