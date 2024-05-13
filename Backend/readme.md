backend 

```yml
mon-projet-backend/
│
├── src/
│   ├── config/                  # Configuration globale (connexion à la base de données, variables d'environnement)
│   │   ├── database.js          # Configuration de la connexion à MariaDB
│   │   └── env.js               # Variables d'environnement
│   │
│   ├── controllers/             # Logique métier et gestion des requêtes
│   │   ├── auth.js              # Authentification (inscription, connexion)
│   │   ├── burger.js            # Gestion des burgers (catalogue, panier, favoris)
│   │   ├── order.js             # Gestion des commandes
│   │   └── user.js              # Gestion des utilisateurs (profil, commandes)
│   │
│   ├── models/                  # Modèles Mongoose ou Sequelize
│   │   ├── Burger.js            # Modèle pour les burgers
│   │   ├── Order.js             # Modèle pour les commandes
│   │   └── User.js              # Modèle pour les utilisateurs
│   │
│   ├── routes/                  # Routes Express
│   │   ├── auth.js              # Routes d'authentification
│   │   ├── burger.js            # Routes de gestion des burgers
│   │   ├── order.js             # Routes de gestion des commandes
│   │   └── user.js              # Routes de gestion des utilisateurs
│   │
│   ├── services/                # Services (logique métier, interactions avec les modèles)
│   │   ├── authService.js       # Service pour l'authentification
│   │   ├── burgerService.js     # Service pour la gestion des burgers
│   │   ├── orderService.js      # Service pour la gestion des commandes
│   │   └── userService.js       # Service pour la gestion des utilisateurs
│   │
│   └── app.js                   # Point d'entrée de l'application
│
├── public/                     # Fichiers statiques (CSS, JS, images)
│   ├── css/                    # Styles CSS
│   ├── js/                     # Scripts JavaScript
│   └── images/                 # Images utilisées dans l'application
│
├── tests/                      # Tests unitaires et d'intégration
│   ├── auth.test.js            # Tests pour l'authentification
│   ├── burger.test.js          # Tests pour la gestion des burgers
│   ├── order.test.js           # Tests pour la gestion des commandes
│   └── user.test.js            # Tests pour la gestion des utilisateurs
│
├──.env                       # Variables d'environnement
├── package.json                # Dépendances du projet
└── README.md                   # Documentation du projet
```