const express = require('express');
const { getRestaurant, getRestaurants, addRestaurant, deleteRestaurant, updateRestaurant } = require('../controllers/restaurant.controllers');
const { adminAuthorization } = require('../middleware/authorization.middleware');
const upload = require('../middleware/files.middleware');

const restaurantRouter = express.Router();

restaurantRouter.get('/:name', getRestaurant);
restaurantRouter.get('/', getRestaurants);
restaurantRouter.post('/', adminAuthorization, upload.single('image'), addRestaurant);
restaurantRouter.delete('/:name', adminAuthorization, deleteRestaurant);
restaurantRouter.put('/:name', adminAuthorization, updateRestaurant);

module.exports = restaurantRouter;
