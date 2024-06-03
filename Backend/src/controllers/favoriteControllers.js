const pool = require("../config/dbConfig");
const jwt = require('jsonwebtoken');
const secretKey = 'secret';

exports.getFavorites = async (req, res) => {
    const userId = req.user.userId;
    
    try {
        const sql = `SELECT p.title, p.description, p.image, p.product_id, p.price, p.stock, p.rating, c.category_name AS category_name
        FROM Wishlists wl
        JOIN Products p ON wl.product_id = p.product_id
        JOIN Categories c ON p.category_id = c.category_id
        WHERE wl.user_id =?;`;
        const [result] = await pool.query(sql, [userId]);
    
        if (result.length > 0) {
            res.status(200).json(result); // Modifier cette ligne
        } else {
            res.status(404).json({ error: "Aucun favori trouvé" });
        }
    } catch (err) {
        console.error("Erreur lors de la récupération des favoris:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}


exports.addFavorite = async (req, res) => {
    const userId = req.user.userId;
    const productId = req.body.product_id; // Récupérer product_id depuis le corps de la requête
    try {
        const sql = `INSERT INTO Wishlists (user_id, product_id) VALUES (?, ?)`;
        await pool.query(sql, [userId, productId]);
        res.status(201).json({ message: "Produit ajouté aux favoris" });
    } catch (err) {
        console.error("Erreur lors de l'ajout du produit aux favoris:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}

exports.deleteFavorite = async (req, res) => {
    const userId = req.user.userId;
    const productId = req.body.product_id; 
    try {
        const sql = `DELETE FROM Wishlists WHERE user_id = ? AND product_id = ?`;
        await pool.query(sql, [userId, productId]);
        res.status(201).json({ message: "Produit supprimé des favoris" });
    } catch (err) {
        console.error("Erreur lors de la suppression du produit des favoris:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}



exports.cleanFavorite = async (req, res) => {
    const userId = req.user.userId;
    try {
        const sql = `DELETE FROM Wishlists WHERE user_id = ?`;
        await pool.query(sql, [userId]);
        res.status(200).json({ message: "Favoris nettoyés" });
    } catch (err) {
        console.error("Erreur lors du nettoyage des favoris:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}

