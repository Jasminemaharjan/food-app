const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://jasminemaharjan2418_db_user:goFood@clustera.9n6clrl.mongodb.net/?appName=ClusterA';

const mongoDB = async () => {

    try {
        await mongoose.connect(mongoURI);
        console.log("Connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }

}

module.exports = mongoDB;