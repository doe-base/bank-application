import type { Metadata } from "next";
import "./globals.css";
import "./css/dashboard.css";
import "./css/loadingscreen.css";
import "./css/sidebar.css";
import "./css/bills.css";
import "./css/transfer.css";
import "./css/beneficiaries.css";
import "./css/receivefunds.css";
import "./css/inverstment.css";
import "./css/setting.css";
import "./css/transaction.css";
import "./css/account_statement.css";
import "./css/beneficiary_popup.css";
import "./css/animations.css"
import { GetDataProvider } from "./context/GetDataContext";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme";



export const metadata: Metadata = {
  title: `Elite Banking App | Dashboard`,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <GetDataProvider>
          <body>{children}</body>
        </GetDataProvider>
      </ThemeProvider>
    </html>
  )
};
