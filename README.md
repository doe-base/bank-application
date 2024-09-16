# Bank Application

This project is a web-based bank application designed to simulate a real-world banking platform. It consists of three main components:
1. **Project Website**: The landing page where customers are introduced to the bank, containing login functionality and general information.
2. **Server**: A Golang-based backend that handles authentication, data processing, and API requests.
3. **Bank App**: A user-facing web application where authenticated users can view their account details and transaction history. The bank app showcases a modern, intuitive UI and displays data from the backend, although the transactions and banking operations are not fully functional.




## Project Architecture

### 1. Frontend
The frontend consists of two Next.js React apps:
- **Project Website**: This is the landing page and handles user authentication.
- **Bank App**: The main interface for authenticated users to view their accounts and transactions.

### 2. Backend
The Golang server serves as the middle layer between the frontend and the database. It handles API requests, processes data, and interacts with the PostgreSQL database.

### 3. Database
A PostgreSQL database is used to store user data, session keys, and other relevant information.

**Flow of Data:**
1. Users interact with the project website to log in.
2. Upon successful login, they are redirected to the bank app.
3. The bank app sends requests to the server, which retrieves data from the database and returns it for display.




## Technologies Used

### Frontend
- **Next.js (React)**: For building the landing page and bank app.
- **Material UI**: For a responsive, accessible design system.
- **Axios**: For handling HTTP requests to the server.

### Backend
- **Golang**: For server-side logic, API handling, and communication with the frontend.
- **PostgreSQL**: For database management and storage of user and transaction data.

### Other Tools
- **JWT (JSON Web Tokens)**: For handling user authentication and sessions.


## Conclusion

This bank application project serves as a demonstration of a modern banking interface and backend architecture. While the app primarily showcases the UI and displays data from the server, the overall structure provides a strong foundation for developing a fully functional banking platform.