const { MongoAPIError } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantScheme = new Schema({
    name: { type: String, required: true, unique: true, maxLength: 50 },
    description: { type: String, maxLength: 250 },
    image: { data: Buffer, contentType: String },
    foods: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
});

const Restaurant = mongoose.model('Restaurant', restaurantScheme);

module.exports = Restaurant;
