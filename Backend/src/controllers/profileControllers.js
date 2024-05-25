const pool = require("../config/dbConfig");
const jwt = require('jsonwebtoken');
const secretKey = 'secret';

exports.getUserProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    const sql = `SELECT * FROM Users WHERE user_id = ?`;
    const [result] = await pool.query(sql, [userId]);

    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération du profil utilisateur:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.updateUserProfile = async (req, res) => {
  const userId = req.user.userId; 
  const { last_name, first_name, address, phone_number, billing_information, shipping_address } = req.body;
  let imageUrl = req.file? `http://localhost:5000/images/${req.file.filename}`: null; 
  try {
    const sql = `
      UPDATE Users 
      SET last_name =?, first_name =?, address =?, phone_number =?, billing_information =?, shipping_address =?, photo =? 
      WHERE user_id =?
    `;
    await pool.query(sql, [
      last_name,
      first_name,
      address,
      phone_number,
      billing_information,
      shipping_address,
      imageUrl,
      userId,
    ]);

    res.status(200).json({ message: "Profil mis à jour avec succès", photo: imageUrl });
  } catch (err) {
    console.error("Erreur lors de la mise à jour du profil dans la base de données:", err);
    res.status(500).json({ error: "Mise à jour du profil échouée" });
  }
};
