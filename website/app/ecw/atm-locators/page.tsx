import type { Metadata } from "next";
import React from 'react';
import ATMLocatorContainer from "@/app/containers/ATMLocator";
import Nav from '@/app/components/Navbar/Navbar';

export const metadata: Metadata = {
    title: "Elite Community CU | ATM Locators",
    description:"Never Fret About Fees Find a free ATM with any of the ATM locators below...",
};

const ATMLocator: React.FC= () => {


  return (
    <div>
      <Nav />
      <ATMLocatorContainer />
    </div>
  );
};

export default ATMLocator;