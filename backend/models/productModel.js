const mongoose = require('mongoose')
const productSchema=new mongoose.Schema({
    id:String,
    title:String,
    description:String,
    price:Number,
    category:String,
    image:String,
    rating:{
   
        rate:Number,
        count:Number
    }
})

const Product=new mongoose.model('Product',productSchema)

module.exports=Product;
