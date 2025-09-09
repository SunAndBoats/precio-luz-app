Backend for precio-luz-app


Stack: Node.js, Express, Prisma (PostgreSQL), Redis (planned).

Set env vars in .env: DATABASE_URL (postgres url) and ESIOS_TOKEN

Run locally with Postgres:

1. cd backend
2. npm install
3. Set DATABASE_URL in .env (see .env.example)
4. npx prisma migrate dev --name init
5. npm run dev
