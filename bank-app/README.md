# Bank Application (Bank App)
The bank app is a user interface designed to present a clean and modern look at banking operations. The inspiration for the UI is the Mintyn Bank app. Though the app is not fully functional, it demonstrates how users would interact with their accounts, view transaction histories, and access other key features of a banking platform. Built using Next.js and React, the app connects to a server that provides mock data for display purposes.




## Tech Stack

- **Next.js (TypeScript)**: Server-side rendering and static generation for better performance.
- **React**: For building interactive UI components.
- **Axios**: For fetching mock data from the backend API.




## Folder Structure

bank-app/
│
├── public/                  # Static assets like images, favicon
├── app/                     # Main source folder
│   ├── auth/                # Contains files that handles authentication
│   ├── components/          # Modularization and Reusable UI components o (e.g., Navbar, Footer)
│   ├── constants/           # Holds static values (e.g., routes)
│   ├── context/             # App contexts
│   ├── css/                 # CSS modules for styling components
│   ├── elite-bank-app/      # Contains website pages
│   ├── styles/              # Contains Material UI theme files for each page
|   ├── theme/               # Contains Material UI theme Provider
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Main Entry file
|   ├── page.tsx             # Home page
├── .env                     # Environment variables (e.g., API endpoints)
├── next.config.js           # Next.js configuration file
├── tsconfig.json            # Typescript configuration
└── package.json             # Dependencies and scripts




## Running the Bank App Locally
1. Clone the repository
2. Install dependencies
    cd bank-app
    npm install
3. Run the application
    npm run dev
4. Visit http://localhost:3001