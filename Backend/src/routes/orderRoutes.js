const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/addorders', authenticateToken, orderController.createOrder);
router.get('/userorders', authenticateToken, orderController.getUserOrders); 

module.exports = router;
