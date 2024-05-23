-- Insertion des Categories
INSERT INTO categories (category_name) VALUES ("Burger");
INSERT INTO categories (category_name) VALUES ("Boissons");
INSERT INTO categories (category_name) VALUES ("Frites");
INSERT INTO categories (category_name) VALUES ("Desserts");

-- Insérez les Burgers dans la table `products`
INSERT INTO products (title, description, image, price, stock, rating, category_id) VALUES
("Burger Classic", "Le burger classique avec une garniture de fromage, de tomates et de laitue.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 5.99, 100, 4.5, 1),
("Burger BBQ", "Burger BBQ avec une sauce BBQ et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.99, 100, 0.0, 1),
("Burger Veggie", "Burger végétarien avec des légumes et du fromage.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.99, 100, 3.5, 1),
("Burger Spicy", "Burger piquant avec des jalapenos et une sauce piquante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.49, 100, 4.0, 1),
("Burger Deluxe", "Burger deluxe avec des œufs, des bacon et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 8.99, 100, 4.5, 1),
("Burger Seafood", "Burger au fruits de mer avec des crevettes et des coquilles Saint-Jacques.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 9.99, 100, 4.5, 1),
("Burger Chicken", "Burger au poulet avec une sauce barbecue et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.49, 100, 4.5, 1),
("Burger Cheese", "Burger au fromage avec une garniture de fromage fondu.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.29, 100, 4.5, 1),
("Burger Mushroom", "Burger aux champignons avec une sauce au fromage.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.29, 100, 4.5, 1),
("Burger Bacon", "Burger au bacon avec une garniture de bacon croustillant.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 8.29, 100, 4.5, 1),
("Burger Avocado", "Burger au avocat avec une garniture d avocat maturé.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.79, 100, 4.5, 1),
("Burger Tuna", "Burger au thon avec une garniture de thon en conserve.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.79, 100, 4.5, 1),
("Burger Grilled", "Burger grillé avec une garniture de légumes grillés.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.59, 100, 4.5, 1),
("Burger Ranch", "Burger au ranch avec une sauce ranch et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.59, 100, 4.5, 1),
("Burger Italian", "Burger italien avec une garniture de fromage mozzarella et de tomates cerises.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 8.59, 100, 4.5, 1),
("Burger Hawaiian", "Burger hawaïen avec une garniture de thon et de fromage cheddar.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.19, 100, 4.5, 1),
("Burger BBQ Chicken", "Burger BBQ au poulet avec une sauce barbecue et des frites.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 8.19, 100, 4.5, 1),
("Burger Chili", "Burger au chili avec une garniture de chili con carne.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 7.89, 100, 4.5, 1),
("Burger Teriyaki", "Burger teriyaki avec une garniture de poulet mariné au teriyaki.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.89, 100, 4.5, 1),
("Burger Steak", "Burger steak avec une garniture de steak haché et de fromage cheddar.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 8.89, 100, 4.5, 1);


-- Insérez les Boissons dans la table `products`

INSERT INTO products (title, description, image, price, stock, rating, category_id) VALUES 
("Coca-Cola", "Boisson gazeuse au cola.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Sprite", "Boisson gazeuse au citron vert.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Fanta", "Boisson gazeuse à l'orange.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Ice Tea", "Boisson glacée au thé.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Lemonade", "Boisson gazeuse au citron.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Pepsi", "Boisson gazeuse au cola.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Dr. Pepper", "Boisson gazeuse au cola.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Mountain Dew", "Boisson gazeuse au citron vert.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("7 Up", "Boisson gazeuse au citron vert.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Red Bull", "Boisson énergisante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 2),
("Monster", "Boisson énergisante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 2),
("Rockstar", "Boisson énergisante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 2),
("Gatorade", "Boisson énergisante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 2),
("Vitamin Water", "Boisson énergisante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 2),
("Perrier", "Eau gazeuse.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Evian", "Eau minérale.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("San Pellegrino", "Eau minérale.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Badoit", "Eau gazeuse.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Vittel", "Eau minérale.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2),
("Contrex", "Eau minérale.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 1.99, 100, 4.5, 2);

-- Insérez les Frites dans la table `products`

INSERT INTO products (title, description, image, price, stock, rating, category_id) VALUES 
("Frites Classic", "Frites classiques avec du sel.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 3),
("Frites Cheese", "Frites au fromage fondu.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 3),
("Frites BBQ", "Frites avec une sauce barbecue.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 3),
("Frites Spicy", "Frites piquantes avec une sauce piquante.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 3),


-- Insérez les Desserts dans la table `products`

INSERT INTO products (title, description, image, price, stock, rating, category_id) VALUES 
("Sundae", "Sundae avec de la crème glacée et du chocolat.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 4.99, 100, 4.5, 4),
("Brownie", "Brownie au chocolat avec de la crème glacée.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 5.99, 100, 4.5, 4),
("Cheesecake", "Cheesecake aux fruits rouges.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.99, 100, 4.5, 4),
("Muffin", "Muffin aux pépites de chocolat.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 4),
("Donut", "Donut glacé au sucre.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 2.99, 100, 4.5, 4),
("Cupcake", "Cupcake à la vanille.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 3.99, 100, 4.5, 4),
("Pancake", "Pancake avec du sirop d'érable.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 4.99, 100, 4.5, 4),
("Waffle", "Gaufre avec de la crème fouettée.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 5.99, 100, 4.5, 4),
("Tiramisu", "Tiramisu au café.", "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 6.99, 100, 4.5, 4);