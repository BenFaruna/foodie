const fs = require('fs');
const path = require('path');

const Food = require('../models/foods.model');
const Restaurant = require('../models/restaurants.model');

async function getRestaurants(req, res) {
    const restaurants = await Restaurant.find().populate('foods', '_id name description image');
    return res.status(200).json(restaurants);
}

async function getRestaurant(req, res) {
    const restaurantName = req.params.name;
    const restaurant = await Restaurant.findOne({ name: restaurantName }, "name description");
    if (restaurant) {
        return res.status(200).json(restaurant);
    }
    return res.status(404).json({ 'Error': `Restaurant ${restaurantName} not found` });
}

async function addRestaurant(req, res) {
    const newRestaurantDetails = req.body;

    if (req.file) {
        await cloudinary.uploader.upload(path.join(__dirname, '..', req.file.path))
        .then((data) => {
            newRestaurantDetails.image = data.secure_url;
            fs.unlinkSync(
                path.join(__dirname, '..', 'uploads', data.original_filename) + `.${data.format}`
                );
        }).catch((err) => {
            console.log(err);
        })
    }

    await Restaurant.create(newRestaurantDetails, (err, newRestaurant) => {
        if (err) {
            return res.status(400).json({ 'Error': err.message });
        }
        delete newRestaurant.image;
        return res.status(200).json({ 'Success': 'Restaurant added successfully', newRestaurant });
    });
}

async function deleteRestaurant(req, res) {
    const restaurantName = req.params.name;
    const restaurant = await Restaurant.findOne({ name: restaurantName });

    try {
        const restaurantId = restaurant._id;
        await restaurant.deleteOne();
        await Food.deleteMany({ restaurant: restaurantId });
        return res.status(200).json({ 'Success': 'Restuarant deleted successfully' });
    } catch (err) {
        return res.status(404).json({ 'Error': `Restaurant ${restaurantName} does not exist`});
    }
}

async function updateRestaurant(req, res) {
    const restaurantNewDetails = req.body;
    const restaurantName = req.params.name;
    const restaurant = await Restaurant.findOne({ name: restaurantName });
    try {
        await restaurant.updateOne(restaurantNewDetails);
        return res.status(200).json({ 'Success': 'Restaurant updated successfully' });
    } catch (err) {
        return res.status(400).json({ 'Error': `Restaurant ${restaurantName} does not exist`});
    }
}

module.exports = {
    addRestaurant,
    getRestaurant,
    getRestaurants,
    deleteRestaurant,
    updateRestaurant,
}
