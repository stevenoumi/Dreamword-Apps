#!/bin/bash

# Install MariaDB server (formerly MySQL)

IP=$(hostname -I | awk '{print $2}')
APT_OPT="-o Dpkg::Progress-Fancy=\"0\" -q -y"
LOG_FILE="/vagrant/logs/install_bdd.log"
DEBIAN_FRONTEND="noninteractive"
MYADMIN_FILE="files/create_tables.sql"


# Database user to create (if empty, skip creation)
DB_NAME="restaurant_db"
DB_USER="user"
DB_PASSWORD="network"

# SQL file to inject (present in a subdirectory)
DB_FILE="files/creation_bdd.sql"

echo "START - Install MariaDB - $IP"

# [1]: Install required packages
echo "=> [1]: Installing required packages..."
apt-get install $APT_OPT \
    mariadb-server \
    mariadb-client \
   >>$LOG_FILE 2>&1

# [2]: Database service configuration
echo "=> [2]: Configuring the database service..."
# Set MariaDB to listen on all IP addresses
sed -i 's/bind-address.*/bind-address = 0.0.0.0/' /etc/mysql/mariadb.conf.d/50-server.cnf

if [ -n "$DB_NAME" ] && [ -n "$DB_USER" ] && [ -n "$DB_PASSWORD" ]; then
    mysql -e "CREATE DATABASE IF NOT EXISTS $DB_NAME" \
    >>$LOG_FILE 2>&1
    mysql -e "GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD'" \
    >>$LOG_FILE 2>&1
fi

# [3]: Database configuration
echo "=> [3]: Configuring the database..."
if [ -f "$DB_FILE" ]; then
    mysql < /vagrant/$DB_FILE 
    mysql < /vagrant/$MYADMIN_FILE \
    >>$LOG_FILE 2>&1
fi

# [4]: Restart MariaDB service
echo "=> [4]: Restarting MariaDB service..."
service mariadb restart \
    >>$LOG_FILE 2>&1

echo "END - Install MariaDB"

# [5]: Ouvrir le port 3306
ufw allow 3306

# Configuration for phpmyadmin
MYSQL_CMD=$(which mysql)  # Utilisation de la commande mysql
$MYSQL_CMD -e "CREATE DATABASE IF NOT EXISTS phpmyadmin"
$MYSQL_CMD -e "GRANT ALL PRIVILEGES ON phpmyadmin.* TO 'pma'@'localhost' IDENTIFIED BY 'pmapass'"

echo "=> [4]: ssh configuration"
# Configure SSH
sudo sed -i 's/ChallengeResponseAuthentication no/ChallengeResponseAuthentication yes/g' /etc/ssh/sshd_config
sudo service ssh restart

