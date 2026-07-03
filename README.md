# Beyondelta

Marketing site for Beyondelta — Next.js, self-hosted via Docker + Caddy.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This app is not deployed to Vercel. It runs as a Docker container
(`Dockerfile` in this repo) alongside the rest of the stack in
`/home/n8nuser/n8n/docker-compose.yml`, fronted by Caddy for automatic
HTTPS. To ship a change on the server:

```bash
cd /home/n8nuser/n8n
docker compose build beyondelta
docker compose up -d --no-deps beyondelta
```
