const express = require('express');
const { getFoods, getRestaurantFoods, getFood, addFood, deleteFood, updateFood } = require('../controllers/food.controllers');
const { adminAuthorization } = require('../middleware/authorization.middleware');
const upload = require('../middleware/files.middleware');

const foodRouter = express.Router();

foodRouter.get('/', getFoods);
foodRouter.get('/:id', getFood);
foodRouter.put('/:id', adminAuthorization, updateFood);
foodRouter.delete('/:id', adminAuthorization, deleteFood);
foodRouter.get('/restaurant/:name', getRestaurantFoods);
foodRouter.post('/restaurant/:name', adminAuthorization, upload.single('image'), addFood);

module.exports = foodRouter;
