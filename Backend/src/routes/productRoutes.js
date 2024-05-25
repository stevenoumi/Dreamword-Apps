const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');
const path = require('path');

router.get('/all-products', productController.getAllProducts);
router.get('/:id', productController.getProductById);

module.exports = router;
