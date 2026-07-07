# Development Roadmap

## Roadmap Philosophy

IsletmeOS should be built in deliberate phases. The first goal is a stable, secure, and useful core platform. Industry-specific depth should be added after the shared foundation is reliable.

## Phase 0: Planning And Foundation

Objective:

Define the product, architecture, standards, and implementation plan before writing application code.

Deliverables:

- Product vision
- PRD
- System architecture
- Tech stack decision
- Folder structure
- Coding standards
- Database design
- API design
- UI guidelines
- Development roadmap

Exit criteria:

- Founder approval of scope and direction
- Technical stack confirmed
- MVP boundaries confirmed
- First target industry or pilot segment selected

## Phase 1: Project Setup

Objective:

Create the technical foundation for development.

Deliverables:

- Repository structure
- Web app scaffold
- API app scaffold
- Worker scaffold
- Shared packages
- TypeScript configuration
- Formatter and linter
- Testing setup
- Database migration setup
- Environment configuration pattern
- CI pipeline

Exit criteria:

- Local development runs successfully.
- CI validates basic quality checks.
- Empty app deploys to a preview environment.

## Phase 2: Identity, Tenancy, And Access

Objective:

Implement secure multi-tenant access control.

Deliverables:

- User accounts
- Organization creation
- Organization switching
- Location management
- Staff invitations
- Role-based permissions
- Tenant-scoped authorization
- Basic audit logging

Exit criteria:

- A user can create an organization.
- A user can invite staff.
- Staff can access only permitted organization data.
- Tenant isolation is covered by tests.

## Phase 3: Core Business Records

Objective:

Build foundational operational records.

Deliverables:

- Customer management
- Staff profiles
- Staff-location assignments
- Service categories
- Services
- Product categories
- Products
- Tax rate configuration

Exit criteria:

- Users can configure the basic data needed to operate a service business.
- CRUD flows are tested.
- Permission rules are enforced.

## Phase 4: Scheduling MVP

Objective:

Enable appointment-based businesses to manage daily schedules.

Deliverables:

- Appointment creation
- Appointment rescheduling
- Appointment cancellation
- Appointment completion
- Staff availability
- Conflict detection
- Calendar views
- Customer appointment history

Exit criteria:

- A business can manage appointments for staff and customers.
- Scheduling conflicts are prevented.
- Appointment lifecycle is tested.

## Phase 5: Orders, Payments, And Inventory MVP

Objective:

Support basic sales and stock tracking.

Deliverables:

- Orders
- Order line items
- Manual payments
- Payment status tracking
- Inventory by location
- Inventory movements
- Low-stock alerts
- Appointment-to-order conversion

Exit criteria:

- A business can record a sale.
- Payments can be tracked manually.
- Product sales reduce stock correctly.
- Financial and inventory writes are transactional.

## Phase 6: Reporting MVP

Objective:

Give owners useful visibility into business performance.

Deliverables:

- Dashboard summary
- Revenue reports
- Appointment reports
- Staff performance reports
- Product and service ranking reports
- Inventory reports
- Date and location filters

Exit criteria:

- Owners can understand daily and historical performance.
- Reports match source data in tests.
- Report queries perform acceptably on seeded medium-size data.

## Phase 7: Industry Templates

Objective:

Introduce configurable industry specialization without duplicating product code.

Deliverables:

- Industry template model
- Template application flow
- Terminology configuration
- Starter services/products
- Recommended module defaults
- Initial templates:
  - Barber
  - Beauty salon
  - Clinic
  - Restaurant or cafe
  - Auto service
  - Gym

Exit criteria:

- A new organization can select an industry.
- Starter configuration is applied.
- Core screens adapt labels and defaults.

## Phase 8: Notifications And Communication

Objective:

Improve operational follow-up and customer communication.

Deliverables:

- In-app notifications
- Email notifications
- Staff invitation emails
- Appointment reminders
- Low-stock alerts
- Notification preferences

Exit criteria:

- Notifications are reliable and retryable.
- Users can manage notification preferences.
- Background jobs are observable.

## Phase 9: Customer Self-Service

Objective:

Allow customers to interact with businesses directly.

Deliverables:

- Public booking page
- Customer appointment request
- Appointment confirmation flow
- Customer profile access
- Basic customer notifications

Exit criteria:

- A customer can request or book an appointment online.
- Public flows are secure and rate-limited.
- Business users can manage incoming bookings.

## Phase 10: Payments And Integrations

Objective:

Connect the platform to external providers.

Deliverables:

- Payment gateway integration
- Webhook processing
- Refund handling
- Email/SMS provider integration
- Calendar integration later
- Accounting or e-invoice integration later

Exit criteria:

- Online payments can be processed safely.
- Webhooks are idempotent.
- Provider failures are handled clearly.

## Phase 11: Advanced Modules

Objective:

Expand value for specific industries and mature businesses.

Potential modules:

- Memberships
- Packages
- Loyalty
- Gift cards
- Purchase orders
- Supplier management
- Advanced staff commission
- Table management
- Kitchen display
- Patient/treatment records
- Vehicle records
- Class scheduling

Exit criteria:

- Advanced modules follow established module architecture.
- Industry-specific data does not weaken core system integrity.

## Phase 12: Platform Scale And Intelligence

Objective:

Prepare IsletmeOS as a larger platform.

Deliverables:

- Advanced analytics
- Feature flags
- Marketplace-ready module system
- AI assistant for summaries and recommendations
- Workflow automation
- Data import tools
- Data export tools
- Enterprise controls for larger organizations

Exit criteria:

- Platform can support broader customization.
- Owners receive proactive operational insights.
- Internal team can safely manage growth.

## Suggested MVP Release Definition

The first commercially useful release should include phases 1 through 6, plus a lightweight version of phase 7 for one or two target industries.

Recommended first pilot industries:

- Barber shops
- Beauty salons

Reason:

- Appointment-heavy workflows
- Clear staff/service/customer model
- Manageable inventory needs
- Strong need for reminders and customer history
- Good fit for modular foundation

## Key Risks

### Scope Creep

Risk:

Trying to support every industry deeply from day one.

Mitigation:

Start with shared primitives and shallow industry templates.

### Weak Tenant Isolation

Risk:

Data leakage between organizations.

Mitigation:

Design tenant scoping into every table, query, API, and test.

### Over-Complex Module System

Risk:

Building a plugin platform before product-market fit.

Mitigation:

Start with configuration-driven modules and explicit internal extension points.

### Reporting Performance

Risk:

Operational tables become slow for analytics.

Mitigation:

Index early, measure queries, and introduce aggregates when needed.

### Industry Terminology Drift

Risk:

Screens become confusing as labels change per industry.

Mitigation:

Centralize terminology and keep workflows consistent.

## Immediate Next Decisions

Before code begins, decide:

- First target industry for MVP pilot
- Exact technology stack
- Authentication approach
- Hosting preference
- Payment provider priority
- Whether the first product should be Turkish-first, English-first, or bilingual from launch

