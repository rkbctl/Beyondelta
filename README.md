# Beyondelta

This repo has two parts:
- `bd_website/` — the marketing site (Next.js), self-hosted via Docker + Caddy.
- `n8n-workflows/` — n8n workflow exports and the REST API wrapper.

## Development

```bash
cd bd_website
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
