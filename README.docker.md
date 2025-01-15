# Docker Deployment Guide

This guide explains how to deploy the Next.js application using Docker.

## Prerequisites

- Docker installed
- Docker Compose (optional)
- Git (for pulling updates)

## Docker Setup

1. Build the Docker image:

```bash
docker build -t nextjs-app .
```

2. Run the container:

```bash
docker run -d \
  --name nextjs-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  nextjs-app
```

## Docker Compose Setup

Create a `docker-compose.yml` file:

```yaml
version: "3.8"
services:
  nextjs-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Start with Docker Compose:

```bash
docker-compose up -d
```

## Management Commands

```bash
# View logs
docker logs nextjs-app

# Stop container
docker stop nextjs-app

# Start container
docker start nextjs-app

# Remove container
docker rm nextjs-app

# List containers
docker ps -a

# Update container (after rebuilding)
docker-compose up -d --build
```

## Environment Variables

Create a `.env` file for environment variables:

```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_BASE_PATH=/lp/homepage
# Add other environment variables
```

Use with Docker:

```bash
docker run -d \
  --name nextjs-app \
  -p 3000:3000 \
  --env-file .env \
  nextjs-app
```

## Docker Run with Base Path

```bash
docker run -d \
  --name nextjs-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_BASE_PATH=/lp/homepage \
  nextjs-app
```

## Docker Compose with Base Path

```yaml
version: "3.8"
services:
  nextjs-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_BASE_PATH=/lp/homepage
    restart: unless-stopped
```

## Health Checks

Monitor container health:

```bash
docker inspect nextjs-app
docker stats nextjs-app
```

## Updating the Application

1. Pull latest changes:

```bash
git pull origin main
```

2. Rebuild and restart:

```bash
docker-compose build
docker-compose up -d
```

## Production Best Practices

1. Use specific image tags instead of `latest`
2. Implement health checks
3. Set up logging drivers
4. Use Docker secrets for sensitive data
5. Configure resource limits:

```bash
docker run -d \
  --name nextjs-app \
  -p 3000:3000 \
  --memory="1g" \
  --cpus="1.0" \
  nextjs-app
```
