# IsletmeOS

IsletmeOS is a modular SaaS foundation for business management across industries such as barbers, beauty salons, restaurants, clinics, auto services, gyms, and other service-oriented businesses.

This repository currently contains the planning documents and production-grade monorepo foundation only. Product features, authentication, business logic, database models, and application routes are intentionally not implemented yet.

## Monorepo Stack

- pnpm workspaces
- Turborepo
- TypeScript
- Next.js 15 App Router
- Fastify
- Prisma
- PostgreSQL
- TailwindCSS
- shadcn/ui configuration
- Docker Compose
- GitHub Actions

## Workspace Layout

```text
apps/
  web/      Next.js application shell
  api/      Fastify application shell
packages/
  config/   Shared TypeScript configuration package
  database/ Prisma package, currently without business models
  shared/   Shared TypeScript utilities and contracts
  ui/       Shared UI package prepared for shadcn/ui components
docs/       Product and architecture documentation
infra/      Local infrastructure configuration
scripts/    Future operational scripts
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Copy environment variables:

```bash
cp .env.example .env
```

Start local PostgreSQL:

```bash
docker compose -f infra/docker-compose.yml up -d
```

Generate Prisma client:

```bash
pnpm db:generate
```

Run development tasks:

```bash
pnpm dev
```

## Quality Commands

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

## Current Boundary

The repository is ready for development setup. The next phase should begin only after approval and should focus on project setup validation before implementing any product features.

