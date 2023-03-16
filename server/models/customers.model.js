const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstname: { type:String, required: true, maxLength: 50 },
    lastname: { type: String, required: true, maxLength: 50},
    email: { type: String, required: true, maxLength: 50 },
    tel: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female', 'prefer not to say'], lowercase: true },
    dob: { type: Date },
    password: { type: String, required: true, maxLength: 50 },
    address: { type: String, maxLength: 250 },
    token: { type: String }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;