const Card = require('../models/cards.model');

async function addCard(req, res) {
    const cardDetails = req.body;
    await Card.create(cardDetails, (err, newCard) => {
        if (err) {
            return res.status(400).json({Error: 'Card details already exists'});
        }
        return res.status(200).json({'Success': 'Card details added sucessfully'});
    });
}

async function getCard(req, res) {
    const customerCard = await Card.find({ customer: req.query._id }).populate('customer', '_id firstname lastname username email tel');
    res.status(200).json(customerCard)
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