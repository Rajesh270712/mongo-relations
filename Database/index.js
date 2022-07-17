const mongoose = require("mongoose");


async function databaseConnect(){
    try {
        mongoose.connect("mongodb://localhost:27017/relation")
        console.log("database connected")
    } catch (error) {
        console.log("Error to connect database");
        throw error
    }
}

module.exports =databaseConnect;