import type { Metadata } from "next";
import React from 'react';
import SimpleSignupFormContainer from "@/app/containers/SimpleSignupForm";

export const metadata: Metadata = {
    title: "Elite Community CU | Become A Member",
    description:"Fill our resgistration form and become and elite banker in minutes...",
};

const SignupForm: React.FC= () => {


  return (
    <div>
      {/* <Nav /> */}
      <SimpleSignupFormContainer />
    </div>
  );
};

export default SignupForm;