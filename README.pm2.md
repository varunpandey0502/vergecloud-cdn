# PM2 Deployment Guide

This guide explains how to deploy the Next.js application using PM2 process manager.

## Prerequisites

- Node.js 18 or later
- PM2 installed globally (`npm install -g pm2`)
- Git (for pulling updates)

## Installation Steps

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Build the application:

```bash
npm run build
```

4. Create a PM2 ecosystem file (`ecosystem.config.js`) in your project root directory:

```bash
# Create the file
touch ecosystem.config.js
```

Add the following configuration to `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_PUBLIC_BASE_PATH: "/lp",
      },
    },
  ],
};
```

Your project structure should look like:

```
your-project/
├── .next/
├── node_modules/
├── app/
├── public/
├── package.json
├── next.config.mjs
└── ecosystem.config.js  <- Create here
```

5. Start the application with PM2:

```bash
pm2 start ecosystem.config.js
```

## Management Commands

```bash
# View logs
pm2 logs nextjs-app

# Monitor processes
pm2 monit

# List running applications
pm2 list

# Restart application
pm2 restart nextjs-app

# Stop application
pm2 stop nextjs-app

# Remove application from PM2
pm2 delete nextjs-app
```

## Updating the Application

1. Pull the latest changes:

```bash
git pull origin main
```

2. Install dependencies and rebuild:

```bash
npm install
npm run build
```

3. Restart the PM2 process:

```bash
pm2 restart nextjs-app
```

## Setting Up PM2 Startup Script

To ensure your application starts automatically after server reboot:

```bash
pm2 startup
pm2 save
```

## Monitoring

Access PM2's monitoring dashboard:

```bash
pm2 monit
```

View application status:

```bash
pm2 status
```
