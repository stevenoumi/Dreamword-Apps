const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../dbConnection"); // Assurez-vous de bien exporter la connexion MySQL

const registerUser = (req, res) => {
  const { username, password } = req.body;

  // Validation basique des entrées
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username and password" });
  }

  // Hash du mot de passe
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    connection.query(query, [username, hashedPassword], (error, results) => {
      if (error) {
        return res.status(500).json({ message: "Error inserting user" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please provide username and password" });
  }

  const query = "SELECT * FROM users WHERE username = ?";
  connection.query(query, [username], (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Error querying user" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = results[0];

    // Comparaison du mot de passe
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Error comparing password" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Création du token JWT
      const token = jwt.sign({ id: user.id, username: user.username }, "secretKey", {
        expiresIn: "1h",
      });

      res.json({ message: "Login successful", token });
    });
  });
};

module.exports = { registerUser, loginUser };
