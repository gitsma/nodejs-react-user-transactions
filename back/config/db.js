const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log('Connect to MongoDB', conn.connection.host)
    } catch (error) {
        console.log('Could not connect to MongoDB', err)
    }
}

module.exports = connectDB;