const pool = require("../config/dbConfig");

exports.getAllProducts = async (req, res) => {
  try {
    const sql = `SELECT * FROM Products`;
    const [result] = await pool.query(sql);

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Aucun produit trouvé" });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération des produits:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const sql = `
    SELECT 
      Products.product_id,
      Products.title,
      Products.description,
      Products.image,
      Products.price,
      Products.stock,
      Products.rating,
      Products.created_at,
      Products.updated_at,
      Categories.category_name
    FROM 
      Products
    INNER JOIN 
      Categories ON Products.category_id = Categories.category_id
    WHERE product_id = ?`;

    const [result] = await pool.query(sql, [productId]);

    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({ error: "Produit non trouvé" });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération du produit:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.addProduct = async (req, res) => {

  const { title, description, image, price, stock, rating, category_id } = req.body;

  try {
    const sql = `INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.query(sql, [title, description, image, price, stock, rating, category_id]);

    if (result.affectedRows > 0) {
      res.status(201).json({ message: "Produit ajouté avec succès" });
    } else {
      res.status(500).json({ error: "Erreur lors de l'ajout du produit" });
    }
  } catch (err) {
    console.error("Erreur lors de l'ajout du produit:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const sql = `SELECT * FROM Categories`;
    const [results] = await pool.query(sql);

    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: "Aucune catégorie trouvée" });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération des catégories:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.getProductsByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const sql = `SELECT * FROM Products WHERE category_id = ?`;
    const [results] = await pool.query(sql, [categoryId]);

    if (results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: "Aucun produit trouvé pour cette catégorie" });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération des produits:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const sql = `DELETE FROM Products WHERE product_id = ?`;
    const [result] = await pool.query(sql, [productId]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Produit supprimé avec succès" });
    } else {
      res.status(404).json({ error: "Produit non trouvé" });
    }
  } catch (err) {
    console.error("Erreur lors de la suppression du produit:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
