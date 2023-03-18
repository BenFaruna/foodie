const Food = require('../models/foods.model');

async function getFoods(req, res) {
    const foods = await Food.find().populate('restaurant', '_id name description');
    return res.status(200).json(foods);
}

async function getFood(req, res) {
    const foodId = req.params.id;
    const food = await Food.findOne({ _id: foodId }, "_id name description");
    if (food) {
        return res.status(200).json(food);
    }
    return res.status(404).json({ 'Error': `Food ${foodId} not found` });
}

async function addFood(req, res) {
    const newFoodDetails = req.body;
    await Food.create(newFoodDetails, (err, newFood) => {
        if (err) {
            return res.status(400).json({ 'Error': err.message });
        }
        return res.status(200).json({ 'Success': 'Food added successfully'});
    });
}

async function deleteFood(req, res) {
    const foodId = req.params.id;

    try {
        const food = await Food.findOne({ name: foodId });
        await food.deleteOne();
        return res.status(200).json({ 'Success': 'Food deleted successfully' });
    } catch (err) {
        return res.status(404).json({ 'Error': `Food ${foodId} does not exist`});
    }
}

async function updateFood(req, res) {

}

module.exports = {
    addFood,
    getFood,
    getFoods,
    deleteFood,
    updateFood,
}
