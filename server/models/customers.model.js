const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstname: { type:String, required: true, maxLength: 50 },
    lastname: { type: String, required: true, maxLength: 50 },
    username: { type: String, required: true, maxLength: 50, unique: true },
    email: { type: String, required: true, maxLength: 50, unique: true },
    tel: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female', 'prefer not to say'], lowercase: true },
    dob: { type: Date },
    password: { type: String, required: true, maxLength: 100 },
    address: { type: String, maxLength: 250 },
    token: { type: String },
    orders: [{ type: mongoose.Types.ObjectId, ref: 'Order' }],
    cart: { type: mongoose.Types.ObjectId, ref: 'Cart' },
    cards: [{ type: mongoose.Types.ObjectId, ref: 'Card' }],    
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
