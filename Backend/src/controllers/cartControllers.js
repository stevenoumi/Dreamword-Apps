const pool = require("../config/dbConfig");
const jwt = require('jsonwebtoken');
const secretKey = 'secret';

exports.getCartItem = async (req, res) => {
    const userId = req.user.userId;
    
    try {
        const sql = `SELECT p.title, p.description, p.image, p.product_id, p.price, p.stock, p.rating, c.category_name AS category_name
        FROM Carts wl
        JOIN Products p ON wl.product_id = p.product_id
        JOIN Categories c ON p.category_id = c.category_id
        WHERE wl.user_id =?;`;
        const [result] = await pool.query(sql, [userId]);
    
        if (result.length > 0) {
            res.status(200).json(result); 
        } else {
            res.status(404).json({ error: "Aucun element trouvé" });
        }
    } catch (err) {
        console.error("Erreur lors de la récupération du panier:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}


exports.addCartItem = async (req, res) => {
    const userId = req.user.userId;
    const productId = req.body.product_id;
    const quantity = req.body.quantity;
    try {
        const sql = `INSERT INTO Carts (user_id, product_id, quantity) VALUES (?, ?, ?)`;
        await pool.query(sql, [userId, productId]);
        res.status(201).json({ message: "Produit ajouté au panier" });
    } catch (err) {
        console.error("Erreur lors de l'ajout du produit au panier:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}

exports.deleteCartItem = async (req, res) => {
    const userId = req.user.userId;
    const productId = req.body.product_id;
    console.log(userId, productId);
    try {
        const sql = `DELETE FROM Carts WHERE user_id = ? AND product_id = ?`;
        await pool.query(sql, [userId, productId]);
        res.status(201).json({ message: "Produit supprimé du panier" });
    } catch (err) {
        console.error("Erreur lors de la suppression du produit du panier:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}



exports.cleanFavorite = async (req, res) => {
    const userId = req.user.userId;
    try {
        const sql = `DELETE FROM Carts WHERE user_id = ?`;
        await pool.query(sql, [userId]);
        res.status(200).json({ message: "panier nettoyés" });
    } catch (err) {
        console.error("Erreur lors du nettoyage des panier:", err);
        res.status(500).json({ error: "Erreur serveur" });
    }
}

