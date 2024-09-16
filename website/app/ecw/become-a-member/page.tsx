import type { Metadata } from "next";
import React, { useEffect } from 'react'
import Nav from "@/app/components/Navbar/Navbar";
import BecomeAMemberContainer from "@/app/containers/BecomeAMember";



export const metadata: Metadata = {
    title: "Elite Community CU | Become A Member",
    description: "Elite Community Credit Union is committed to meet our members' financial needs and assist them in attaining their financial goals",
};
  
const BecomeAMember: React.FC= () => {

  return (
    <div>
      <Nav />
      <BecomeAMemberContainer />
    </div>
  );
};

export default BecomeAMember;