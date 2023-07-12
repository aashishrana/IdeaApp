const express = require("express");
const serverConfig = require("./configs/config.server")

const app = express();

// const port = 3333;

app.get("/", (req, res) => {
    res.send("<h1>Jai shree ram</h1>")
})

app.get("/about", (req, res) => {
    res.send(`<h2>About us page</h2>`)
})



app.listen(serverConfig.PORT, () => {
    console.log(`server is running on port  ${serverConfig.PORT} Jai shree ram `);
})