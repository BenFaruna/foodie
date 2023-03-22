const express = require('express');

const { getCard, addCard, updateCard, deleteCard } = require('../controllers/card.controllers');
const { userAuthorization } = require('../middleware/authorization.middleware');

const cardRouter = express.Router();

// handling card management
cardRouter.get('/:username/card', userAuthorization, getCard);
cardRouter.post('/:username/card', userAuthorization, addCard);
cardRouter.put('/:username/card', userAuthorization, updateCard);
cardRouter.delete('/:username/card', userAuthorization, deleteCard);

module.exports = cardRouter;
