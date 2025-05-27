import type { Metadata } from "next";
import React from 'react';
import LoadApplicationContainer from '@/app/containers/LoanApplication';


export const metadata: Metadata = {
    title: "Elite Community CU | Loan Application Form",
    description:"Elite Community Credit Union secure and reliable banking for all your needs. Get competitive rates, manage your finances on the go, and experience exceptional customer service. Open an account today",
};
const LoadApplication: React.FC= () => {

  return (
    <div>
      <LoadApplicationContainer />
    </div>
  )
}

export default LoadApplication