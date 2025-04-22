const express = require("express");
const cors=require("cors");
const app=express();
const productsRoutes=require("./routes/productRoutes");
const userRoutes=require("./routes/userRoutes");
const cartRoutes=require("./routes/cartRoutes");
const orderRoutes=require("./routes/orderRoutes");
const mongoose=require('mongoose');
app.use(express.json());
mongoose.connect( 
    "mongodb://localhost:27017/food_ordering"
    ).then(()=>{
        console.log("connected to database");

    });
    app.use(cors());
    app.use("/products",productsRoutes);
    app.use("/users",userRoutes);
    app.use("/cart",cartRoutes);
    app.use("/orders",orderRoutes);
    

    app.listen(5000,()=>{
        console.log("server is running on port 5000");
    });
