import React from 'react'
import Nav from '@/app/components/Navbar/Navbar';
import PromotionContainer from '@/app/containers/Promotions';


const PromotionPage: React.FC= () => {


  return (
    <div>
      <Nav />
      <PromotionContainer />
    </div>
  );
};

export default PromotionPage;
