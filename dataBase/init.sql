-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS Reviews, CustomerSupport, OrderItems, Orders, Carts, Wishlists, Users, Products, Categories;

-- Création de la table des utilisateurs
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    address TEXT,
    photo VARCHAR(255),
    phone_number VARCHAR(20),
    billing_information TEXT,
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Création de la table des catégories
CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Création de la table des produits
CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    rating DECIMAL(2, 1) DEFAULT 0.0,
    category_id INT NOT NULL,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

-- Création de la table des listes de souhaits
CREATE TABLE Wishlists (
    wishlist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);


-- Création de la table des commandes
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    status ENUM('Prête', 'En préparation', 'En Cours de livraison', 'Livré', 'Annulée') NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    shipping_address TEXT NOT NULL,
    billing_address TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Création de la table des articles de commande
CREATE TABLE OrderItems (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- Création de la table du support client
CREATE TABLE CustomerSupport (
    support_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    user_firstname VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Création de la table des avis et évaluations
CREATE TABLE Reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    rating TINYINT UNSIGNED CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

-- Insertion des Catégories
INSERT INTO Categories (category_name) VALUES ("Burger");
INSERT INTO Categories (category_name) VALUES ("Boissons");
INSERT INTO Categories (category_name) VALUES ("Frites");
INSERT INTO Categories (category_name) VALUES ("Desserts");

-- Insérez les Burgers dans la table `Products`
INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES
("Le Parisien", "Burger classique garni de fromage, tomates et laitue.", "http://localhost:5000/images/leparisien.png", 5.99, 100, 4.5, 1),
("Le Continentale", "Burger BBQ avec sauce barbecue et frites croustillantes.", "http://localhost:5000/images/lecontinentale.png", 6.99, 100, 0.0, 1),
("Le Veggie", "Burger végétarien avec légumes frais et fromage fondu.", "http://localhost:5000/images/levegetarien.png", 7.99, 100, 3.5, 1),
("Le Classique", "Burger épicé avec jalapenos et sauce piquante.", "http://localhost:5000/images/leclassique.png", 6.49, 100, 4.0, 1);

-- Insérez les Boissons dans la table `Products`
INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES 
("Blueberry", "Boisson gazeuse au goût de myrtille.", "http://localhost:5000/images/blueburry.png", 1.99, 100, 4.5, 2),
("Thé Apricot", "Thé glacé parfumé à l'abricot.", "http://localhost:5000/images/apricot.png", 1.99, 100, 4.5, 2),
("Banana Punch", "Boisson fruitée à la banane et agrumes.", "http://localhost:5000/images/bananapunch.png", 1.99, 100, 4.5, 2),
("Thé Cerise", "Thé glacé au parfum de cerise.", "http://localhost:5000/images/theecerise.png", 1.99, 100, 4.5, 2);

-- Insérez les Frites dans la table `Products`
INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES 
("Frites Classiques", "Frites dorées et salées à la perfection.", "http://localhost:5000/images/frites1.png", 2.99, 100, 4.5, 3),
("Frites au Fromage", "Frites nappées de fromage fondu.", "http://localhost:5000/images/frites2.png", 3.99, 100, 4.5, 3),
("Frites BBQ", "Frites garnies de sauce barbecue savoureuse.", "http://localhost:5000/images/frites3.png", 3.99, 100, 4.5, 3),
("Frites Épicées", "Frites relevées avec une sauce piquante.", "http://localhost:5000/images/frites4.png", 3.99, 100, 4.5, 3);

-- Insérez les Desserts dans la table `Products`
INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES 
("Sundae", "Sundae à la crème glacée avec sauce chocolat.", "http://localhost:5000/images/sundae.png", 4.99, 100, 4.5, 4),
("Donuts", "Beignet moelleux nappé de chocolat.", "http://localhost:5000/images/dessert2.png", 5.99, 100, 4.5, 4),
("Cheesecake", "Cheesecake crémeux aux fruits rouges.", "http://localhost:5000/images/cheasecake.png", 6.99, 100, 4.5, 4),
("Muffin", "Muffin aux pépites de chocolat fondantes.", "http://localhost:5000/images/muffin.png", 3.99, 100, 4.5, 4);
