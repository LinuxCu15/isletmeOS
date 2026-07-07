# Product Requirements Document

## Overview

IsletmeOS is a multi-tenant SaaS platform that helps businesses manage operations across appointments, customers, staff, services, products, inventory, payments, and reporting. The first version should establish a robust horizontal platform that can later be specialized through industry modules.

## Goals

- Provide a single operational dashboard for business owners and staff.
- Support core workflows shared across many service businesses.
- Allow industry-specific customization without separate codebases.
- Establish secure multi-tenant foundations.
- Build a scalable product architecture suitable for future web, mobile, and integration channels.

## Non-Goals For Initial Planning Phase

- No frontend implementation.
- No backend implementation.
- No dependency installation.
- No generated application scaffold.
- No payment provider integration implementation.
- No native mobile app implementation.

## User Personas

### Business Owner

Owns and manages one or more businesses. Needs visibility into daily operations, revenue, staff, customers, and business health.

Primary needs:

- Configure business profile and settings
- Manage staff access
- Monitor appointments, sales, and reports
- Track inventory and payments
- Understand performance

### Manager

Runs day-to-day operations for a location.

Primary needs:

- Manage schedule
- Assign staff
- Handle customer issues
- Monitor inventory
- Review daily sales

### Staff Member

Performs services, handles orders, or operates the front desk.

Primary needs:

- View assigned appointments/tasks
- Update appointment/order status
- Create or edit customers
- Record notes
- Process basic transactions if permitted

### Customer

Receives services or purchases products. In later versions, customers may use a self-service portal.

Primary needs:

- Book or request appointments
- Receive reminders
- View past visits, invoices, or memberships
- Update basic profile information

### Platform Administrator

Internal IsletmeOS operator responsible for platform-level support and configuration.

Primary needs:

- Manage tenants
- Investigate support issues safely
- Configure industry templates
- Monitor system health

## Core Functional Requirements

### Tenant And Organization Management

- Create an organization during onboarding.
- Support one or more locations per organization.
- Store legal, operational, and contact information.
- Allow organization-level settings:
  - Language
  - Timezone
  - Currency
  - Tax settings
  - Industry
  - Enabled modules
  - Working days and hours

### Authentication And Authorization

- Support secure account registration and login.
- Support role-based access control.
- Support organization membership.
- Allow users to belong to multiple organizations.
- Support invitation flow for staff.
- Support account recovery.
- Prepare for future MFA support.

Default roles:

- Owner
- Admin
- Manager
- Staff
- Accountant
- Read-only

Permissions should be granular and module-aware.

### Customer Management

- Create, read, update, archive customers.
- Store contact details, preferences, tags, notes, and consent flags.
- Track customer history:
  - Appointments
  - Orders
  - Invoices
  - Payments
  - Notes
  - Memberships or packages in later phases
- Support duplicate detection in later phases.

### Staff Management

- Manage staff profiles.
- Assign staff to locations.
- Configure staff availability.
- Assign services staff can perform.
- Track appointment assignments and performance.
- Support compensation logic later.

### Service Catalog

- Create and manage services.
- Store duration, price, category, tax behavior, and active status.
- Allow service variants later.
- Assign services to staff and locations.
- Support industry-specific service templates.

### Product Catalog

- Create and manage sellable products.
- Store SKU, barcode, category, price, tax behavior, stock tracking flag, and active status.
- Support product variants later.
- Connect products to inventory.

### Appointment Scheduling

- Create, reschedule, cancel, and complete appointments.
- Assign customer, service, staff member, location, date, time, and status.
- Prevent basic scheduling conflicts.
- Support appointment notes.
- Support multiple services per appointment in later phases.
- Support customer notifications in later phases.

Default statuses:

- Draft
- Scheduled
- Confirmed
- In Progress
- Completed
- Cancelled
- No Show

### Orders And Sales

- Create orders for products, services, or mixed baskets.
- Track line items, discounts, tax, subtotal, total, payment status, and fulfillment status.
- Convert completed appointments into sales records.
- Generate invoices or receipts.

### Payments

- Record payments manually in the initial version.
- Support payment methods:
  - Cash
  - Card
  - Bank transfer
  - Online
  - Other
- Track payment status:
  - Pending
  - Paid
  - Partially Paid
  - Refunded
  - Failed
- Prepare for payment gateway integrations.

### Inventory

- Track stock levels per location.
- Support stock adjustments with reasons.
- Connect product sales to stock reduction.
- Support low-stock alerts.
- Support purchase orders later.

### Reporting

Initial reports:

- Daily revenue
- Appointment count
- Order count
- Top services
- Top products
- Staff performance
- Customer growth
- Inventory low-stock list

Reports should support date filters and location filters.

### Notifications

Prepare a notification system for:

- Appointment reminders
- Staff invitations
- Low stock alerts
- Payment confirmations
- Owner summaries

Channels:

- In-app notifications
- Email
- SMS or messaging integrations later

### Industry Modules

Industry modules should provide:

- Default terminology
- Starter service/product templates
- Recommended modules
- Workflow settings
- UI shortcuts
- Report presets
- Domain-specific fields where necessary

Example module behavior:

- Barber: chairs, barbers, services, recurring clients
- Restaurant: tables, menus, orders, kitchen status
- Clinic: practitioners, patient notes, consent, treatment history
- Auto service: vehicles, service bays, repair orders
- Gym: memberships, attendance, trainers, classes

## Non-Functional Requirements

### Security

- Tenant data isolation is mandatory.
- Authorization must be enforced server-side.
- Sensitive data should be encrypted where appropriate.
- All write operations should be attributable to a user.
- Audit logs should be planned for critical actions.

### Performance

- Common dashboard pages should load quickly for small and medium businesses.
- APIs should be designed with pagination, filtering, and sorting.
- Reports should be optimized to avoid slow operational queries.

### Reliability

- Core operations should be transactional where data consistency matters.
- Payment and inventory updates must avoid partial writes.
- Background jobs should be retryable and idempotent.

### Scalability

- Architecture should support growth from single-location businesses to multi-location organizations.
- The database should support tenant-scoped indexing.
- The module system should support future extensions.

### Accessibility

- UI should meet WCAG 2.1 AA expectations where practical.
- Keyboard navigation and readable contrast are required.
- Forms should provide clear validation messages.

### Localization

- User-facing text should be externalized.
- Support timezone-aware scheduling.
- Support configurable currency and tax rules.
- Date, time, and number formatting should follow locale settings.

## MVP Scope

### Included

- Organization onboarding
- Authentication and staff invitations
- Role-based permissions
- Customer management
- Staff management
- Service catalog
- Product catalog
- Appointment scheduling
- Manual order and payment tracking
- Basic inventory
- Basic reporting dashboard
- Industry selection with starter templates

### Deferred

- Native mobile apps
- Online customer booking
- Payment gateway processing
- Advanced accounting
- Payroll
- Loyalty program
- Memberships
- Marketplace
- AI assistant
- Advanced workflow automation

## Acceptance Criteria

- A business owner can create an organization and configure location settings.
- A business owner can invite staff and assign roles.
- A staff member can log in and access only permitted areas.
- A user can create customers, services, products, appointments, orders, and payments.
- Appointment conflicts are detected for the same staff member and time range.
- Product sales can reduce inventory when stock tracking is enabled.
- Reports show accurate totals for the selected organization, location, and date range.
- Data from one organization is never visible to another organization.

