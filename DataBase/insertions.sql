-- Insertion des Categories
INSERT INTO Categories (category_name) VALUES ("Burger");
INSERT INTO Categories (category_name) VALUES ("Boissons");
INSERT INTO Categories (category_name) VALUES ("Frites");
INSERT INTO Categories (category_name) VALUES ("Desserts");

-- Insérez les Burgers dans la table `Products`
INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES
("Burger Classic", "Le burger classique avec une garniture de fromage, de tomates et de laitue.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 5.99, 100, 4.5, 1),
("Burger BBQ", "Burger BBQ avec une sauce BBQ et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.99, 100, 0.0, 1),
("Burger Veggie", "Burger végétarien avec des légumes et du fromage.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.99, 100, 3.5, 1),
("Burger Spicy", "Burger piquant avec des jalapenos et une sauce piquante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.49, 100, 4.0, 1),
("Burger Deluxe", "Burger deluxe avec des œufs, des bacon et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 8.99, 100, 4.5, 1),
("Burger Seafood", "Burger au fruits de mer avec des crevettes et des coquilles Saint-Jacques.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 9.99, 100, 4.5, 1),
("Burger Chicken", "Burger au poulet avec une sauce barbecue et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.49, 100, 4.5, 1),
("Burger Cheese", "Burger au fromage avec une garniture de fromage fondu.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.29, 100, 4.5, 1);

-- Insérez les Boissons dans la table `Products`

INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES 
("Coca-Cola", "Boisson gazeuse au cola.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Sprite", "Boisson gazeuse au citron vert.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Fanta", "Boisson gazeuse à l'orange.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Ice Tea", "Boisson glacée au thé.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("smotie fraise", "Boisson gazeuse au citron.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Pepsi", "Boisson gazeuse au cola.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Dr. Pepper", "Boisson gazeuse au cola.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("smotie banane", "Boisson gazeuse au citron vert.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2);
-- Insérez les Frites dans la table `Products`

INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES 
("Frites Classic", "Frites classiques avec du sel.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 3),
("Frites Cheese", "Frites au fromage fondu.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 3),
("Frites BBQ", "Frites avec une sauce barbecue.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 3),
("Frites Spicy", "Frites piquantes avec une sauce piquante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 3);


-- Insérez les Desserts dans la table `Products`

INSERT INTO Products (title, description, image, price, stock, rating, category_id) VALUES 
("Sundae", "Sundae avec de la crème glacée et du chocolat.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 4.99, 100, 4.5, 4),
("Brownie", "Brownie au chocolat avec de la crème glacée.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 5.99, 100, 4.5, 4),
("Cheesecake", "Cheesecake aux fruits rouges.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.99, 100, 4.5, 4),
("Muffin", "Muffin aux pépites de chocolat.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 4);
