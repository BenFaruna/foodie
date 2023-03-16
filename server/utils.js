const mongoose = require("mongoose");

async function connectDatabase() {
    const mongoDB = process.env.db || "mongodb://127.0.0.1/foodie_dev_db";
    await mongoose.connect(mongoDB);
}

module.exports = {
    connectDatabase,
}
