const Food = require('../models/foods.model');
const Restaurant = require('../models/restaurants.model');

async function getFoods(req, res) {
    const limit = req.query.limit || null;
    const foods = await Food.find().limit(limit).populate('restaurant', '_id name description');
    return res.status(200).json(foods);
}

async function getFood(req, res) {
    const foodId = req.params.id;
    const food = await Food.findOne({ _id: foodId }, "_id name description").populate('restaurant', '_id name decription');
    if (food) {
        return res.status(200).json(food);
    }
    return res.status(404).json({ 'Error': `Food ${foodId} not found` });
}

async function getRestaurantFoods(req, res) {
    const restaurantName = req.params.name;

    const restaurant = await Restaurant.findOne({ name: restaurantName }).populate('foods');

    if (restaurant) {
        return res.status(200).json(restaurant.foods);
    }
    return res.status(404).json({'Error': 'Restaurant does not exist'});
}

async function addFood(req, res) {
    const restaurantName = req.params.name;
    const newFoodDetails = req.body;

    const restaurant = await Restaurant.findOne({ name: restaurantName });

    if (restaurant) {
        newFoodDetails.restaurant = restaurant._id;
    } else {
        return res.status(400).json({'Error': 'Cannot add food, restaurant does not exist'});
    }

    await Food.create(newFoodDetails, async (err, newFood) => {
        if (err) {
            return res.status(400).json({ 'Error': err.message });
        }
        restaurant.foods.push(newFood._id);
        await restaurant.updateOne({ foods: restaurant.foods });
        return res.status(200).json({ 'Success': 'Food added successfully'});
    });
}

async function deleteFood(req, res) {
    const foodId = req.params.id;

    try {
        const food = await Food.findOne({ _id: foodId });
        await food.deleteOne();
        return res.status(200).json({ 'Success': 'Food deleted successfully' });
    } catch (err) {
        return res.status(404).json({ 'Error': `Food ${foodId} does not exist`});
    }
}

async function updateFood(req, res) {
    const foodNewDetails = req.body;
    const foodId = req.params.id;
    const food = await Food.findOne({ _id: foodId });
    try {
        await food.updateOne(foodNewDetails);
        return res.status(200).json({ 'Success': 'Food updated successfully' });
    } catch (err) {
        return res.status(400).json({ 'Error': `Food ${foodId} does not exist`});
    }
}

module.exports = {
    addFood,
    getFood,
    getFoods,
    getRestaurantFoods,
    deleteFood,
    updateFood,
}
