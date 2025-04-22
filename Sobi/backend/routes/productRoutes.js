const ProductController=require('../controllers/productController')
const express=require('express');
const router=express.Router();
const auth=require("../middleware/auth");

router.get("/",auth,ProductController.getProducts)
router.post("/",auth,ProductController.createProduct)

// router.put("/:id",ProductController.updateProduct)
// router.delete("/:id",ProductController.deleteProduct)


module.exports=router
