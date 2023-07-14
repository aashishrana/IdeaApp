const express = require("express");
const serverConfig = require("./configs/config.server")
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config.js");
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
})
// FOR SERVER AND PORT TO BE STARTED
app.listen(serverConfig.PORT, () => {
    console.log(`server is running on port  ${serverConfig.PORT} Jai shree ram `);
})