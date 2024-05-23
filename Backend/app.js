const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const authRoutes = require("./routes/authRoutes");

const app = express();

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

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  connection.query("SELECT * FROM produits", (error, results) => {
    if (error) {
      console.error("Erreur lors de la requête SELECT :", error);
      res.status(500).json({ error: "Erreur serveur lors de la requête SELECT." });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = app;
