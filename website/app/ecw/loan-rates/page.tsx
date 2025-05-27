import type { Metadata } from "next";
import React from 'react';
import LoanRatesContainer from '@/app/containers/LoanRates';
import Nav from '@/app/components/Navbar/Navbar';


export const metadata: Metadata = {
    title: "Elite Community CU | Loan Rates'",
    description:"New Car Used Vehicles Shared Secured Personal Home Equity **LTV - Loan To Value NLMS#: 506334Note: New Loan Rates Effective 01/01/2018. Rates Subject To ...",
};
const LoanRates: React.FC= () => {

  return (
    <div>
      <Nav />
      <LoanRatesContainer />
    </div>
  );
};

export default LoanRates;