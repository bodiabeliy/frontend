# Azamaza Backend API Documentation

**Base URL:** `http://localhost:5000` (local) or `https://your-render-url.onrender.com` (production)

**API Version:** 1.0.0

---

## Table of Contents
1. [Authentication Endpoints](#authentication-endpoints)
2. [User Management Endpoints](#user-management-endpoints)
3. [Health Check](#health-check)
4. [Response Format](#response-format)
5. [Error Handling](#error-handling)

---

## Authentication Endpoints

### 1. User Signup
**Endpoint:** `POST /api/auth/signup`  
**Access:** Public  
**Description:** Register a new user account

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "password": "SecurePassword123",
  "phone": "+1234567890",
  "nationality": "USA",
  "user_type": "USER"
}
```

**Field Validations:**
- `first_name`: Required, minimum 2 characters
- `last_name`: Required, minimum 2 characters
- `email`: Required, valid email format
- `password`: Required, minimum 6 characters
- `phone`: Optional
- `nationality`: Optional
- `user_type`: Required, must be either "USER" or "ADMIN"

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "nationality": "USA",
      "is_active": true,
      "created_at": "2025-11-27T10:00:00Z",
      "updated_at": "2025-11-27T10:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### 2. User Login
**Endpoint:** `POST /api/auth/login`  
**Access:** Public  
**Description:** Authenticate user and receive tokens

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "SecurePassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "nationality": "USA",
      "is_active": true,
      "created_at": "2025-11-27T10:00:00Z",
      "updated_at": "2025-11-27T10:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### 3. User Logout
**Endpoint:** `POST /api/auth/logout`  
**Access:** Protected (requires JWT token)  
**Description:** Invalidate user tokens

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Logout successful",
  "data": null
}
```

---

### 4. Get User Profile
**Endpoint:** `GET /api/auth/profile`  
**Access:** Protected (requires JWT token)  
**Description:** Get current authenticated user's profile

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "user_id": "507f1f77bcf86cd799439011",
    "email": "john.doe@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "user_type": "USER"
  }
}
```

---

### 5. Forgot Password (Step 1)
**Endpoint:** `POST /api/auth/forgot-password`  
**Access:** Public  
**Description:** Request a password reset code via email

**Request Body:**
```json
{
  "email_or_phone": "john.doe@example.com"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "If an account exists with this email or phone, a verification code has been sent",
  "data": null
}
```

**Note:** A 4-digit verification code will be sent to the user's email. The code expires in 15 minutes.

---

### 6. Verify Reset Code (Step 2)
**Endpoint:** `POST /api/auth/verify-reset-code`  
**Access:** Public  
**Description:** Verify the password reset code

**Request Body:**
```json
{
  "email_or_phone": "john.doe@example.com",
  "code": "1234"
}
```

**Field Validations:**
- `code`: Required, exactly 4 digits

**Success Response (200):**
```json
{
  "success": true,
  "message": "Code verified successfully. You can now reset your password",
  "data": null
}
```

---

### 7. Reset Password (Step 3)
**Endpoint:** `POST /api/auth/reset-password`  
**Access:** Public  
**Description:** Reset password with new credentials

**Request Body:**
```json
{
  "email_or_phone": "john.doe@example.com",
  "new_password": "NewSecurePassword123",
  "confirm_password": "NewSecurePassword123"
}
```

**Field Validations:**
- `new_password`: Required, minimum 6 characters
- `confirm_password`: Required, minimum 6 characters, must match new_password

**Success Response (200):**
```json
{
  "success": true,
  "message": "Password reset successfully. Please login with your new password",
  "data": null
}
```

**Note:** After successful password reset, all existing tokens are invalidated and the user must login again.

---

## User Management Endpoints

### 8. Create User
**Endpoint:** `POST /api/users`  
**Access:** Protected (requires JWT token)  
**Description:** Create a new user (admin function)

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Request Body:**
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "phone": "+9876543210",
  "nationality": "Canada"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "507f1f77bcf86cd799439012",
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "phone": "+9876543210",
    "nationality": "Canada",
    "is_active": true,
    "created_at": "2025-11-27T11:00:00Z",
    "updated_at": "2025-11-27T11:00:00Z"
  }
}
```

---

### 9. Get All Users (with Pagination)
**Endpoint:** `GET /api/users`  
**Access:** Protected (requires JWT token)  
**Description:** Retrieve a paginated list of users

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10, max: 100)

**Example:** `GET /api/users?page=1&limit=20`

**Success Response (200):**
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "nationality": "USA",
      "is_active": true,
      "created_at": "2025-11-27T10:00:00Z",
      "updated_at": "2025-11-27T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total_pages": 5,
    "total_count": 50
  }
}
```

---

### 10. Get User by ID
**Endpoint:** `GET /api/users/:id`  
**Access:** Protected (requires JWT token)  
**Description:** Retrieve a specific user by their ID

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Example:** `GET /api/users/507f1f77bcf86cd799439011`

**Success Response (200):**
```json
{
  "success": true,
  "message": "User retrieved successfully",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "nationality": "USA",
    "is_active": true,
    "created_at": "2025-11-27T10:00:00Z",
    "updated_at": "2025-11-27T10:00:00Z"
  }
}
```

---

### 11. Update User
**Endpoint:** `PUT /api/users/:id`  
**Access:** Protected (requires JWT token)  
**Description:** Update user information

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Request Body (all fields optional):**
```json
{
  "first_name": "John",
  "last_name": "Updated",
  "email": "john.updated@example.com",
  "phone": "+1234567890",
  "nationality": "Canada",
  "is_active": false
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "first_name": "John",
    "last_name": "Updated",
    "email": "john.updated@example.com",
    "phone": "+1234567890",
    "nationality": "Canada",
    "is_active": false,
    "created_at": "2025-11-27T10:00:00Z",
    "updated_at": "2025-11-27T12:00:00Z"
  }
}
```

---

### 12. Delete User
**Endpoint:** `DELETE /api/users/:id`  
**Access:** Protected (requires JWT token)  
**Description:** Delete a user from the system

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Example:** `DELETE /api/users/507f1f77bcf86cd799439011`

**Success Response (200):**
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}
```

