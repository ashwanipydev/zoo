# Project Context: Zoo Booking System

## Overview
This is a full-stack zoo ticket booking application. Customers can browse landing content, select timed entry slots, choose ticket quantities, submit contact details, pay, and receive booking confirmations. Admins manage slots, pricing, and users. Staff gatekeepers validate entries using QR check-in.

## Technology Stack
- **Backend**: Spring Boot 3.x (Java 17) with Spring Security, JWT, PostgreSQL, Flyway
- **Frontend**: Angular 21 standalone components, Angular Router, HttpClient
- **Database**: PostgreSQL with comprehensive schema for users, bookings, slots, pricing
- **Payment**: Razorpay integration
- **Containerization**: Docker Compose for PostgreSQL
- **Additional**: QR code generation, PDF ticket/email notifications

## Key Components

### Backend Structure
- **Controllers**: REST API endpoints for auth, bookings, admin functions, staff check-in
- **Entities**: JPA entities mapping to booking, slot, user, pricing and payment tables
- **Repositories**: Spring Data repositories and custom queries
- **Services**: Business logic for booking lifecycle, pricing, payments, email notifications
- **Security**: JWT authentication with role-based access (ADMIN, STAFF, USER)
- **Configuration**: Database, security, email, payment, and migration settings

### Frontend Structure
- **Shell**: Angular app started from `frontend/src/main.ts`
- **Routing**: `frontend/src/app/app.routes.ts` defines public, booking, auth, and admin routes
- **Pages**: Standalone Angular pages under `frontend/src/app/pages/`
- **Features**: Booking flow pages are grouped under `frontend/src/app/pages/book/`
- **Services**: `frontend/src/app/services/ApiService.ts` and `AuthService.ts`
- **Styles**: Global styles in `frontend/src/styles.css`

### Booking Flow Pages
- `landing-page.ts`: public landing page hero and CTA
- `date-time-page.ts`: select visit date and time slot
- `ticket-selection-page.ts`: choose ticket counts and add-ons
- `user-details-page.ts`: enter customer contact and attendee details
- `payment-page.ts`: payment summary and confirmation action
- `confirmation-page.ts`: booking success message

## Database Schema Highlights
- **Users**: Multi-role system with authentication and role flags
- **Slots**: Time windows, capacity, availability, and occupancy tracking
- **Bookings**: Booking lifecycle from pending to confirmed to checked-in
- **Pricing**: Ticket types, add-ons, and dynamic pricing rules
- **Add-ons**: Extra services that can be added to a booking

## Recent Developments
- Migrated the frontend from React to Angular with a new standalone component architecture
- Implemented the public landing page and initial booking flow UI
- Verified Angular build success for booking pages and landing page
- Preserved backend API contracts and proxy setup for `/api`
- Added UI scaffolding for admin, auth, and staff flows in the Angular app

## Common Issues & Solutions
- **Angular build errors**: Check standalone component `imports` arrays and unused imports
- **Auth proxy issues**: Ensure the frontend dev server proxy forwards `/api` to backend
- **Booking flow state**: Keep selected slot and ticket data in route state or service
- **Migration errors**: Use Flyway history and clean schema if schema drift occurs

## Development Workflow
1. Update backend Java code and run `./mvnw spring-boot:run`
2. Update frontend Angular code in `frontend/src/` and run `npm run build`
3. Use `frontend/src/app/services/ApiService.ts` for backend calls through `/api`
4. Review `stitch_assets/` for UI design guidance

## Key Files to Understand
- `database_schema.md`: Database design and table relationships
- `TESTING_DOCUMENTATION_INDEX.md`: Testing and documentation references
- `session_summary.md`: Recent session notes and fixes
- `docker-compose.yml`: PostgreSQL service setup
- `backend/pom.xml`: Backend dependencies and build config
- `frontend/package.json`: Frontend dependencies and build scripts
- `stitch_assets/`: UI design assets used for landing and booking pages

## API Endpoints Overview
- **Auth**: `/api/auth/login`, `/api/auth/register`, `/api/auth/forgot-password`
- **Bookings**: `/api/bookings/initiate`, `/api/bookings/confirm`, `/api/bookings/{id}`
- **Slots**: `/api/slots/available`, `/api/slots/manage`
- **Admin**: `/api/admin/users`, `/api/admin/slots`, `/api/admin/pricing`
- **Staff**: `/api/staff/checkin`, `/api/staff/occupancy`

## Environment Setup
- Backend typically runs on port `8081`
- Frontend dev/build runs from `frontend/`; production output is `frontend/dist/zoo-frontend`
- Database runs on port `5432`
- Use `docker-compose.yml` for PostgreSQL during development

This context file helps new contributors understand the current Angular migration, booking flow state, and backend integration path.</content>
<parameter name="filePath">/workspaces/zoo/PROJECT_CONTEXT.md