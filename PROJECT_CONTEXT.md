# Project Context: Zoo Booking System

## Overview
This is a full-stack web application for a zoo ticket booking system. It allows customers to book timed entry slots, make payments, and receive digital tickets. Administrators can manage slots, pricing, and users, while staff (gatekeepers) can validate entries using QR codes.

## Technology Stack
- **Backend**: Spring Boot 3.x (Java 17) with Spring Security, JWT, PostgreSQL, Flyway
- **Frontend**: React 19 with Tailwind CSS, Axios, React Router
- **Database**: PostgreSQL with comprehensive schema for users, bookings, slots, pricing
- **Payment**: Razorpay integration
- **Containerization**: Docker Compose for database
- **Additional**: QR code generation, PDF tickets, email notifications

## Key Components

### Backend Structure
- **Controllers**: REST API endpoints for auth, bookings, admin functions
- **Entities**: JPA entities mapping to database tables
- **Repositories**: Data access layer with custom queries
- **Services**: Business logic including pricing engine, booking flow
- **Security**: JWT authentication with role-based access (ADMIN, STAFF, USER)
- **Configuration**: Database, security, email, payment configs

### Frontend Structure
- **Features**: Modular organization by domain (auth, booking, admin, staff)
- **Core**: Shared utilities, API client, authentication context
- **Shared**: Reusable components and routing logic
- **Pages**: Individual page components for each feature

### Database Schema Highlights
- **Users**: Multi-role system with authentication
- **Slots**: Time-based booking windows with capacity tracking
- **Bookings**: Complete booking lifecycle from pending to checked-in
- **Pricing**: Dynamic pricing with surge system and manual overrides
- **Add-ons**: Additional services that can be booked

## Recent Developments
- Fixed Flyway migration issues and database schema inconsistencies
- Implemented dynamic pricing with occupancy-based surge (+50% when >80% full)
- Added QR code scanning for gatekeeper check-in
- Resolved RBAC issues for staff/admin access
- Integrated Razorpay payment processing
- Created comprehensive testing suite and documentation

## Common Issues & Solutions
- **403 Forbidden**: Check user roles and Spring Security configuration
- **Booking not finalizing**: Two-step process - initiate then confirm payment
- **Migration errors**: Ensure Flyway schema history is clean
- **Payment failures**: Verify Razorpay credentials and webhook setup

## Development Workflow
1. Database changes: Update Flyway migrations in `backend/src/main/resources/db/migration/`
2. Backend changes: Modify Java code, run `./mvnw spring-boot:run`
3. Frontend changes: Modify React code, run `npm start`
4. Testing: Use provided scripts in root directory

## Key Files to Understand
- `database_schema.md`: Complete database documentation
- `TESTING_DOCUMENTATION_INDEX.md`: Testing guides and API documentation
- `session_summary.md`: Summary of recent changes and fixes
- `docker-compose.yml`: Database setup
- `backend/pom.xml`: Backend dependencies
- `frontend/package.json`: Frontend dependencies

## API Endpoints Overview
- **Auth**: `/api/auth/login`, `/api/auth/register`, `/api/auth/forgot-password`
- **Bookings**: `/api/bookings/initiate`, `/api/bookings/confirm`, `/api/bookings/{id}`
- **Slots**: `/api/slots/available`, `/api/slots/manage`
- **Admin**: `/api/admin/users`, `/api/admin/slots`, `/api/admin/pricing`
- **Staff**: `/api/staff/checkin`, `/api/staff/occupancy`

## Environment Setup
- Backend runs on port 8081
- Frontend runs on port 3000 (proxies to backend)
- Database on port 5432
- Use provided Docker Compose for PostgreSQL

This context should help developers quickly understand the codebase structure, recent changes, and how to work with the system effectively.</content>
<parameter name="filePath">/workspaces/zoo/PROJECT_CONTEXT.md