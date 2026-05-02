# Zoo Booking System

A comprehensive web application for managing zoo ticket bookings, built with a modern full-stack architecture. This system enables customers to book tickets online, while providing administrators and staff with powerful management tools.

## 🏗️ Architecture

### Backend
- **Framework**: Spring Boot 3.x (Java 17)
- **Database**: PostgreSQL with Flyway migrations
- **Authentication**: JWT-based with role-based access control (RBAC)
- **Payment**: Razorpay integration
- **Documentation**: OpenAPI/Swagger UI
- **Additional Features**:
  - QR code generation for tickets
  - Email notifications with Thymeleaf templates
  - PDF ticket generation
  - Dynamic pricing with surge system

### Frontend
- **Framework**: Angular with Router
- **Styling**: Native CSS
- **HTTP Client**: Angular HttpClient
- **Additional Features**:
  - QR code scanning for gatekeeper
  - Responsive design
  - Real-time booking flow

### Database Schema
- **Users & Roles**: Multi-role system (Admin, Staff, Customer)
- **Slots**: Time-based booking windows with capacity management
- **Bookings**: Complete booking lifecycle with payment tracking
- **Pricing**: Dynamic pricing with manual overrides and occupancy-based surge
- **Add-ons**: Additional services (camera rental, safari tours, etc.)

## 🚀 Quick Start

### Prerequisites
- Java 17
- Node.js 16+
- Docker & Docker Compose
- PostgreSQL (or use Docker)

### 1. Clone the Repository
```bash
git clone https://github.com/ashwanipydev/zoo.git
cd zoo
```

### 2. Start Database
```bash
docker-compose up -d
```

### 3. Backend Setup
```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```
The backend will start on `http://localhost:8081`

### 4. Frontend Setup
```bash
cd frontend
npm install
npm start
```
The frontend will start on `http://localhost:3000`

## 🔧 Configuration

### Environment Variables
Create `.env` files in both backend and frontend directories:

**Backend (.env)**
```env
# Database
DB_URL=jdbc:postgresql://localhost:5432/zoo_db
DB_USERNAME=zoo_admin
DB_PASSWORD=zoo_password

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000

# Razorpay
RAZORPAY_KEY_ID=your-key-id
RAZORPAY_KEY_SECRET=your-key-secret

# Email
SPRING_MAIL_USERNAME=your-email@gmail.com
SPRING_MAIL_PASSWORD=your-app-password
```

**Frontend (.env / environment files)**
```env
# Angular environments are configured in src/environments/environment.ts.
# Development proxy routes /api to http://localhost:8081.
```

## 📊 Features

### Customer Features
- User registration and authentication
- Browse available booking slots
- Dynamic pricing display
- Secure payment processing
- Email ticket delivery
- Booking history and management

### Admin Features
- User management (customers and staff)
- Slot management with capacity control
- Dynamic pricing configuration
- Revenue analytics and reporting
- Booking oversight and management

### Staff Features (Gatekeeper)
- QR code scanning for entry validation
- Real-time occupancy tracking
- Check-in/check-out management
- Booking verification

## 🧪 Testing

### Automated Testing
Run the comprehensive booking flow test:
```bash
./TEST_BOOKING_FLOW.sh
```

### Manual API Testing
Refer to `TESTING_DOCUMENTATION_INDEX.md` for detailed API testing guides.

### Key Test Files
- `TEST_BOOKING_FLOW.sh` - Automated booking flow test
- `API_CURL_TESTING_GUIDE.md` - Manual API testing
- `BOOKING_ISSUE_DEBUG_GUIDE.md` - Troubleshooting guide

## 📁 Project Structure

```
zoo/
├── backend/                 # Spring Boot application
│   ├── src/main/java/com/zoo/booking/
│   │   ├── controller/      # REST controllers
│   │   ├── entity/          # JPA entities
│   │   ├── repository/      # Data access layer
│   │   ├── service/         # Business logic
│   │   ├── security/        # Authentication & authorization
│   │   └── config/          # Configuration classes
│   ├── src/main/resources/
│   │   ├── db/migration/    # Flyway migrations
│   │   └── templates/       # Email templates
│   └── pom.xml
├── frontend/                # Angular application
│   ├── public/
│   ├── src/
│   │   ├── app/              # Application modules and pages
│   │   │   ├── core/         # Shared services and guards
│   │   │   ├── pages/        # Feature pages
│   │   │   │   ├── auth/     # Authentication
│   │   │   │   ├── book/     # Booking flow
│   │   │   │   ├── admin/    # Admin features
│   │   │   │   └── staff/    # Staff features
│   │   └── styles.css
│   └── package.json
├── database_schema.md       # Database documentation
├── docker-compose.yml       # Database container
└── TESTING_DOCUMENTATION_INDEX.md  # Testing guides
```

## 🔒 Security

- JWT token-based authentication
- Role-based access control (RBAC)
- Password encryption with BCrypt
- CORS configuration
- Input validation and sanitization

## 📈 API Documentation

Once the backend is running, visit:
- Swagger UI: `http://localhost:8081/swagger-ui.html`
- OpenAPI JSON: `http://localhost:8081/v3/api-docs`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:
1. Check the testing documentation in `TESTING_DOCUMENTATION_INDEX.md`
2. Review the database schema in `database_schema.md`
3. Check the session summary in `session_summary.md` for recent changes</content>
<parameter name="filePath">/workspaces/zoo/README.md