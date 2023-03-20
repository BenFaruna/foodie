const express = require('express');
const customerRouter = require('./customer.routes');
const { getCard, addCard, updateCard, deleteCard } = require('../controllers/card.controllers');

const cardRouter = express.Router();

// handling card management
cardRouter.get('/:username/card', getCard);
cardRouter.post('/:username/card', addCard);
cardRouter.put('/:username/card', updateCard);
cardRouter.delete('/:username/card', deleteCard);

module.exports = cardRouter;
