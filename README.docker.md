# Docker Deployment Guide (Static Export)

This guide explains how to deploy the Next.js application as static files using Docker and Nginx.

## Prerequisites

- Docker installed
- Docker Compose
- Git (for pulling updates)

## Local Testing with Docker Compose

1. Start the application:

```bash
docker-compose up -d
```

2. Access the application:

- Open your browser and navigate to `http://localhost:8080`

3. View logs:

```bash
docker-compose logs -f
```

4. Rebuild after changes:

```bash
docker-compose up -d --build
```

## Management Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Check status
docker-compose ps
```

## Testing Steps

1. Build and start:

```bash
docker-compose up -d
```

2. Verify the following:

- Homepage loads at http://localhost:8080
- Static assets (images, CSS, JS) load correctly
- Client-side navigation works
- No 404 errors in browser console

3. Check logs:

```bash
docker-compose logs -f
```

## Production Deployment

For production, consider:

1. Using specific image tags
2. Implementing SSL/TLS
3. Setting up proper logging
4. Configuring resource limits
5. Using Docker secrets for sensitive data

Example production docker-compose:

```yaml
version: "3.8"
services:
  nextjs-static:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
      - "443:443"
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:80/"]
      interval: 30s
      timeout: 10s
      retries: 3
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "1"
          memory: 1G
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

## Troubleshooting

1. Check container status:

```bash
docker-compose ps
```

2. View logs:

```bash
docker-compose logs -f
```

3. Inspect nginx configuration:

```bash
docker-compose exec nextjs-static cat /etc/nginx/conf.d/default.conf
```

4. Check static files:

```bash
docker-compose exec nextjs-static ls -la /usr/share/nginx/html
```
