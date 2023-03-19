const express = require('express');
const { getRestaurant, getRestaurants, addRestaurant, deleteRestaurant, updateRestaurant } = require('../controllers/restaurant.controllers');

const restaurantRouter = express.Router();

restaurantRouter.get('/:name', getRestaurant);
restaurantRouter.get('/', getRestaurants);
restaurantRouter.post('/', addRestaurant);
restaurantRouter.delete('/:name', deleteRestaurant);
restaurantRouter.put('/:name', updateRestaurant);

module.exports = restaurantRouter;
