const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    daytime: { type: Date, required: true, default: Date.now() },
    code: { type: Number, required: true },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    items: [{ type: Schema.Types.ObjectId, ref: 'Food' }],
    amount: Number,
    rating: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['processing', 'delivered', 'canceled'],
        lowercase: true,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
