const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    food: [{ type: Schema.Types.ObjectId, ref: 'Food'}]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
