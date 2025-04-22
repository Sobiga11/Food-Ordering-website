const CartController = require('../controllers/cartController'); // Import the UserController
const express = require('express');
const router = express.Router();
const auth=require("../middleware/auth");


router.post("/",auth, CartController.createCart);
router.get("/",auth, CartController.getCart);
router.delete("/delete/:id",auth, CartController.deleteCartProduct);



module.exports = router;



