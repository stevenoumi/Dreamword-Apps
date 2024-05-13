-- Supprimer la table si elle existe   
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS produits;

-- Création de la table des Utilisateurs
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    firstname VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    adress VARCHAR(255),
    photo VARCHAR(255),
    phoneNum VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (`email`)
);

-- Création de la table produits
CREATE TABLE produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    price DECIMAL(10, 2),
    image VARCHAR(255),
    description TEXT,
    caracteristiques TEXT,
    nombreVendu INT DEFAULT 0
);
