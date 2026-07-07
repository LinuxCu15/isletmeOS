# UI Guidelines

## Product Experience

IsletmeOS should feel like a professional daily operations tool: calm, fast, clear, and trustworthy. The interface should prioritize repeated business workflows over marketing-style presentation.

The product should not feel decorative or playful in core operational areas. It should feel modern, focused, and easy for non-technical business owners and staff.

## Design Principles

### Operational Clarity

Users should immediately understand:

- What business or location they are viewing
- What needs attention today
- What actions are available
- Whether data has been saved
- Whether a workflow is complete

### Fast Daily Use

Common actions should require minimal steps:

- Create appointment
- Add customer
- Take payment
- Update order status
- Adjust inventory
- View today's schedule

### Progressive Complexity

Show essential controls first. Advanced configuration should be available without overwhelming daily workflows.

### Consistency Across Industries

Industry modules may adjust terminology and defaults, but interaction patterns should remain consistent.

## Layout System

### Primary App Layout

Recommended structure:

- Left navigation for major modules
- Top bar for organization, location, search, notifications, and account controls
- Main content area for workflows
- Contextual side panels for details and quick edits where useful

### Navigation

Primary navigation should include:

- Dashboard
- Calendar or Schedule
- Customers
- Staff
- Services
- Products
- Orders
- Payments
- Inventory
- Reports
- Settings

Navigation should adapt based on enabled modules and permissions.

### Responsive Strategy

Desktop and tablet should be first-class because many businesses operate from counters, reception desks, and office computers.

Mobile should support:

- Viewing schedule
- Quick customer lookup
- Appointment status updates
- Basic order/payment actions
- Notifications

Complex setup workflows may be optimized for larger screens first.

## Visual Style

### Color

Use a restrained, professional palette with:

- Neutral backgrounds
- Strong readable text
- One primary brand color
- Semantic colors for success, warning, danger, and information
- High contrast for important actions

Avoid interfaces dominated by one decorative hue. Use color to communicate meaning and hierarchy.

### Typography

- Use clear, highly readable fonts.
- Use consistent type scale.
- Avoid oversized headings inside dense operational screens.
- Keep labels concise.
- Use tabular numbers for financial and reporting data where possible.

### Spacing

- Use consistent spacing tokens.
- Dense data screens should remain readable without excessive whitespace.
- Forms should group related fields clearly.
- Tables should support scanning.

### Icons

Use icons to support recognition, especially for common actions:

- Add
- Edit
- Delete/archive
- Search
- Filter
- Calendar
- Payment
- Inventory
- Settings

Icons should not replace labels for unfamiliar business actions unless supported by tooltips.

## Core Screens

### Dashboard

Purpose:

- Show today's operational state and key metrics.

Expected content:

- Today's appointments or orders
- Revenue summary
- Staff activity
- Low-stock warnings
- Pending payments
- Quick actions

### Calendar / Schedule

Purpose:

- Manage service appointments and staff time.

Expected features:

- Day, week, and staff views
- Location filter
- Staff filter
- Appointment status indicators
- Drag or reschedule support in later phases
- Conflict warnings
- Quick appointment creation

### Customers

Purpose:

- Manage customer records and history.

Expected features:

- Search
- Filters and tags
- Customer detail page
- Timeline of appointments, orders, payments, and notes
- Quick contact actions

### Services

Purpose:

- Manage bookable offerings.

Expected features:

- Categories
- Duration
- Price
- Assigned staff
- Active/inactive state

### Products And Inventory

Purpose:

- Manage sellable products and stock.

Expected features:

- Product list
- Stock by location
- Low-stock indicators
- Manual stock adjustment
- Movement history

### Orders And Payments

Purpose:

- Record sales and payment activity.

Expected features:

- Order list
- Order detail
- Line items
- Payment status
- Manual payment recording
- Receipt or invoice generation later

### Reports

Purpose:

- Help owners understand performance.

Expected features:

- Date range filters
- Location filters
- Revenue metrics
- Appointment metrics
- Staff performance
- Product/service rankings
- Export later

### Settings

Purpose:

- Configure organization, locations, modules, permissions, and industry behavior.

Expected sections:

- Business profile
- Locations
- Staff and roles
- Modules
- Industry template
- Taxes
- Notifications
- Billing later

## Form Guidelines

Forms should:

- Use clear labels.
- Mark required fields.
- Show validation close to the field.
- Use sensible defaults.
- Preserve entered values on errors.
- Confirm destructive actions.
- Avoid long, intimidating setup forms.

Use multi-step flows for complex setup:

- Business profile
- Location
- Services/products
- Staff
- First appointment/order

## Table Guidelines

Tables should:

- Support search where relevant.
- Support filtering and sorting.
- Include status badges.
- Keep important columns visible.
- Provide row-level actions.
- Handle empty states helpfully.
- Use pagination for long lists.

## Status And Feedback

Every significant action should provide feedback:

- Saving
- Saved
- Failed
- Conflict
- Permission denied
- Empty state
- Loading state

Conflict messages should explain what happened and what the user can do next.

## Accessibility

Requirements:

- Keyboard navigability
- Visible focus states
- Sufficient color contrast
- Labels associated with inputs
- Error messages readable by assistive technologies
- No color-only status communication

## Localization

UI text should be prepared for translation.

Design must account for:

- Longer translated strings
- Different date formats
- Different currency formats
- Right-to-left support in future if needed

## Industry Customization

Industry modules may customize:

- Labels
- Dashboard widgets
- Default navigation shortcuts
- Entity templates
- Custom fields
- Workflow steps

Examples:

- Barber: "Barbers", "Chairs", "Services"
- Clinic: "Patients", "Practitioners", "Treatments"
- Restaurant: "Tables", "Menu", "Kitchen"
- Auto service: "Vehicles", "Service Bays", "Repair Orders"

The UI architecture should support these changes without forking screens per industry unless the workflow is genuinely different.

