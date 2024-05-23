Pour créer une base de données cohérente en tenant compte des fonctionnalités et exigences décrites, nous devons identifier les entités principales et leurs relations. Voici un schéma de base de données relationnelle qui couvre les aspects de gestion de compte, liste de souhaits, panier, commandes, support client, avis, et historique des commandes.

### Schéma de Base de Données

#### 1. Tables Utilisateurs et Profils
- **users**
  - `user_id` (PK)
  - `username` (unique)
  - `password`
  - `email` (unique)
  - ` addresse`
  - `phone_number`
  - `created_at`
  - `updated_at`

- **user_profiles**
  - `profile_id` (PK)
  - `user_id` (FK)
  - `first_name`
  - `last_name`
  - `address`
  - `phone_number`
  - `billing_information`
  - `shipping_address`

#### 2. Table de Liste de Souhaits
- **wishlists**
  - `wishlist_id` (PK)
  - `user_id` (FK)
  - `created_at`
  - `updated_at`

- **wishlist_items**
  - `wishlist_item_id` (PK)
  - `wishlist_id` (FK)
  - `product_id` (FK)
  - `added_at`

#### 3. Table de Panier
- **carts**
  - `cart_id` (PK)
  - `user_id` (FK)
  - `created_at`
  - `updated_at`

- **cart_items**
  - `cart_item_id` (PK)
  - `cart_id` (FK)
  - `product_id` (FK)
  - `quantity`
  - `added_at`

#### 4. Tables de Commandes et de Suivi de Commande
- **orders**
  - `order_id` (PK)
  - `user_id` (FK)
  - `status`
  - `total_amount`
  - `created_at`
  - `updated_at`
  - `shipping_address`
  - `billing_address`

- **order_items**
  - `order_item_id` (PK)
  - `order_id` (FK)
  - `product_id` (FK)
  - `quantity`
  - `price`

- **order_tracking**
  - `tracking_id` (PK)
  - `order_id` (FK)
  - `status`
  - `updated_at`

#### 5. Table de Support Client
- **customer_support**
  - `support_id` (PK)
  - `user_id` (FK)
  - `subject`
  - `message`
  - `created_at`
  - `status`

#### 6. Tables d'Avis et d'Évaluations
- **reviews**
  - `review_id` (PK)
  - `user_id` (FK)
  - `product_id` (FK)
  - `rating`
  - `comment`
  - `created_at`
  - `updated_at`

### Description des Clés et Relations
- `user_id` dans **user_profiles**, **wishlists**, **carts**, **orders**, **customer_support**, et **reviews** est une clé étrangère reliant ces tables à la table **users**.
- `wishlist_id` dans **wishlist_items** est une clé étrangère reliant à **wishlists**.
- `cart_id` dans **cart_items** est une clé étrangère reliant à **carts**.
- `order_id` dans **order_items** et **order_tracking** est une clé étrangère reliant à **orders**.
- `product_id` dans **wishlist_items**, **cart_items**, **order_items**, et **reviews** est une clé étrangère reliant à une table **products** (non décrite ici mais implicite pour les références de produits).

### Schéma ERD (Entity-Relationship Diagram)

Voici une description simplifiée du diagramme ERD :

1. **Users** (1) ⟶ (0..1) **User Profiles**
2. **Users** (1) ⟶ (0..*) **Wishlists** ⟶ (1) ⟶ (0..*) **Wishlist Items**
3. **Users** (1) ⟶ (0..*) **Carts** ⟶ (1) ⟶ (0..*) **Cart Items**
4. **Users** (1) ⟶ (0..*) **Orders** ⟶ (1) ⟶ (0..*) **Order Items**
5. **Orders** (1) ⟶ (0..*) **Order Tracking**
6. **Users** (1) ⟶ (0..*) **Customer Support**
7. **Users** (1) ⟶ (0..*) **Reviews**
8. **Products** (0..*) ⟶ (0..*) **Wishlist Items**, **Cart Items**, **Order Items**, **Reviews**

Chaque entité principale (utilisateurs, produits, commandes, etc.) et leurs relations sont définies de manière à assurer la cohérence et l'intégrité des données. Les tables comprennent les informations nécessaires pour supporter toutes les fonctionnalités mentionnées, telles que l'authentification, la gestion de profils, les listes de souhaits, le panier, les commandes, le support client et les avis.