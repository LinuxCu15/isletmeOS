# API Design

## API Philosophy

The IsletmeOS API should be predictable, secure, tenant-aware, and easy for frontend and future mobile clients to consume. The first API should be REST-based and documented with OpenAPI.

## Base URL

Recommended versioned base path:

```text
/api/v1
```

## Tenant Context

Organization context should be explicit in organization-scoped routes:

```text
/api/v1/organizations/{organizationId}/customers
```

This keeps authorization and tenant scoping visible. The API must still verify that the authenticated user belongs to the organization.

## Response Format

Standard success response:

```json
{
  "data": {},
  "meta": {}
}
```

Collection response:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "pageSize": 25,
    "total": 120
  }
}
```

Error response:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the highlighted fields.",
    "details": []
  }
}
```

## HTTP Status Codes

- `200 OK`: Successful read or update
- `201 Created`: Successful creation
- `204 No Content`: Successful deletion or archive action without body
- `400 Bad Request`: Invalid request
- `401 Unauthorized`: Missing or invalid authentication
- `403 Forbidden`: Authenticated but not allowed
- `404 Not Found`: Resource not found or not visible to user
- `409 Conflict`: Business conflict, such as scheduling overlap
- `422 Unprocessable Entity`: Validation failed
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Unexpected server error

## Pagination

Use page-based pagination for standard admin screens:

```text
?page=1&pageSize=25
```

Use cursor pagination later for high-volume feeds.

## Filtering And Sorting

Recommended query format:

```text
?locationId=loc_123&status=active&sort=createdAt:desc
```

Filtering should be allowlisted per endpoint.

## Authentication Endpoints

Actual endpoints may depend on the chosen auth provider.

Expected capabilities:

- Register
- Login
- Logout
- Refresh session
- Request password reset
- Accept invitation
- Switch active organization

## Organization Endpoints

```text
GET    /api/v1/organizations
POST   /api/v1/organizations
GET    /api/v1/organizations/{organizationId}
PATCH  /api/v1/organizations/{organizationId}
GET    /api/v1/organizations/{organizationId}/settings
PATCH  /api/v1/organizations/{organizationId}/settings
```

## Location Endpoints

```text
GET    /api/v1/organizations/{organizationId}/locations
POST   /api/v1/organizations/{organizationId}/locations
GET    /api/v1/organizations/{organizationId}/locations/{locationId}
PATCH  /api/v1/organizations/{organizationId}/locations/{locationId}
POST   /api/v1/organizations/{organizationId}/locations/{locationId}/archive
```

## Membership And Staff Access Endpoints

```text
GET    /api/v1/organizations/{organizationId}/memberships
POST   /api/v1/organizations/{organizationId}/invitations
POST   /api/v1/invitations/{token}/accept
PATCH  /api/v1/organizations/{organizationId}/memberships/{membershipId}
POST   /api/v1/organizations/{organizationId}/memberships/{membershipId}/disable
```

## Customer Endpoints

```text
GET    /api/v1/organizations/{organizationId}/customers
POST   /api/v1/organizations/{organizationId}/customers
GET    /api/v1/organizations/{organizationId}/customers/{customerId}
PATCH  /api/v1/organizations/{organizationId}/customers/{customerId}
POST   /api/v1/organizations/{organizationId}/customers/{customerId}/archive
GET    /api/v1/organizations/{organizationId}/customers/{customerId}/timeline
```

## Staff Endpoints

```text
GET    /api/v1/organizations/{organizationId}/staff
POST   /api/v1/organizations/{organizationId}/staff
GET    /api/v1/organizations/{organizationId}/staff/{staffId}
PATCH  /api/v1/organizations/{organizationId}/staff/{staffId}
GET    /api/v1/organizations/{organizationId}/staff/{staffId}/availability
PUT    /api/v1/organizations/{organizationId}/staff/{staffId}/availability
PUT    /api/v1/organizations/{organizationId}/staff/{staffId}/services
```

## Service Catalog Endpoints

```text
GET    /api/v1/organizations/{organizationId}/service-categories
POST   /api/v1/organizations/{organizationId}/service-categories
GET    /api/v1/organizations/{organizationId}/services
POST   /api/v1/organizations/{organizationId}/services
GET    /api/v1/organizations/{organizationId}/services/{serviceId}
PATCH  /api/v1/organizations/{organizationId}/services/{serviceId}
POST   /api/v1/organizations/{organizationId}/services/{serviceId}/archive
```

