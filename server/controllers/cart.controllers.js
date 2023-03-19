const Cart = require('../models/carts.model');
const Customer = require('../models/customers.model');

async function getUserCart(req, res) {
    const customerName = req.params.username;

    const customer =  await Customer.findOne({ username: customerName }).select('_id username tel cart');
    const cart = await Cart.findById(customer.cart).populate('food');
    if (customer) {
        return res.status(200).json(cart);
    }
    return res.status(404).json({ 'Error': `Cannot find ${customerName} cart`});
}

async function addItemToCart(req, res) {
    const foodId = req.body.foodId;
    const customerName = req.params.username;

    try {
        const customer =  await Customer.findOne({ username: customerName }).select('_id username tel cart');
        const cart = await Cart.findById(customer.cart);

        if (cart.food.indexOf(foodId) == -1) {
            cart.food.push(foodId);
            await cart.updateOne({ food: cart.food });
    
            return res.status(200).json({'Success': 'Cart updated Succesfully'});
        } else {
            throw new Error('Item already exists in cart');
        }
    } catch (err) {
        res.status(400).json({ 'Error': err.message });
    }
}

async function removeItemFromCart(req, res) {
    const foodId = req.body.foodId;
    const customerName = req.params.username;

    try {
        const customer =  await Customer.findOne({ username: customerName }).select('_id username tel cart');
        const cart = await Cart.findById(customer.cart);
        cart.food.splice(cart.food.indexOf(foodId), 1);
        await cart.updateOne({ food: cart.food });

        return res.status(200).json({'Success': 'Cart updated Succesfully'});
    } catch (err) {
        res.status(400).json({ 'Error': err.message });
    }
}

async function clearCart(req, res) {
    const customerName = req.params.username;

    try {
        const customer =  await Customer.findOne({ username: customerName }).select('_id username tel cart');
        const cart = await Cart.findById(customer.cart);
        cart.food.splice(0, cart.food.length);
        await cart.updateOne({ food: cart.food });

        return res.status(200).json({'Success': 'Cart cleared Succesfully'});
    } catch (err) {
        res.status(400).json({ 'Error': err.message });
    }
}

module.exports = {
    getUserCart,
    addItemToCart,
    clearCart,
    removeItemFromCart,
}
