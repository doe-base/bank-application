'use client'
import React, { useEffect } from 'react';



const MainCalculatorContainer: React.FC = () => {
    useEffect(()=>{
        window.open('www.text.com', '_blank', 'width=300,height=400');
        window.open('Calculator:///');
    }, [])
    


  return (
        <main>
            <h1>All Popup for this site</h1>
        </main>
  );
};

export default MainCalculatorContainer;
