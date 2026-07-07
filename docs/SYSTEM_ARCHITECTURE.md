# System Architecture

## Architectural Style

IsletmeOS should start as a modular monolith with clean internal boundaries and evolve toward service extraction only when operational scale or team structure requires it.

This approach gives the product:

- Faster early development
- Simpler deployment
- Stronger transactional consistency
- Easier refactoring
- Clear future extraction paths

The application should be organized by business capabilities rather than technical layers alone.

## High-Level Components

### Web Application

The primary user interface for owners, managers, and staff.

Responsibilities:

- Authenticated dashboards
- CRUD workflows
- Calendar and scheduling views
- Reporting views
- Settings and configuration
- Responsive layouts for desktop and tablet-first business use

### Backend Application

The core API and domain layer.

Responsibilities:

- Authentication and authorization
- Business rules
- Tenant isolation
- Module configuration
- Data validation
- Transactions
- API responses
- Background job dispatching

### Database

Primary source of truth for tenant, operational, financial, and configuration data.

Responsibilities:

- Relational consistency
- Tenant-scoped data storage
- Reporting-friendly indexing
- Audit-ready change tracking

### Background Worker

Executes asynchronous work.

Responsibilities:

- Email sending
- Notification processing
- Report precomputation
- Import/export jobs
- Integration retries
- Scheduled reminders

### File Storage

Stores uploaded files and generated documents.

Examples:

- Business logos
- Product images
- Customer attachments
- Invoice PDFs
- Import files

### Integration Layer

Connects IsletmeOS with external providers.

Future examples:

- Payment providers
- Email providers
- SMS or messaging services
- Accounting systems
- E-invoice systems
- Calendar providers

## Recommended Runtime Topology

Initial production topology:

- Web app hosted as a statically optimized frontend or server-rendered application.
- Backend API deployed as one application service.
- PostgreSQL database.
- Redis-compatible cache and queue backend.
- Worker process for background jobs.
- Object storage for files.
- Observability stack for logs, metrics, and errors.

## Domain Modules

Core modules:

- Identity and Access
- Organizations
- Locations
- Customers
- Staff
- Services
- Products
- Scheduling
- Orders
- Payments
- Inventory
- Reporting
- Notifications
- Industry Modules
- Audit Logs
- Platform Admin

Each module should own:

- Domain entities
- Business rules
- Validation rules
- API handlers or controllers
- Data access logic
- Events it publishes
- Events it consumes

## Module Boundary Rules

- Modules should not directly mutate another module's data without going through an explicit service or domain operation.
- Shared utility code should remain generic and business-agnostic.
- Cross-module workflows should use application services or domain events.
- Database transactions may span modules inside the modular monolith when consistency requires it.
- Module contracts should be documented and tested.

## Multi-Tenancy Model

Use shared-database multi-tenancy with strict tenant scoping.

Recommended tenant hierarchy:

- Organization: commercial tenant and billing owner.
- Location: operational branch within an organization.
- User: account identity that may belong to multiple organizations.
- Membership: connection between user and organization with role and permissions.

Every tenant-owned business record should include `organization_id`. Location-specific records should also include `location_id` where relevant.

Tenant isolation must be enforced in:

- API authorization
- Database queries
- Background jobs
- File storage paths
- Cache keys
- Audit logs
- Analytics queries

## Authorization Architecture

Use role-based access control with permission overrides prepared for future phases.

Authorization checks should answer:

- Who is the authenticated user?
- Which organization context are they acting in?
- Which location context applies?
- Which role and permissions do they have?
- Is the requested module enabled?
- Is the target resource inside the same organization?

Authorization must be centralized enough to avoid scattered ad hoc checks, but flexible enough for module-level rules.

## Industry Module Architecture

Industry modules should be configuration-driven first and code-extended only when necessary.

Module capabilities:

- Terminology overrides
- Default settings
- Starter templates
- Enabled modules
- Custom fields
- Workflow presets
- Report presets
- Navigation shortcuts

When industry behavior becomes too specialized, implement it behind explicit module interfaces rather than branching throughout the application.

Example interface concepts:

- `IndustryTemplateProvider`
- `WorkflowRuleProvider`
- `TerminologyProvider`
- `ReportPresetProvider`
- `CustomFieldSchemaProvider`

## Event Architecture

Use domain events inside the backend to decouple workflows.

Example events:

- `organization.created`
- `staff.invited`
- `customer.created`
- `appointment.scheduled`
- `appointment.completed`
- `order.created`
- `payment.recorded`
- `inventory.low_stock_detected`

Events should be:

- Named consistently
- Versionable
- Idempotent for consumers
- Persisted if needed for reliable background processing

## Data Consistency

Use database transactions for operations that must remain consistent:

- Creating an order and payment record
- Completing an appointment and creating a sale
- Reducing inventory after product sale
- Inviting a staff member and creating membership records

Use eventual consistency for:

- Notifications
- Analytics aggregation
- Search indexing
- External integration sync

## API Architecture

Use a versioned API contract.

Recommended base path:

`/api/v1`

API design should be resource-oriented, predictable, and tenant-context aware. All organization-scoped requests should include organization context either in the path, subdomain, or authenticated session context.

Recommended path style:

`/api/v1/organizations/{organizationId}/customers`

## Observability

The platform should include:

- Structured logs
- Request IDs
- User IDs and organization IDs in logs where safe
- Error tracking
- Performance tracing
- Background job monitoring
- Audit logs for critical business events

Sensitive values must never be logged.

## Security Architecture

Security requirements:

- Secure password handling through a trusted authentication provider or proven password hashing.
- Server-side authorization on every protected operation.
- CSRF protection if cookie-based sessions are used.
- Rate limiting on authentication and public endpoints.
- Input validation at API boundaries.
- Output encoding in the UI.
- Secure file upload validation.
- Principle of least privilege for infrastructure credentials.

## Deployment Environments

Recommended environments:

- Local development
- Preview
- Staging
- Production

Each environment should have isolated:

- Database
- File storage
- Secrets
- Background job queues
- External provider credentials

## Future Service Extraction Candidates

Potential services if scale demands:

- Notifications service
- Reporting and analytics service
- Billing service
- Integration service
- Search service
- Public booking service

Extraction should be based on measured bottlenecks, team ownership, or isolation needs, not early speculation.

