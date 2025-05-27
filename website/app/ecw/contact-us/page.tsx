import type { Metadata } from "next";
import React from 'react'
import ContactUsContainer from '@/app/containers/ContactUs';
import Nav from '@/app/components/Navbar/Navbar';


export const metadata: Metadata = {
    title: "Elite Community CU | Contact Us",
    description:"...Tuesday 7:45 a.m. 4:00 p.m. Wednesday CLOSED Thursday 7:45 a.m. 4:00 p.m. Friday 7:45 a.m. 4:00 p.m. Important NumbersABA#: 271985556NLMS#: 506334 ...",
};
const ContactUs: React.FC= () => {

  return (
    <div>
      <Nav/>
      <ContactUsContainer />
    </div>
  )
}

export default ContactUs