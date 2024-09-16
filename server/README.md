# Bank Application Server
The server is a Golang-based backend that handles requests from the client applications (landing page and bank app). It manages user authentication, sessions, and data interactions with the PostgreSQL database. The server ensures secure communication between the client and the database, with a strong focus on security and performance.

**Key Responsibilities:**
- Handle authentication and authorization (login, logout, and session management).
- Manage account data for users.
- Interact with PostgreSQL for CRUD operations.
- Ensure data security and session integrity.




## Tech Stack
- **Golang**: A highly performant and concurrent backend language.
- **Gorilla Mux**: For routing HTTP requests.
- **Gorilla Sessions**: To manage session-based authentication.
- **PostgreSQL**: The database used to store user and transaction data.
- **JWT (JSON Web Tokens)**: For token-based user authentication.
- **Docker**: To containerize the server for easy deployment.




## Folder Structure
server/
│
├── cmd/                     # Main source folder
|   ├── main.go/             # Main entry file
├── pkgs/                    # Grouping Related Packages
│   ├── auth/                # Contains files associated with authentication (e.g. create login session)
│   ├── config/              # Contains files associated with 3 party connection (e.g. postgres connection)
│   ├── gets/                # Contains files associated with Get requests
│   ├── middleware/          # Contains the server middleware functions
│   ├── utils/               # Contains Utility functions
├── .env                     # Environment variables (e.g., postgres connection string)
├── go.mod                   # Defines the dependencies of Go project and their versions
├── go.sum                   # Stores the checksums of the downloaded dependencies.
└── postgres_queries         # This file provides the Postgre SQL statements required to set up and use the application.




## Core Features

### 1. Authentication
- **Login**: Users log in with their Login ID, which are authenticated against the database.
- **Verification mail**: A mail with an OTP is sent to the user.
- **Verify OTP**: Verify the OTP
- **Generate JWT and Session ID**: Generate a JWT  and session ID and store them in the database.
- **Create cookie session**
- **Logout**: The user session is terminated upon logout.

### 2. User management
- **Get User Data**: The server fetches user information from PostgreSQL when requested by the authenticated user.

### 3. Background Worker
- **Clean up expired sessions**




## Database Structure
The server uses PostgreSQL to store user data. The key tables and their fields are outlined in the postgres_queries file.




## API Endpoints

#### POST `/login-post`
Verifies the user Login ID and send the verfication mail.
**Request:**
{
    "loginID": "",
}
**Response:**
{
    "email": "user@example.com",
}

#### POST `/verify-otp-post`
Verifies the user OTP and create a JWT and Session ID.
**Request:**
{
    "OTP": "",
}
**Response:**
{
    "sessionID": "",
}

#### POST `/create-session-cookie`
Creates the login cookie session
**Request:**
{
    "sessionID": "",
}
**Response:**
{
    "status":   "success",
    "redirect": bank_app_domain,
}

#### POST `/get-bashboard-data`
Get user data from postgres
**Request:**
{
    "sessionID": "",
}
**Response:**
{
    email
    firstname
    lastname
    middlename
    accountnumber
    accounttype
    balance
    hidebalance
}

#### POST `/close-session`
Close session
**Request:**
{
    "sessionID": "",
}




## How to Run the Server Locally
### 1. Clone or Download the Repository

### 2. Install Dependencies
```bash
cd bank-server
go mod tidy
```

### 3. Set Up Environment Variables
WEBSITE_DOMAIN=http://localhost:3000
BANK_APP_DOMAIN=http://localhost:3001
BANK_APP_DOMAIN1=localhost
PostgreConnectionString=
PORT=8080
SENDER_MAIL= youremail@example.com
APP_PASSWORD=your_password
EMAIL_PORT=587
EMAIL_HOST=smtp.hostinger.com
JWT_KEY=what_ever_you_like

### 4. Run the Server
```bash
go run main.go
```

### 5. Database Setup
Ensure PostgreSQL is installed and running. As mentioned earlier all the command to create the necessary tables are in the postgres_queries file