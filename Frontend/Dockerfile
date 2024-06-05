# Dockerfile pour le frontend

FROM node:20-slim

# Définition du répertoire de travail
WORKDIR /usr/src/app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers du frontend
COPY . .

# Exposition du port 3000
EXPOSE 3000

# Commande pour lancer le frontend
CMD ["npm", "start"]
