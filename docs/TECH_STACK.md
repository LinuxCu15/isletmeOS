# Tech Stack

## Stack Philosophy

The technology stack should favor reliability, strong typing, maintainability, hiring availability, and fast product iteration. IsletmeOS should avoid exotic dependencies in the core path and choose tools that support a modular SaaS architecture.

## Recommended Primary Stack

### Frontend

- TypeScript
- React
- Next.js
- Tailwind CSS or a token-based CSS architecture
- A mature component primitive library such as Radix UI
- Form validation with a schema-driven approach
- Data fetching through a typed API client

### Backend

- TypeScript
- Node.js
- NestJS or a similarly structured backend framework
- REST API for first version
- OpenAPI documentation
- Background worker process
- Domain modules organized by business capability

### Database

- PostgreSQL
- Prisma or Drizzle ORM
- SQL migrations committed to version control
- Tenant-scoped indexes
- JSONB only for flexible configuration and custom fields, not core relational data

### Cache And Jobs

- Redis-compatible cache
- Queue system for background jobs

### File Storage

- S3-compatible object storage

### Authentication

Recommended options:

- Managed auth provider for speed and security
- Or first-party auth using proven libraries and secure session handling

The final decision should consider cost, localization, compliance, and long-term control.

### Testing

- Unit tests for domain logic
- Integration tests for API and database behavior
- End-to-end tests for critical workflows
- Accessibility checks for key UI screens

### Observability

- Structured logging
- Error tracking
- Metrics
- Tracing where useful
- Uptime monitoring

## Alternative Stack Option

If the team prefers a more integrated full-stack approach:

- Next.js application for frontend and backend routes
- PostgreSQL
- Prisma
- Background workers via separate Node process

This can be efficient for early MVP delivery, but module boundaries must still be explicit.

## Why TypeScript

TypeScript is recommended because:

- Shared type contracts reduce frontend/backend drift.
- Hiring is easier for modern full-stack teams.
- It supports both frontend and backend with one primary language.
- Runtime validation can pair with static typing for safer APIs.

## Why PostgreSQL

PostgreSQL is recommended because:

- Business data is relational.
- Transactions are critical.
- Reporting queries are common.
- Tenant-scoped indexing is mature.
- JSONB can support controlled flexibility.
- It scales well for the expected product shape.

## Why Modular Monolith First

The product needs rapid iteration and strong data consistency. A modular monolith avoids premature distributed complexity while preserving the option to extract services later.

## Package And Dependency Policy

Dependencies should be added only when they:

- Solve a meaningful product or engineering problem.
- Are actively maintained.
- Have clear licenses.
- Do not compromise security.
- Fit the architecture.

Avoid adding dependencies for small utilities that can be implemented simply and safely.

## Versioning Policy

- Runtime versions should be pinned.
- Dependencies should use lockfiles.
- API versions should be explicit.
- Database migrations should be immutable after deployment.
- Breaking API changes require new versions or migration plans.

## Environment Configuration

Configuration should come from environment variables and managed secrets.

Expected categories:

- Application URL
- Database URL
- Redis URL
- Auth secrets
- Storage credentials
- Email provider credentials
- SMS provider credentials
- Payment provider credentials
- Logging and error tracking DSNs

No secrets should be committed to version control.

## Recommended Tooling

- Formatter for consistent code style
- Linter for quality rules
- Type checker in CI
- Test runner in CI
- Migration runner
- OpenAPI generation or validation
- Seed data scripts for local development

## CI/CD Expectations

Continuous integration should run:

- Type checks
- Linting
- Unit tests
- Integration tests where practical
- Build verification
- Migration validation

Continuous deployment should support:

- Preview deployments
- Staging deployments
- Production deployments with rollback strategy

## Future Technical Capabilities

Future stack additions may include:

- Search engine for customers, products, and documents
- Analytics warehouse
- Feature flag service
- Workflow automation engine
- AI assistant integration
- Native mobile apps
- Public booking frontend

