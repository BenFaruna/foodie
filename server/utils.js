const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

async function connectDatabase() {
    const mongoDB = process.env.dbpassword !== undefined ?
        `mongodb+srv://BenFaruna:${process.env.dbpassword}@foodie.jdriiu0.mongodb.net/foodie?retryWrites=true&w=majority` :
        'mongodb://127.0.0.1/foodie_dev_db';
    await mongoose.connect(mongoDB);
}

function encryptPassword(password) {
    const hashPassword = bcrypt.hashSync(password, 10);
    return hashPassword;
}

function validatePassword(password, encryptedPassword) {
    const isValidated = bcrypt.compareSync(password, encryptedPassword);
    return isValidated;
}

module.exports = {
    connectDatabase,
    encryptPassword,
    validatePassword,
    cloudinary,
}
