
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const connectDB = async () =>
{
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host} http://localhost:${port}/graphql`.cyan.underline.bold);
};

module.exports = connectDB;

