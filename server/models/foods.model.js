const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: { type: String, require: true, maxLength: 50},
    description: { type: String, maxLength: 250 },
    price: Number,
    image: { data: Buffer, contentType: String },
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
