const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const reviewController = require('../controllers/reviewControllers');

router.get('/get-review/:id', authenticateToken, reviewController.getProductReviews);
router.post('/add-review-rating', authenticateToken, reviewController.addProductReviewRating);
router.post('/add-review-comment', authenticateToken, reviewController.addProductReviewComment);
router.delete('/delete-review/:id', authenticateToken, reviewController.deleteReview);
router.get('/get-product-reviews/:id', authenticateToken, reviewController.getReviewsByProductId);

module.exports = router;
