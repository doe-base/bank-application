import type { Metadata } from "next";
import React, { useEffect } from 'react';
import CalculatorContainer from '@/app/containers/Calculator';
import Nav from '@/app/components/Navbar/Navbar';



export const metadata: Metadata = {
    title: "Elite Community CU | Calculator",
    description: "Savings Calculators What will my savings be worth? How long will it take for my savings goals to be met? What will it take ...",
};
const Calculator: React.FC= () => {

  return (
    <div>
      <Nav />
      <CalculatorContainer />
    </div>
  );
};

export default Calculator;