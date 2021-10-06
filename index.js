const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./data.json")

app.get("/",(req, res) => {
    res.send("Hello World");
})
app.get("/apple", (req,res) => {
    res.send(importData)
})
app.listen(port, ()=> {
    console.log(`app is running on port ${port}`)
})