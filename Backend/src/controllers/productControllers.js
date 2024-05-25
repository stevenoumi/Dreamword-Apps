const pool = require("../config/dbConfig");


exports.getAllProducts = async (req, res) => {
  try {
    const sql = `SELECT * FROM Products`;
    const [result] = await pool.query(sql);

    if (result.length > 0) {
      res.status(200).json(result);
    }
  }
  catch (err) {
    console.error("Erreur lors de la récupération des produits:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const sql = `SELECT * FROM Products WHERE product_id = ?`;
    const [result] = await pool.query(sql, [productId]);

    if (result.length > 0) {
      res.status(200).json(result);
    }
  }
  catch (err) {
    console.error("Erreur lors de la récupération du produit:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}

