#!/bin/bash

# Update the apt package index
sudo apt update

# Install required packages to allow apt to use a repository over HTTPS
sudo apt install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable Docker repository
echo "deb [signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update the apt package index again
sudo apt update

# Install the latest version of Docker and Docker Compose
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose

# Add your user to the "docker" group to run Docker commands without sudo
sudo usermod -aG docker $USER

# Enable Docker to start on boot
sudo systemctl enable docker

# Start the Docker service
sudo systemctl start docker

# Display Docker version information
docker --version
docker-compose --version

# Display a message indicating successful installation
echo "Docker and Docker Compose have been successfully installed on your system."
echo "You may need to log out and log back in, or restart your system, to use Docker without sudo."

# Check if Docker is running
docker info
