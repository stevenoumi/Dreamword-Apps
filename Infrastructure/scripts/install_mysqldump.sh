#!/bin/bash

# Installation de mysqldump

APT_OPT="-o Dpkg::Progress-Fancy="0" -q -y"
LOG_FILE="/vagrant/logs/install_mysqldump.log"
DEBIAN_FRONTEND="noninteractive"

echo "START - Install mysqldump"

echo "=> [1]: Installing mysqldump..."
apt-get install $APT_OPT \
  mysql-client \
  >> $LOG_FILE 2>&1

echo "=> [2]: Setting up mysqldump schedule in cron..."
# Trouver l'emplacement de la commande mysqldump
MYSQLDUMP_PATH=$(which mysqldump)
# Programmer une sauvegarde toutes les 3 heures
CRON_JOB="0 */3 * * * root $MYSQLDUMP_PATH --user=user --password=network --host=192.168.56.11 --databases restaurant_db > /var/backups/backup.sql"
# Écrire la tâche cron dans un fichier temporaire puis la déplacer vers /etc/cron.d/
echo "$CRON_JOB" > /tmp/mysqldump_schedule
mv /tmp/mysqldump_schedule /etc/cron.d/mysqldump_schedule
chmod 644 /etc/cron.d/mysqldump_schedule

echo "=> [3]: ssh configuration"
# Configure SSH
sudo sed -i 's/ChallengeResponseAuthentication no/ChallengeResponseAuthentication yes/g' /etc/ssh/sshd_config
sudo service ssh restart

echo "END - Install mysqldump"


