const Card = require('../models/cards.model');
const Customer = require('../models/customers.model');


async function addCard(req, res) {
    const cardDetails = req.body;
    const customerUsername = req.params.username;
    const customer = await Customer.findOne({ 'username': customerUsername }).select('_id username cards');
    cardDetails.customer = customer._id;
    await Card.create(cardDetails, async (err, newCard) => {
        if (err) {
            return res.status(400).json({Error: 'Card details already exists'});
        }
        customer.cards.push(newCard._id);
        await customer.updateOne({cards: customer.cards});
        return res.status(200).json({'Success': 'Card details added sucessfully'});
    });
}

async function getCard(req, res) {
    const customerName = req.params.username;
    try {
        const customerCard = await Customer.findOne({ username: customerName }).populate('cards').select('_id name cards');
        res.status(200).json(customerCard.cards)
    } catch (err) {
        res.status(404).json({ 'Error': err.message });
    }
}

async function deleteCard(req, res) {
    const customerCard = await Card.findOne({ _id: req.query._id });

    try {
        await customerCard.deleteOne();
        return res.status(200).json({ 'Success': 'Card deleted successfully'});
    } catch (err) {
        return res.status(400).json({'Error': err.message });
    }
}

async function updateCard(req, res) {
    const customerNewCardDetails = req.body;

    const customerCard = Card.findOne({ _id: req.body._id });
    try {
        await customerCard.updateOne(customerNewCardDetails);
        return res.status(200).json({'Success': "Updated Card details"});
    } catch (err) {
        return res.status(400).json({ 'Error': err.message });
    }
}


module.exports = {
    addCard,
    getCard,
    deleteCard,
    updateCard,
}