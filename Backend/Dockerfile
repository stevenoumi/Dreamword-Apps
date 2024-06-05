# Dockerfile pour le backend

FROM node:20-slim

# Définition du répertoire de travail
WORKDIR /usr/src/app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers du backend
COPY . .

# Exposition du port 5000
EXPOSE 5000

# Commande pour lancer le backend
CMD ["npm", "start"]
