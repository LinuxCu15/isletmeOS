# Folder Structure

## Purpose

This document defines the intended project organization once implementation begins. No application code should exist yet. The structure below is a blueprint for a modular full-stack SaaS platform.

## Recommended Repository Shape

```text
isletmeOS/
  docs/
  apps/
    web/
    api/
    worker/
  packages/
    config/
    database/
    domain/
    ui/
    shared/
    test-utils/
  tooling/
  scripts/
  infra/
  .github/
```

## Directory Responsibilities

### `docs/`

Product, architecture, engineering, and operational documentation.

Expected files:

- Product vision
- PRD
- Architecture
- Database design
- API design
- UI guidelines
- Coding standards
- Roadmap

### `apps/web/`

Frontend application for owners, managers, staff, and later platform administrators.

Expected responsibilities:

- Routes and pages
- Layouts
- Authenticated navigation
- Forms and tables
- Calendar views
- Dashboard views
- API client usage

The web app should not contain backend business rules.

### `apps/api/`

Backend API application.

Expected responsibilities:

- HTTP API
- Authentication integration
- Authorization checks
- Domain orchestration
- Validation
- Transactions
- OpenAPI documentation

### `apps/worker/`

Background job processor.

Expected responsibilities:

- Notifications
- Scheduled reminders
- Imports and exports
- Integration retries
- Report aggregation

### `packages/config/`

Shared configuration for TypeScript, linting, formatting, testing, and build tools.

### `packages/database/`

Database schema, migrations, seed data, and database client setup.

Expected responsibilities:

- Schema definitions
- Migration files
- Seed scripts
- Database test helpers

### `packages/domain/`

Shared domain logic if the project uses a package-based modular monolith.

Expected responsibilities:

- Domain services
- Entity logic
- Value objects
- Permission rules
- Module contracts

If the backend framework naturally organizes modules inside `apps/api`, this package can be deferred.

### `packages/ui/`

Reusable UI components and design tokens.

Expected responsibilities:

- Button primitives
- Input components
- Modal components
- Table components
- Calendar components
- Form helpers
- Tokens and themes

### `packages/shared/`

Shared types and utilities that are safe across frontend and backend.

Allowed examples:

- API types
- Locale helpers
- Date formatting helpers
- Constants
- Lightweight validation schemas

Disallowed examples:

- Database clients
- Server-only secrets
- Backend business services
- Browser-only components

### `packages/test-utils/`

Reusable testing utilities.

Expected responsibilities:

- Test factories
- Mock providers
- API test clients
- Database cleanup helpers

### `tooling/`

Internal development tooling.

Examples:

- Code generation
- Local quality scripts
- Migration validation helpers

### `scripts/`

Operational scripts.

Examples:

- Seed local data
- Run migrations
- Export sample data
- Validate environment

Scripts should be safe, documented, and idempotent where possible.

### `infra/`

Infrastructure-as-code and deployment configuration.

Expected responsibilities:

- Environment definitions
- Database provisioning
- Storage provisioning
- Queue/cache provisioning
- Deployment manifests

### `.github/`

GitHub workflows and repository automation.

Expected responsibilities:

- CI pipelines
- Pull request templates
- Issue templates
- Release workflows

## Backend Module Structure

Recommended module shape:

```text
apps/api/src/modules/customers/
  customers.module.ts
  customers.controller.ts
  customers.service.ts
  customers.repository.ts
  customers.permissions.ts
  customers.validation.ts
  customers.events.ts
  customers.types.ts
  tests/
```

Each module should keep its API, validation, permissions, and domain behavior close together.

## Frontend Feature Structure

Recommended feature shape:

```text
apps/web/src/features/customers/
  components/
  hooks/
  pages/
  schemas/
  api.ts
  types.ts
```

Reusable primitives belong in `packages/ui`; feature-specific components stay in the feature folder.

## Naming Guidelines

- Use lowercase kebab-case for folders.
- Use descriptive file names.
- Keep module names aligned with product language.
- Avoid vague folders such as `misc`, `common`, or `helpers` unless tightly scoped.

## Import Boundaries

- Apps may import from packages.
- Packages should not import from apps.
- Shared packages must not depend on server-only or browser-only code unless clearly named for that runtime.
- Module-to-module access should go through public interfaces.

## Documentation Placement

Architecture decisions should be captured as ADRs later:

```text
docs/adr/
  0001-use-modular-monolith.md
  0002-use-postgresql.md
```

ADRs should be added when major technology or architecture decisions become final.

