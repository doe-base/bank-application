import type { Metadata } from "next";
import React from 'react';
import DepositeRateContainer from '@/app/containers/DepositeRate';
import Nav from '@/app/components/Navbar/Navbar';

export const metadata: Metadata = {
    title: "Elite Community CU |  Deposite Rate",
    description:"... DIVIDENDS WILL BE COMPOUNDED AND CREDITED TO ACCOUNTS EVERY QUARTER. Rates subject to change quarterly. Dividends paid Third Quarter, 2018 ...",
};
const DepositeRate: React.FC= () => {

  return (
    <div>
      <Nav />
      <DepositeRateContainer />
    </div>
  );
};

export default DepositeRate;