const express = require('express');
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, orderController.getOrders);
router.post('/create', auth, orderController.createOrder);
module.exports = router;