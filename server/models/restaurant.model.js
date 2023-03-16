const { MongoAPIError } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantScheme = new Schema({
    name: { type: String, required: true, maxLength: 50 },
    foods: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
    description: { type: String, maxLength: 250 }
});

const Restaurant = mongoose.model('Restaurant', restaurantScheme);

module.exports = Restaurant;
