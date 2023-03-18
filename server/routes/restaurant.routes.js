const express = require('express');
const { getRestaurant, getRestaurants, addRestaurant, deleteRestaurant } = require('../controllers/restaurant.controllers');

const restaurantRouter = express.Router();

restaurantRouter.get('/:name', getRestaurant);
restaurantRouter.get('/', getRestaurants);
restaurantRouter.post('/', addRestaurant);
restaurantRouter.delete('/:name', deleteRestaurant);

module.exports = restaurantRouter;
