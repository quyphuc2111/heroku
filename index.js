const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const importData = require("./data.json")
const cors = require('cors');

const corsOptions ={
    origin:'http://phuc-shop.surge.sh', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get("/product",(req, res) => {
    res.send(importData);
})
app.get("/product/apple", (req,res) => {
    res.send(importData.apple)
})
app.get("/product/samsung", (req,res) => {
    res.send(importData.samsung)
})
app.get("/product/xiaomi", (req,res) => {
    res.send(importData.xiaomi)
})
app.get("/product/oppo", (req,res) => {
    res.send(importData.oppo)
})
app.get("/product/oppo", (req,res) => {
    res.send(importData.oppo)
})
app.get("/product/realme", (req,res) => {
    res.send(importData.realme)
})
app.get("/product/nokia", (req,res) => {
    res.send(importData.nokia)
})
app.get("/product/vsmart", (req,res) => {
    res.send(importData.vsmart)
})
app.get("/product/vivo", (req,res) => {
    res.send(importData.vivo)
})
app.get("/product/asus", (req,res) => {
    res.send(importData.asus)
})
app.get("/product/oneplus", (req,res) => {
    res.send(importData.oneplus)
})
app.get("/product/nubia", (req,res) => {
    res.send(importData.nubia)
})


app.listen(port, ()=> {
    console.log(`app is running on port ${port}`)
    console.log(importData.apple)
})