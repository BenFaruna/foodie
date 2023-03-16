const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    cardNo: Number,
    cvv: Number,
    expiryDate: { type: String, maxLength: 5 },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
