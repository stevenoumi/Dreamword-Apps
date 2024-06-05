# Dreamworld-Apps

Dreamworld-Apps est une application de commerce électronique destinée aux 10 restaurants Dreamworld Burger en France. Cette application a pour objectif de faciliter les commandes de produits tels que les burgers, boissons, desserts et frites. En outre, elle permet non seulement la gestion du magasin par les administrateurs, mais aussi la gestion des achats, la promotion de l'entreprise et les échanges au sein de la communauté.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/en/download/) (si vous souhaitez exécuter l'application en dehors de Docker)

## Installation

Clonez le dépôt GitHub sur votre machine locale :

```sh
git clone https://github.com/votre-utilisateur/DreamWorld-Apps.git
cd DreamWorld-Apps
```

## Configuration

Les fichiers de configuration Docker sont prêts à l'emploi. Vous pouvez personnaliser les variables d'environnement dans le fichier `docker-compose.yml` si nécessaire.

## Utilisation

Pour démarrer l'application avec Docker, exécutez la commande suivante dans le répertoire `docker` :

```sh
cd docker
docker-compose up --build
```

Cette commande va construire et démarrer les services frontend, backend, MariaDB et phpMyAdmin.

Accédez à l'application frontend à l'adresse : `http://localhost:3000`

Accédez à phpMyAdmin à l'adresse : `http://localhost:8080` (utilisez les identifiants configurés dans `docker-compose.yml`)

## Fonctionnalités

- **Compte personnel** : Inscription, connexion et gestion du compte utilisateur.
- **Commandes d’articles** : Ajout d'articles au panier, commande et historique des commandes.
- **Articles** : Affichage des articles, recherche et détails des produits.
- **Navigation** : Interface utilisateur intuitive avec navigation facile.
- **Promotions** : Gestion des promotions et offres spéciales.
- **Avis et évaluations** : Les utilisateurs peuvent laisser des avis et des évaluations sur les produits.
- **Liste des souhaits** : Ajout d'articles aux favoris pour les retrouver facilement.
- **Programme de Fidélité** : Récompenses pour les utilisateurs fidèles.
- **Géolocalisation** : Localisation des magasins ou points de vente.
- **Service client** : Support client pour les utilisateurs.

## Contribuer

Les contributions sont les bienvenues ! Veuillez ouvrir une issue pour discuter de ce que vous souhaitez apporter avant de faire une pull request.

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.
```

Ce README offre une introduction claire au projet Dreamworld-Apps, fournissant des instructions pour l'installation, l'utilisation et la contribution au projet.