---

## Health Check

### 13. Health Check
**Endpoint:** `GET /api/health`  
**Access:** Public  
**Description:** Check API health status

**Success Response (200):**
```json
{
  "success": true,
  "message": "Service is healthy",
  "data": {
    "status": "up",
    "timestamp": "2025-11-27T10:00:00Z",
    "database": "connected"
  }
}
```

---

### 14. Root Endpoint
**Endpoint:** `GET /`  
**Access:** Public  
**Description:** API information and available endpoints

**Success Response (200):**
```json
{
  "message": "Welcome to Azamaza Backend API",
  "version": "1.0.0",
  "endpoints": {
    "health": "/api/health",
    "auth": "/api/auth",
    "users": "/api/users"
  }
}
```

---

## Response Format

All API responses follow a consistent format:

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { /* response data */ },
  "pagination": { /* only for paginated endpoints */ }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message description",
  "error": "Detailed error information"
}
```

---

## Error Handling

### Common HTTP Status Codes

- **200 OK** - Request successful
- **201 Created** - Resource created successfully
- **400 Bad Request** - Invalid request data or validation error
- **401 Unauthorized** - Missing or invalid authentication token
- **403 Forbidden** - Insufficient permissions
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server error

### Example Error Responses

**400 Bad Request:**
```json
{
  "success": false,
  "message": "Key: 'SignupRequest.Email' Error:Field validation for 'Email' failed on the 'email' tag",
  "error": "Validation failed"
}
```

**401 Unauthorized:**
```json
{
  "success": false,
  "message": "Authorization token required",
  "error": "Unauthorized"
}
```

**404 Not Found:**
```json
{
  "success": false,
  "message": "User not found",
  "error": "Resource not found"
}
```

---

## Authentication Flow

### Password Recovery Flow (3 Steps)

1. **Step 1 - Request Code:** User requests password reset by providing email/phone
   - `POST /api/auth/forgot-password`
   - 4-digit code sent to user's email
   - Code valid for 15 minutes

2. **Step 2 - Verify Code:** User enters the received code
   - `POST /api/auth/verify-reset-code`
   - Code is verified and marked as confirmed

3. **Step 3 - Reset Password:** User sets new password
   - `POST /api/auth/reset-password`
   - Password updated, tokens invalidated
   - User must login with new password

---

## JWT Token Usage

### Including Token in Requests

For protected endpoints, include the JWT token in the Authorization header:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Token Expiration

- **Access Token:** 24 hours
- **Refresh Token:** 7 days
- **Reset Code:** 15 minutes

---

## Testing with Postman/Insomnia

### Example: Complete Authentication Flow

1. **Signup:**
```bash
POST http://localhost:5000/api/auth/signup
Content-Type: application/json

{
  "first_name": "Test",
  "last_name": "User",
  "email": "test@example.com",
  "password": "Test123456",
  "phone": "+1234567890",
  "nationality": "USA",
  "user_type": "USER"
}
```

2. **Login:**
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "Test123456"
}
```

3. **Get Profile (with token):**
```bash
GET http://localhost:5000/api/auth/profile
Authorization: Bearer <your_token_from_login>
```

---

## CORS Configuration

The API is configured with CORS enabled for all origins. For production, configure specific allowed origins in the server configuration.

**Allowed Methods:** GET, POST, PUT, DELETE, PATCH, OPTIONS  
**Allowed Headers:** Content-Type, Authorization, Accept, Origin, Cache-Control, X-Requested-With

---

## Notes for Frontend Integration

1. **Store Tokens Securely:** Use httpOnly cookies or secure localStorage
2. **Handle Token Expiration:** Implement token refresh logic
3. **Display User-Friendly Errors:** Parse error messages from API responses
4. **Implement Loading States:** Show spinners during API calls
5. **Validate Input Client-Side:** Validate before sending to reduce errors
6. **Handle Network Errors:** Implement retry logic for failed requests
7. **Email Verification:** Check spam folder for password reset emails

---

## Environment Configuration

### Required Environment Variables

```bash
# MongoDB
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database
DB_NAME=azamazaDev

# Server
SERVER_PORT=5000
GIN_MODE=debug  # or "release" for production
JWT_SECRET=your-secret-key-change-in-production

# Email (Gmail SMTP)
EMAIL_SENDER_NAME=Azamaza
EMAIL_SENDER_ADDRESS=your-email@gmail.com
EMAIL_SENDER_PASSWORD=your-app-password
```

---

**Last Updated:** November 27, 2025  
**API Version:** 1.0.0  
**Maintained By:** Azamaza Development Team
