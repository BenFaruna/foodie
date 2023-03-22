const express = require('express');
const { getFoods, getRestaurantFoods, getFood, addFood, deleteFood, updateFood } = require('../controllers/food.controllers');
const { adminAuthorization } = require('../middleware/authorization.middleware');

const foodRouter = express.Router();

foodRouter.get('/', getFoods);
foodRouter.get('/:id', getFood);
foodRouter.get('/restaurant/:name', getRestaurantFoods);
foodRouter.post('/restaurant/:name', adminAuthorization, addFood);
foodRouter.delete('/restaurant/:name/:id', adminAuthorization, deleteFood);
foodRouter.put('/restaurant/:name/:id', adminAuthorization, updateFood);

module.exports = foodRouter;
