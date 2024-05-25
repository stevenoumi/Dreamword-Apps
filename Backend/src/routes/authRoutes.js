const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const path = require('path');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;
