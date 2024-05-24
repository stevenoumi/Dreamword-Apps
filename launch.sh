#!/bin/bash

# Démarrer les services Docker en arrière-plan
echo "Starting Docker services..."
cd ./Docker/ || { echo "Failed to navigate to Docker directory"; exit 1; }
sudo docker-compose up -d || { echo "Failed to start Docker services"; exit 1; }

cd .. || exit 1  # Revenir au répertoire précédent

# Naviguer dans le répertoire Frontend et démarrer le projet avec npm
echo "Starting Frontend..."
cd ./Frontend/ || { echo "Failed to navigate to Frontend directory"; exit 1; }
npm start &  # Démarrer le frontend en arrière-plan
cd - || exit 1  # Revenir au répertoire précédent


# Démarrer le serveur Backend avec Node.js
echo "Starting Backend server..."
node --watch  ./Backend/server.js &  # Démarrer le backend en arrière-plan

# Attendre que tous les processus se terminent
wait

echo "All services started successfully."
