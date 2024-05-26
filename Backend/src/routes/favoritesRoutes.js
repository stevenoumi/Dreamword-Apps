const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteControllers');
const authenticateToken = require('../middleware/authenticateToken');

router.get('/get-favorites', authenticateToken, favoriteController.getFavorites);
router.post('/add-favorite', authenticateToken, favoriteController.addFavorite);
router.delete('/delete-favorite/:id', authenticateToken, favoriteController.deleteFavorite);

module.exports = router;
