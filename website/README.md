# Bank Project Website (Landing page)

The project website serves as the entry point for users visiting the bank's online platform. It provides information about the bank, services offered, and includes a secure login page for users to access the main banking app. Built using Next.js with TypeScript, the website focuses on a smooth user experience and SEO optimization.




## Key Features

2. **Login System:**
   - A secure login page where users can enter their Login ID and verify authentication via email.
   - The login request is sent to the Go server for authentication.

3. **Responsive Design:**
    - The website is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

4. **Navigation & Site search bar:**
 - Clear navigation to guide users through different sections of the site and direct them to the login form.
 - A Site search bar to allows users to quickly find information or content within the website by entering keywords or phrases related to what they are looking for.

5. **Loan Application Form:**
- The online loan application form located at '/ecw/loan-application' is a detailed form that incorporates various HTML form elements.
- It provides clear error messages and highlights empty fields to enhance the user experience.




## Tech Stack

**Next.js (TypeScript)**: Chosen for its fast performance and built-in SEO optimization, making it ideal for a landing page that needs to load quickly and rank well in search engines.
**Material UI**: Material UI is a popular React component library. It Grid component for responsive design and makeStyles utility function made responsive style convenient.
**Axios**: For handling API requests to the Go server during the login process.
**Several other Javascript components**: Fuse js, Swiper Js, react-loader-spinner and more. All find all in the package.json




## Folder Structure

website/
│
├── public/                  # Static assets like images, favicon
├── app/                     # Main source folder
│   ├── components/          # Modularization and Reusable UI components o (e.g., Navbar, Footer)
│   ├── constants/           # Holds static values (e.g., routes)
│   ├── css/                 # CSS modules for styling components
│   ├── ecw/                 # Contains website pages
│   ├── styles/              # Contains Material UI theme files for each page
|   ├── theme/               # Contains Material UI theme Provider
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Main Entry file
|   ├── page.tsx             # Home page
├── .env                     # Environment variables (e.g., API endpoints)
├── next.config.js           # Next.js configuration file
├── tsconfig.json            # Typescript configuration
└── package.json             # Dependencies and scripts




## Authentication Flow

Detail the login process and how the project website interacts with the Go server for authentication.

1. **Login Form**: Users input their Login ID on the login form.
2. **API Request**: When the form is submitted, an API request is made to the Go server using Axios.
3. **Server Response**: The server checks the Login ID in the database, get the email address associated with the Login ID (If it exist) and send an OTP to the users mail. If this process is success the server will return the email address to the app which will trigger a form switch to "Enter OTP form". If not, an error message is displayed.
4. **Another API Request**: When the user enters the OTP sent to his/her email, another API request is made to the Go server. A session token mapped to a JSON Web Token (JWT) with the users login ID is send back to the app as a response. An error message will be displayed if any error occurs in the process.
5. **Redirect to bank app**: The receiver of the session token will trigger a redirect to the bank app. The redirect URL will contain the session token which the bank app will use to validate authentication and create a session cookie.




## Running the Website Locally

### 1. Download or Clone the Repository

### 2. Install Dependencies
cd website
npm install

### 3. Set Up Environment Variables
Create a .env file in the root directory and provide the necessary environment variables:
NEXT_PUBLIC_LOGIN_POST=http://localhost:8080/login-post
NEXT_PUBLIC_VERIFY_OTP_POST=http://localhost:8080/verify-otp-post

### 4. Run the Application
npm run dev




## Future Enhancements

- **User Onboarding Flow**: Add an onboarding process for new users with guided tours of the website.
- **Performance Optimization**: Further optimize loading speeds and reduce bundle sizes for even faster page loads.
- **Sign Up Form**: Intrested parties should be able to create there own accounts.