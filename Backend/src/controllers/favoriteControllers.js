// const pool = require("../config/dbConfig");
// const jwt = require('jsonwebtoken');
// const secretKey = 'secret';

// exports.getUserFavorites = async (req, res) => {
//   const userId = req.user.userId;

//   try {
//     const sql = `SELECT * FROM Wishlists WHERE user_id = ?`;
//     const [result] = await pool.query(sql, [userId]);

//     if (result.length > 0) {
//       res.status(200).json(result[0]);
//     } else {
//       res.status(404).json({ error: "Utilisateur non trouvé" });
//     }
//   } catch (err) {
//     console.error("Erreur lors de la récupération de la liste des favoris de l'utilisateur utilisateur:", err);
//     res.status(500).json({ error: "Erreur serveur" });
//   }
// };