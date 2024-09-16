import type { Metadata } from "next";
import "./globals.css";
import "./css/animation.css";
import "./css/popup.css";
import "./css/become_member_form.css";
import "./css/calculator.css";
import "./css/styles.css";
import "./css/successful_loan_form.css";
import "./css/swiper.css";
import "./css/transition_page.css";
import '../public/font-awesome-4.7.0/css/font-awesome.min.css';
import '../public/font-awesome-4.7.0/css/font-awesome.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme";


export const metadata: Metadata = {
  title: "Elite Community Credit Union",
  description:"Elite Community Credit Union secure and reliable banking for all your needs. Get competitive rates, manage your finances on the go, and experience exceptional customer service. Open an account today",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
