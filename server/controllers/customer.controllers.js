const { encryptPassword } = require('../utils');
const Customer = require('../models/customers.model');
const Card = require('../models/cards.model');
const Cart = require('../models/carts.model');

async function getCustomers(req, res) {
    const limit = req.params.limit || 20;
    const customers = await Customer.find()
        .select('_id firstname lastname username email tel cart orders')
        .limit(limit);
    return res.status(200).json(customers);
}

async function getCustomer(req, res) {
    const username = req.params.username;
    const customer = await Customer.findOne({ username: username, })
        .select('_id firstname lastname username email tel cart');

    if (customer) {
        return res.status(200).json(customer);
    }
    return res.status(404).json({Error: 'Cannot find customer'});
}

async function createCustomer(req, res) {
    const customerDetails = req.body;

    const hashedPassword = encryptPassword(customerDetails.password);
    customerDetails.password = hashedPassword;

    await Customer.create(customerDetails, async (err, newCustomer) => {
        if (err) {
            return res.status(400).send({Error:err.message});
        }
        const userCart = Cart({ customer: newCustomer._id });
        userCart.save(async (err) => {
            if (err) {
                return res.status(500).json({ 'Error': 'Problems creating user cart'});
            }
            newCustomer.cart = userCart._id;
            await newCustomer.updateOne({ cart: newCustomer.cart });
        })
        return res.status(200).json({'Success': 'User Added successfully'});
    });
}

async function updateCustomer(req, res) {
    const customerNewDetails = req.body;

    if ('password' in customerNewDetails) {
        customerNewDetails.password = encryptPassword(customerNewDetails.password);
    }

    try {
        const customer = await Customer.findOne({ username: req.params.username });
        await customer.updateOne(customerNewDetails);
        return res.status(200).json({'Success': 'Records updated'});
    } catch (err) {
        return res.status(404).json({ 'Error': 'Cannot update records, user does not exist' });
    }
}

async function deleteCustomer(req, res) {
    const username = req.params.username;

    try {
        const customer = await Customer.findOne({ username: username});
        const customerId = customer._id;
        await customer.deleteOne();
        await Card.findByIdAndDelete(customerId);
        return res.status(200).json({'Success': 'User deleted successfully'});
    } catch (err) {
        return res.status(404).json({'Error': `Customer ${username} does not exist`});
    }
}

module.exports = {
    getCustomer,
    getCustomers,
    createCustomer,
    deleteCustomer,
    updateCustomer,
}
