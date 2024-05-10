#!/bin/bash


# Récupère l'adresse IP de la machine
IP=$(hostname -I | awk '{print $1}') 

# Options pour apt-get
APT_OPT="-o Dpkg::Progress-Fancy=0 -q -y"
LOG_FILE="/vagrant/logs/install_web.log"
DEBIAN_FRONTEND="noninteractive"

echo "START - install web Server - $IP"

# Installation des paquets requis
echo "=> [1]: Installing required packages..."
apt-get update
apt-get install $APT_OPT \
  apache2 \
  php \
  libapache2-mod-php \
  php-mysql \
  php-intl \
  php-curl \
  php-xmlrpc \
  php-soap \
  php-gd \
  php-json \
  php-cli \
  php-pear \
  php-xsl \
  php-zip \
  php-mbstring \
  curl \
  >> $LOG_FILE 2>&1

# Configuration d'Apache2
echo "=> [2]: Apache2 configuration"

echo "END - install web Server"

# Installation de Node.js version 16.x
echo "=> [4]: Installing Node.js"
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "=> [6]: ssh configuration"
# Configure SSH
sudo sed -i 's/ChallengeResponseAuthentication no/ChallengeResponseAuthentication yes/g' /etc/ssh/sshd_config
sudo service ssh restart

