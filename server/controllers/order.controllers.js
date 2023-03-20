const Cart = require('../models/carts.model');
const Customer = require("../models/customers.model");
const Order = require("../models/orders.model");

async function getAllOrders(req, res) {
    const orders  = await Order.find().populate('customer items', 'username firstname lastname name price');
    return res.status(200).json(orders);
}

async function getCustomerOrder(req, res) {
    const customerName = req.params.username;
    try {
        const customer = await Customer.findOne({ username: customerName }).select('_id username firstname lastname');
        const order = await Order.find({ customer: customer._id }).populate('items');
        
        return res.status(200).json(order);
    } catch(err) {
        return res.status(400).json({ 'Error': err.message });
    }
}

async function getSpecificOrder(req, res) {
    const orderId = req.params.orderId;

    try {
        const order = await Order.findById(orderId).populate('customer items', 'username firstname lastname name price');
        if (order) {
            return res.status(200).json(order);
        }
        throw new Error('Invalid order id');
    } catch (err) {
        return res.status(404).json({ 'Error': err.message });
    }
}

async function addCustomerOrder(req, res) {
    const customerName = req.params.username;

    const customer = await Customer.findOne({ username: customerName }).select('_id username orders');
    const cart = await Cart.findOne({ customer: customer._id }).populate('food');
    const lastOrder = await Order.findOne().sort({'code':-1});

    if (cart.food.length === 0) {
        return res.status(400).json({'Error': 'No item in cart'});
    }

    const newOrder = {
        customer: customer._id,
        code: lastOrder ? lastOrder.code + 1 : 100000,
        items: [],
    };

    let totalPrice = 0;
    for (let food of cart.food) {
        newOrder.items.push(food._id);
        totalPrice = totalPrice + food.price;
    }
    newOrder.amount = totalPrice;

    await Order.create(newOrder, async (err, createdOrder) => {
        if (err) {
            return res.status(400).json({ 'Error': err.message });
        }

        try {
            customer.orders.push(createdOrder._id);
            cart.food.splice(0, cart.food.length);
            await customer.updateOne({ username: customerName, orders:customer.orders});
            await cart.updateOne({ customer: customer._id, food: cart.food });
            return res.status(200).json({ 'Success': 'Order added successfully'});
        } catch (err) {
            await createdOrder.deleteOne();
            return res.status(400).json({ 'Error': err.message });
        }
    });
}

async function updateOrderStatus(req, res) {
    const orderId = req.body.orderId;
    const orderStatus = req.body.status;

    try {
        const order = await Order.findOne({ _id: orderId });
        await order.updateOne({ 'status': orderStatus });
        return res.status(200).json({ 'Success': 'Status updated successfully' });
    } catch (err) {
        return res.status(400).json({ 'Error': err.message });
    }
}

module.exports = {
    getAllOrders,
    getCustomerOrder,
    getSpecificOrder,
    addCustomerOrder,
    updateOrderStatus,
}
