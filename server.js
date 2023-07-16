const express = require("express");
const serverConfig = require("./configs/config.server")
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config.js");
const userModel = require("./models/user.model")
const app = express();
// const port = 3333;

// logic to connect to mongoDB and create an ADMIN user
// need to have mongodb up and running inlocal machine

mongoose.connect(dbConfig.DB_URL);

// for starting the database 
const db =   mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to Data Base");
});
db.once("open", () => {
    console.log("DB is connected");

    init();
})

async function init() {
    // initialize the mongo db and need to 
    // create the admin user

    const admin = await userModel.create({
        name : "Aashish Rana",
        userId : "admin",
        email : "aashishrana71135@gmail.com",
        userType : "ADMIN",
        password : "Welcome1"
    });
    console.log(admin);
}
// FOR SERVER AND PORT TO BE STARTED
app.listen(serverConfig.PORT, () => {
    console.log(`server is running on port  ${serverConfig.PORT} Jai shree ram `);
})