const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./data.json")
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get("/getall",(req, res) => {
    res.send(importData);
})
app.get("/apple", (req,res) => {
    res.send(importData.apple)
})
app.get("/samsung", (req,res) => {
    res.send(importData.samsung)
})
app.get("/xiaomi", (req,res) => {
    res.send(importData.xiaomi)
})
app.get("/oppo", (req,res) => {
    res.send(importData.oppo)
})
app.get("/oppo", (req,res) => {
    res.send(importData.oppo)
})
app.get("/realme", (req,res) => {
    res.send(importData.realme)
})
app.get("/nokia", (req,res) => {
    res.send(importData.nokia)
})
app.get("/vsmart", (req,res) => {
    res.send(importData.vsmart)
})
app.get("/vivo", (req,res) => {
    res.send(importData.vivo)
})
app.get("/asus", (req,res) => {
    res.send(importData.asus)
})
app.get("/oneplus", (req,res) => {
    res.send(importData.oneplus)
})
app.get("/nubia", (req,res) => {
    res.send(importData.nubia)
})


app.listen(port, ()=> {
    console.log(`app is running on port ${port}`)
    console.log(importData.apple)
})