const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileControllers');
const authenticateToken = require('../middleware/authenticateToken');
const multer = require('multer');
const path = require('path');

// Configuration de multer pour le stockage des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images'); // Stockage direct dans le dossier /images
  },
  filename: (req, file, cb) => {
    // Utilisation uniquement du nom original du fichier sans ajouter l'URL complète
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get('/get-profile', authenticateToken, profileController.getUserProfile);
router.post('/update-profile', authenticateToken, upload.single('image'), profileController.updateUserProfile);

module.exports = router;
