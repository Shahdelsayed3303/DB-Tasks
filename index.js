const express = require("express");
const mydb = require("./config/db")
const app= express();
const rout=require("./routes/router")
 
app.get("/getCustomerOrder/:customerId",(req)=>{
    const customerId= req.params.customerId;
})

app.get("/getOverPayeyedOrders/:orderprice",(req)=>{
    const orderprice= req.params.orderprice;
})

app.get("/getDeliveryRate/:rating",(req)=>{
    const rating= req.params.rating;
})

app.get("/getDeliveryNumOfOrders/:numberOfOrders",(req)=>{
    const numberOfOrders= req.params.numberOfOrders;
})

app.use(rout)


app.listen(5000,()=>{
    console.log("server is running ");
})