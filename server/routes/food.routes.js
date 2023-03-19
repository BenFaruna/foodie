const express = require('express');
const { getFoods, getRestaurantFoods, getFood, addFood, deleteFood, updateFood } = require('../controllers/food.controllers');

const foodRouter = express.Router();

foodRouter.get('/', getFoods);
foodRouter.get('/:id', getFood);
foodRouter.get('/restaurant/:name', getRestaurantFoods);
foodRouter.post('/restaurant/:name', addFood);
foodRouter.delete('/restaurant/:name/:id', deleteFood);
foodRouter.put('/restaurant/:name/:id', updateFood);

module.exports = foodRouter;
