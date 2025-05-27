import type { Metadata } from "next";
import React, { useEffect } from 'react';
import CreditCardContainer from '@/app/containers/CreditCard';
import Nav from '@/app/components/Navbar/Navbar';


export const metadata: Metadata = {
    title: "Elite Community CU | Credit Cards",
    description:"Loan Application Apply For Credit CardApply Online from Anywhere eZCardInfo eZCardInfoAccess Your Credit Card Easily VISA Account Types The Visa Classic Card has a ...",
};
const CreditCard: React.FC= () => {

  return (
    <div>
      <Nav />
      <CreditCardContainer />
    </div>
  );
};

export default CreditCard;