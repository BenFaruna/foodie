const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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
}
