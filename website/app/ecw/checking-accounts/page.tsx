import type { Metadata } from "next";
import React from 'react';
import CheckingAccountsContainer from '@/app/containers/CheckingAccounts';
import Nav from '@/app/components/Navbar/Navbar';



export const metadata: Metadata = {
    title: "Elite Community CU | Checking Accounts",
    description:"Share Draft (Checking) Accounts A Credit Union Share Draft account is an alternative to a traditional checking account at a bank and offers you ...",
};
const CheckingAccounts: React.FC= () => {

  return (
    <div>
      <Nav />
      <CheckingAccountsContainer />
    </div>
  );
};

export default CheckingAccounts;