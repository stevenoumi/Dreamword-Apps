const bcrypt = require("bcrypt");
const pool = require("../config/dbConfig");
const jwt = require("jsonwebtoken");
const secretKey = 'secret';

exports.registerUser = async (req, res) => {
  const { last_name, first_name, email, password } = req.body;

  try {
    const [existingUsers] = await pool.query("SELECT * FROM Users WHERE email = ?", [email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ error: "Cet utilisateur existe déjà" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO Users (last_name, first_name, email, password) VALUES (?, ?, ?, ?)";
    await pool.query(sql, [last_name, first_name, email, hashedPassword]);
    
    res.status(200).json({ message: "Inscription réussie" });
  } catch (err) {
    console.error("Erreur lors de l'inscription:", err);
    res.status(500).json({ error: "Inscription échouée" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [users] = await pool.query("SELECT * FROM Users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(401).json({ error: "Adresse email incorrecte" });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ userId: user.user_id }, secretKey, { expiresIn: "2h" });

    res.status(200).json({ message: "Connexion réussie", token });
  } catch (err) {
    console.error("Erreur lors de la connexion:", err);
    res.status(500).json({ error: "Connexion échouée" });
  }
};
