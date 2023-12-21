#!/bin/bash

# Create a network, which allows containers to communicate
docker network create kangnamnetwork

# Build production
docker compose -f docker-compose.yml build

# Up dev
docker compose -f docker-compose.yml up -d

# Reload nginx
sudo systemctl reload nginx