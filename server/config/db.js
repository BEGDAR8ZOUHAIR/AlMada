const mongoose = require('mongoose');
const colors = require('colors');
const port = process.env.PORT || 6000; 

const connectDB = async () => {
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected:http://localhost:${port}/graphql `.cyan.underline)
    }catch(err){
        console.log(`Error: ${err.message}`.red)
        process.exit(1)
    }
}

module.exports = connectDB
