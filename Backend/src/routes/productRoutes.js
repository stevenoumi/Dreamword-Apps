const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');
const path = require('path');

router.get('/categories/:categoryId/products', productController.getProductsByCategoryId);

router.get('/categories', productController.getCategories);

router.get('/allproducts', productController.getAllProducts);

router.get('/products/:id', productController.getProductById);

router.post('/addproduct', productController.addProduct);
module.exports = router;
