#!/bin/bash

# Update the apt package index
sudo apt update

# Install Nginx
sudo apt install -y nginx

# Allow Nginx through the firewall
sudo ufw allow 'Nginx Full'

# Reload the firewall
sudo ufw reload

# Test Nginx configuration
sudo nginx -t

# If the test is successful, restart Nginx
sudo systemctl restart nginx

# Install Certbot and the Nginx plugin
sudo apt install -y certbot python3-certbot-nginx

# Create Nginx server block configuration for appjsc.com
sudo tee /etc/nginx/sites-available/appjsc <<EOF
server {
    listen 80;
    server_name appjsc.com www.appjsc.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    # Add other configurations as needed

    access_log /var/log/nginx/appjsc_access.log;
    error_log /var/log/nginx/appjsc_error.log;
}
EOF

# Create a symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/appjsc /etc/nginx/sites-enabled/

# Test Nginx configuration again
sudo nginx -t

# If the test is successful, restart Nginx
sudo systemctl restart nginx

# Prompt Certbot to obtain and install SSL/TLS certificate for the domain appjsc.com
sudo certbot --nginx -d appjsc.com -d www.appjsc.com

# Provide necessary information and follow the Certbot prompts

# Automatically renew SSL/TLS certificates
sudo systemctl enable certbot.timer

# Display a message indicating successful installation
echo "Nginx, Certbot, and Nginx configuration for appjsc.com have been successfully set up."
