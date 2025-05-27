import type { Metadata } from "next";
import React from 'react'
import HolidayScheduleContainer from '@/app/containers/HolidaySchedule';
import Nav from '@/app/components/Navbar/Navbar';


export const metadata: Metadata = {
    title: "Elite Community CU | Holiday Schedule",
    description:"Elite Community Credit Union secure and reliable banking for all your needs. Get competitive rates, manage your finances on the go, and experience exceptional customer service. Open an account today",
};
const HolidaySchedule: React.FC= () => {

  return (
    <div>
      <Nav />
      <HolidayScheduleContainer />
    </div>
  )
};

export default HolidaySchedule;