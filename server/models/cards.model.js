const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    cardNo: { type: String, required: true, unique: true },
    cvv: { type: String, required: true },
    expiryDate: { type: String, required: true, maxLength: 5 },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
