# Database Design

## Database Strategy

Use PostgreSQL as the primary relational database. The schema should support multi-tenancy, modular business operations, reporting, and future industry-specific customization.

## Design Principles

- Tenant isolation through `organization_id`.
- Strong foreign keys for core business relationships.
- UTC timestamps.
- Auditability for critical records.
- Soft deletion or archival for records with business history.
- Explicit status fields for workflow entities.
- Avoid storing core business data only in JSON.
- Use JSONB for controlled configuration and custom fields.

## Common Columns

Most tables should include:

- `id`
- `organization_id` where tenant-owned
- `created_at`
- `updated_at`
- `created_by_user_id` where useful
- `updated_by_user_id` where useful
- `archived_at` for soft archival where relevant

## Core Tables

### users

Represents a login identity.

Fields:

- `id`
- `email`
- `phone`
- `name`
- `avatar_url`
- `locale`
- `timezone`
- `status`
- `last_login_at`
- `created_at`
- `updated_at`

Notes:

- A user may belong to multiple organizations.
- Authentication provider-specific identifiers may be stored in a separate identity table if needed.

### organizations

Represents a business tenant.

Fields:

- `id`
- `name`
- `legal_name`
- `industry_key`
- `default_locale`
- `default_timezone`
- `default_currency`
- `tax_identifier`
- `status`
- `settings_json`
- `created_at`
- `updated_at`

### locations

Represents a branch, store, clinic, shop, or operating site.

Fields:

- `id`
- `organization_id`
- `name`
- `address_line_1`
- `address_line_2`
- `city`
- `region`
- `postal_code`
- `country`
- `phone`
- `email`
- `timezone`
- `working_hours_json`
- `status`
- `created_at`
- `updated_at`

### organization_memberships

Connects users to organizations.

Fields:

- `id`
- `organization_id`
- `user_id`
- `role_id`
- `status`
- `invited_by_user_id`
- `invited_at`
- `accepted_at`
- `created_at`
- `updated_at`

Unique constraints:

- `organization_id`, `user_id`

### roles

Defines organization-level roles.

Fields:

- `id`
- `organization_id`
- `key`
- `name`
- `description`
- `is_system_role`
- `created_at`
- `updated_at`

### permissions

Defines available permissions.

Fields:

- `id`
- `key`
- `module_key`
- `description`

### role_permissions

Connects roles to permissions.

Fields:

- `role_id`
- `permission_id`

### customers

Represents customers or clients.

Fields:

- `id`
- `organization_id`
- `location_id`
- `first_name`
- `last_name`
- `display_name`
- `email`
- `phone`
- `date_of_birth`
- `gender`
- `preferred_locale`
- `notes`
- `tags_json`
- `consent_json`
- `custom_fields_json`
- `status`
- `created_at`
- `updated_at`
- `archived_at`

### staff_profiles

Represents staff-specific profile data for a user or non-login staff member.

Fields:

- `id`
- `organization_id`
- `user_id`
- `display_name`
- `bio`
- `phone`
- `email`
- `status`
- `custom_fields_json`
- `created_at`
- `updated_at`

### staff_locations

Connects staff to locations.

Fields:

- `staff_profile_id`
- `location_id`

### staff_availability

Defines staff working availability.

Fields:

- `id`
- `organization_id`
- `staff_profile_id`
- `location_id`
- `day_of_week`
- `start_time`
- `end_time`
- `effective_from`
- `effective_to`
- `created_at`
- `updated_at`

### service_categories

Groups services.

Fields:

- `id`
- `organization_id`
- `name`
- `sort_order`
- `status`

### services

Represents bookable services.

Fields:

- `id`
- `organization_id`
- `category_id`
- `name`
- `description`
- `duration_minutes`
- `price_amount`
- `currency`
- `tax_rate_id`
- `requires_staff`
- `status`
- `created_at`
- `updated_at`

### staff_services

Connects staff to services they can perform.

Fields:

- `staff_profile_id`
- `service_id`

### product_categories

Groups products.

Fields:

- `id`
- `organization_id`
- `name`
- `sort_order`
- `status`

### products

Represents sellable products.

Fields:

- `id`
- `organization_id`
- `category_id`
- `name`
- `description`
- `sku`
- `barcode`
- `price_amount`
- `currency`
- `tax_rate_id`
- `tracks_inventory`
- `status`
- `created_at`
- `updated_at`

### inventory_items

Tracks stock by product and location.

Fields:

- `id`
- `organization_id`
- `location_id`
- `product_id`
- `quantity_on_hand`
- `low_stock_threshold`
- `updated_at`

Unique constraints:

- `location_id`, `product_id`

### inventory_movements

Records stock changes.

Fields:

- `id`
- `organization_id`
- `location_id`
- `product_id`
- `movement_type`
- `quantity_delta`
- `reason`
- `reference_type`
- `reference_id`
- `created_by_user_id`
- `created_at`

Movement types:

- Sale
- Return
- Adjustment
- Transfer In
- Transfer Out
- Purchase

### appointments

Represents scheduled service work.

Fields:

