const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const connection = mysql.createConnection({
  host: "localhost",
  user: "steve",
  password: "stevedarius",
  database: "DreamWorld",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err);
  } else {
    console.log("Connexion à MySQL réussie !");
  }
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  connection.query("SELECT * FROM produits", (error, results) => {
    if (error) {
      console.error("Erreur lors de la requête SELECT :", error);
      res
        .status(500)
        .json({ error: "Erreur serveur lors de la requête SELECT." });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/:id", (req, res, next) => {
  const itemId = req.params.id;
  connection.query(
    "SELECT * FROM produits WHERE id = ?",
    [itemId],
    (error, results) => {
      if (error) {
        console.error("Erreur lors de la requête SELECT :", error);
        res
          .status(500)
          .json({ error: "Erreur serveur lors de la requête SELECT." });
      } else {
        if (results.length > 0) {
          res.status(200).json(results[0]);
        } else {
          res.status(404).json({ error: "Aucun produit trouvé avec cet ID." });
        }
      }
    }
  );
});

app.put("/:id", (req, res, next) => {
  const itemId = req.params.id;
  const updatedProductData = req.body;
  connection.query(
    "UPDATE produits SET ? WHERE id = ?",
    [updatedProductData, itemId],
    (error, results) => {
      if (error) {
        console.error("Erreur lors de la mise à jour du produit :", error);
        res
          .status(500)
          .json({ error: "Erreur serveur lors de la mise à jour." });
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: "Produit modifié avec succès." });
        } else {
          res.status(404).json({ error: "Aucun produit trouvé avec cet ID." });
        }
      }
    }
  );
});

const ERR_SERVER = "Erreur serveur. Veuillez réessayer ultérieurement.";

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  connection.query(
    "SELECT id, password FROM Users WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        console.error("Erreur lors de la recherche de l'utilisateur :", error);
        res.status(500).json({ error: ERR_SERVER });
      } else {
        if (results.length > 0) {
          const hashedPasswordFromDB = results[0].passwordHash;
          bcrypt.compare(password, hashedPasswordFromDB, (compareError, match) => {
            if (compareError) {
              console.error("Erreur lors de la comparaison des mots de passe :", compareError);
              res.status(500).json({ error: ERR_SERVER });
            } else {
              if (match) {
                res.status(200).json({ message: "Authentification réussie.", userId: results[0].id });
              } else {
                res.status(401).json({ error: "Identifiants incorrects." });
              }
            }
          });
        } else {
          res.status(401).json({ error: "Identifiants incorrects." });
        }
      }
    }
  );
});

const ERR_USER_CREATION = "Erreur lors de la création de l'utilisateur.";

app.post("/register", (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (firstName && lastName && email && password) {
    bcrypt.hash(password, 10, (hashError, hashedPassword) => {
      if (hashError) {
        console.error("Erreur lors du hachage du mot de passe :", hashError);
        res.status(500).json({ error: ERR_SERVER });
      } else {
        connection.query(
          "INSERT INTO Users (name, firstname, email, passwordHash) VALUES (?, ?, ?, ?)",
          [lastName, firstname, email, hashedPassword],
          (error, results) => {
            if (error) {
              console.error("Erreur lors de l'ajout de l'utilisateur :", error);
              res.status(500).json({ error: ERR_USER_CREATION });
            } else {
              const userId = results.insertId;
              res.status(201).json({ message: "Utilisateur créé avec succès.", userId: userId });
            }
          }
        );
      }
    });
  } else {
    res.status(400).json({ error: "Tous les champs sont requis pour l'inscription." });
  }
});

module.exports = app;
