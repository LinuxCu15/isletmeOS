# Coding Standards

## Purpose

These standards define how IsletmeOS should be built once implementation begins. They prioritize maintainability, correctness, readability, and safe evolution.

## General Principles

- Code should express business intent clearly.
- Prefer explicitness over cleverness.
- Keep modules small and cohesive.
- Avoid hidden cross-module coupling.
- Validate input at boundaries.
- Enforce authorization on the server.
- Treat tenant isolation as a core invariant.
- Write tests for behavior, not implementation details.

## Language Standards

### TypeScript

- Use strict TypeScript settings.
- Avoid `any` unless there is a documented reason.
- Prefer narrow types and discriminated unions for state.
- Use runtime validation for external input.
- Keep shared types in stable shared packages.
- Do not trust frontend types as backend validation.

### Naming

- Use clear business names.
- Avoid abbreviations unless widely understood.
- Name booleans as questions or states, such as `isActive`, `hasPermission`, or `canManageStaff`.
- Name functions by action and result.

## Module Standards

Each module should define:

- Public API surface
- Validation rules
- Permission rules
- Domain operations
- Data access
- Events
- Tests

Modules should avoid reaching into another module's internal database logic. Cross-module workflows should use domain services, application services, or events.

## Backend Standards

### API Handlers

API handlers should:

- Authenticate the request.
- Resolve organization and location context.
- Validate input.
- Authorize the action.
- Call application/domain service.
- Return normalized response shape.

API handlers should not contain complex business logic.

### Services

Services should:

- Enforce business rules.
- Coordinate transactions.
- Publish domain events.
- Return predictable results.

### Repositories

Repositories should:

- Encapsulate data access.
- Always apply tenant scoping.
- Avoid leaking ORM-specific details outside the data layer where practical.

### Transactions

Use transactions for:

- Multi-step writes
- Financial records
- Inventory changes
- Membership and invitation flows
- Appointment completion flows

### Error Handling

Errors should be typed or categorized:

- Validation error
- Authentication error
- Authorization error
- Not found error
- Conflict error
- Rate limit error
- External provider error
- Internal error

Never expose sensitive implementation details to users.

## Frontend Standards

### Component Design

- Build small, composable components.
- Keep feature-specific components inside feature folders.
- Promote only truly reusable components to shared UI packages.
- Separate form state from display components where it improves clarity.
- Avoid over-abstracting early.

### Forms

Forms should:

- Use schema validation.
- Show clear field-level errors.
- Preserve user input after validation errors.
- Disable unsafe duplicate submissions.
- Handle loading, success, and error states.

### Data Fetching

Data fetching should:

- Use typed API clients.
- Handle loading, empty, error, and success states.
- Use pagination for large collections.
- Avoid fetching data the user is not authorized to see.

### UI State

Use local state for local interactions. Use shared state only when multiple distant components need the same state.

## Database Standards

- Every tenant-owned table must include `organization_id`.
- Every location-specific table should include `location_id`.
- Use foreign keys for core relationships.
- Use indexes for common filters.
- Prefer soft deletion or archival for business records where history matters.
- Do not delete financial records in normal user flows.
- Store monetary values as integer minor units or fixed precision decimals.
- Store timestamps in UTC.

## Security Standards

- Never trust client input.
- Never rely on frontend-only authorization.
- Never log secrets, tokens, passwords, or full payment details.
- Enforce tenant scope in every query.
- Use rate limiting for sensitive endpoints.
- Use secure defaults for cookies, sessions, and CORS.
- Validate file uploads by size, type, and purpose.

## Testing Standards

### Unit Tests

Use for:

- Permission rules
- Pricing calculations
- Scheduling conflicts
- Inventory calculations
- Domain state transitions

### Integration Tests

Use for:

- API endpoints
- Database transactions
- Tenant isolation
- Authenticated workflows
- Background job behavior

### End-To-End Tests

Use for:

- Organization onboarding
- Staff invitation
- Customer creation
- Appointment scheduling
- Order and payment recording
- Inventory update

## Code Review Standards

Reviewers should check:

- Business correctness
- Tenant isolation
- Authorization
- Data consistency
- Error handling
- Test coverage
- Accessibility for UI changes
- Performance risks
- Unnecessary complexity

## Documentation Standards

Document:

- Public module contracts
- Non-obvious business rules
- Important architecture decisions
- Setup requirements
- Operational procedures

Avoid comments that simply repeat what code says.

## Migration Standards

- Migrations should be reviewed carefully.
- Migrations should be forward-only once deployed.
- Destructive migrations require backup and rollout plans.
- Large data migrations should be split from schema migrations when needed.

## Git Standards

- Use small, focused commits.
- Pull requests should explain user impact and technical approach.
- Include test evidence in pull request descriptions.
- Do not mix unrelated refactors with feature work.