- `id`
- `organization_id`
- `location_id`
- `customer_id`
- `staff_profile_id`
- `status`
- `starts_at`
- `ends_at`
- `notes`
- `cancellation_reason`
- `created_by_user_id`
- `created_at`
- `updated_at`

Indexes:

- `organization_id`, `location_id`, `starts_at`
- `organization_id`, `staff_profile_id`, `starts_at`, `ends_at`
- `organization_id`, `customer_id`, `starts_at`

### appointment_services

Connects appointments to one or more services.

Fields:

- `id`
- `organization_id`
- `appointment_id`
- `service_id`
- `staff_profile_id`
- `price_amount`
- `duration_minutes`
- `sort_order`

### orders

Represents a sale transaction.

Fields:

- `id`
- `organization_id`
- `location_id`
- `customer_id`
- `appointment_id`
- `order_number`
- `status`
- `subtotal_amount`
- `discount_amount`
- `tax_amount`
- `total_amount`
- `currency`
- `payment_status`
- `created_by_user_id`
- `created_at`
- `updated_at`

### order_items

Represents line items in an order.

Fields:

- `id`
- `organization_id`
- `order_id`
- `item_type`
- `product_id`
- `service_id`
- `description`
- `quantity`
- `unit_price_amount`
- `discount_amount`
- `tax_amount`
- `total_amount`

Item types:

- Product
- Service
- Custom

### payments

Represents payment records.

Fields:

- `id`
- `organization_id`
- `order_id`
- `amount`
- `currency`
- `method`
- `status`
- `provider`
- `provider_reference`
- `paid_at`
- `created_by_user_id`
- `created_at`
- `updated_at`

### invoices

Represents invoice or receipt documents.

Fields:

- `id`
- `organization_id`
- `order_id`
- `invoice_number`
- `status`
- `issued_at`
- `due_at`
- `total_amount`
- `currency`
- `pdf_file_id`
- `created_at`
- `updated_at`

### tax_rates

Configures tax rates.

Fields:

- `id`
- `organization_id`
- `name`
- `rate`
- `country`
- `region`
- `status`
- `created_at`
- `updated_at`

### modules

Defines platform modules.

Fields:

- `id`
- `key`
- `name`
- `description`
- `status`

### organization_modules

Tracks enabled modules per organization.

Fields:

- `organization_id`
- `module_id`
- `enabled`
- `settings_json`
- `enabled_at`

### industry_templates

Defines industry starter templates.

Fields:

- `id`
- `industry_key`
- `name`
- `description`
- `template_json`
- `version`
- `status`
- `created_at`
- `updated_at`

### notifications

Represents in-app notifications.

Fields:

- `id`
- `organization_id`
- `user_id`
- `type`
- `title`
- `body`
- `status`
- `read_at`
- `metadata_json`
- `created_at`

### audit_logs

Tracks critical actions.

Fields:

- `id`
- `organization_id`
- `actor_user_id`
- `action`
- `entity_type`
- `entity_id`
- `before_json`
- `after_json`
- `ip_address`
- `user_agent`
- `created_at`

### files

Tracks uploaded or generated files.

Fields:

- `id`
- `organization_id`
- `uploaded_by_user_id`
- `storage_key`
- `file_name`
- `content_type`
- `size_bytes`
- `purpose`
- `created_at`

## Status Enum Recommendations

Use explicit status values and document transitions.

Examples:

- Organization: Active, Suspended, Cancelled
- Membership: Invited, Active, Disabled
- Customer: Active, Archived
- Service/Product: Active, Inactive, Archived
- Appointment: Draft, Scheduled, Confirmed, In Progress, Completed, Cancelled, No Show
- Order: Draft, Open, Completed, Cancelled, Refunded
- Payment: Pending, Paid, Partially Refunded, Refunded, Failed
- Invoice: Draft, Issued, Cancelled, Paid

## Indexing Strategy

Add indexes for:

- Tenant scoping: `organization_id`
- Location filtering: `organization_id`, `location_id`
- Calendar queries: `staff_profile_id`, `starts_at`, `ends_at`
- Customer lookup: phone, email, display name search
- Order reporting: `organization_id`, `location_id`, `created_at`
- Payment reporting: `organization_id`, `status`, `paid_at`
- Inventory lookup: `location_id`, `product_id`

## Reporting Strategy

Initial reports can query operational tables directly with proper indexes. As usage grows, introduce:

- Daily aggregate tables
- Materialized views
- Background aggregation jobs
- Analytics warehouse for long-term trends

## Custom Fields Strategy

Use `custom_fields_json` only with schemas defined by industry modules or organization settings.

Rules:

- Validate custom fields before saving.
- Keep frequently queried fields as normal columns.
- Version custom field schemas.
- Avoid using JSON as a substitute for proper relational modeling.

## Data Retention

Financial records, audit logs, and appointment history should not be hard-deleted through normal user flows. Use archival flags where business users need to hide old records.

## Backup And Recovery

Production database strategy should include:

- Automated backups
- Point-in-time recovery
- Backup restore testing
- Migration rollback planning
- Environment-specific backup retention policies