## Product Catalog Endpoints

```text
GET    /api/v1/organizations/{organizationId}/product-categories
POST   /api/v1/organizations/{organizationId}/product-categories
GET    /api/v1/organizations/{organizationId}/products
POST   /api/v1/organizations/{organizationId}/products
GET    /api/v1/organizations/{organizationId}/products/{productId}
PATCH  /api/v1/organizations/{organizationId}/products/{productId}
POST   /api/v1/organizations/{organizationId}/products/{productId}/archive
```

## Appointment Endpoints

```text
GET    /api/v1/organizations/{organizationId}/appointments
POST   /api/v1/organizations/{organizationId}/appointments
GET    /api/v1/organizations/{organizationId}/appointments/{appointmentId}
PATCH  /api/v1/organizations/{organizationId}/appointments/{appointmentId}
POST   /api/v1/organizations/{organizationId}/appointments/{appointmentId}/confirm
POST   /api/v1/organizations/{organizationId}/appointments/{appointmentId}/start
POST   /api/v1/organizations/{organizationId}/appointments/{appointmentId}/complete
POST   /api/v1/organizations/{organizationId}/appointments/{appointmentId}/cancel
POST   /api/v1/organizations/{organizationId}/appointments/{appointmentId}/mark-no-show
```

Required conflict behavior:

- Creating or rescheduling an appointment must check staff availability and overlapping appointments.
- Conflicts should return `409 Conflict`.

## Order Endpoints

```text
GET    /api/v1/organizations/{organizationId}/orders
POST   /api/v1/organizations/{organizationId}/orders
GET    /api/v1/organizations/{organizationId}/orders/{orderId}
PATCH  /api/v1/organizations/{organizationId}/orders/{orderId}
POST   /api/v1/organizations/{organizationId}/orders/{orderId}/complete
POST   /api/v1/organizations/{organizationId}/orders/{orderId}/cancel
```

## Payment Endpoints

```text
GET    /api/v1/organizations/{organizationId}/payments
POST   /api/v1/organizations/{organizationId}/orders/{orderId}/payments
GET    /api/v1/organizations/{organizationId}/payments/{paymentId}
POST   /api/v1/organizations/{organizationId}/payments/{paymentId}/refund
```

Manual payments should be supported first. Provider payments can be added later through integration-specific endpoints or webhooks.

## Inventory Endpoints

```text
GET    /api/v1/organizations/{organizationId}/inventory
GET    /api/v1/organizations/{organizationId}/inventory/movements
POST   /api/v1/organizations/{organizationId}/inventory/adjustments
GET    /api/v1/organizations/{organizationId}/inventory/low-stock
```

## Reporting Endpoints

```text
GET    /api/v1/organizations/{organizationId}/reports/summary
GET    /api/v1/organizations/{organizationId}/reports/revenue
GET    /api/v1/organizations/{organizationId}/reports/appointments
GET    /api/v1/organizations/{organizationId}/reports/staff-performance
GET    /api/v1/organizations/{organizationId}/reports/products
GET    /api/v1/organizations/{organizationId}/reports/inventory
```

Common filters:

- `locationId`
- `from`
- `to`
- `staffId`
- `groupBy`

## Module Endpoints

```text
GET    /api/v1/modules
GET    /api/v1/organizations/{organizationId}/modules
PATCH  /api/v1/organizations/{organizationId}/modules/{moduleKey}
GET    /api/v1/industry-templates
POST   /api/v1/organizations/{organizationId}/apply-industry-template
```

## Validation Standards

All request bodies should be validated using runtime schemas.

Validation should cover:

- Required fields
- String lengths
- Enum values
- Date ranges
- Numeric ranges
- Relationship existence
- Tenant ownership of referenced IDs

## Idempotency

Use idempotency keys for operations that may be retried:

- Payment creation
- Appointment creation from public booking
- Order completion
- External webhooks

Recommended header:

```text
Idempotency-Key: unique-client-generated-key
```

## Webhooks

Future webhook support should include:

- Provider signature verification
- Idempotent processing
- Event logging
- Retry handling
- Dead-letter queue for failures

## API Documentation

Maintain OpenAPI documentation for:

- Endpoint paths
- Request schemas
- Response schemas
- Error responses
- Auth requirements
- Permission requirements

Documentation should be generated or validated in CI.

