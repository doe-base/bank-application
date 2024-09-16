import type { Metadata } from "next";
import React from 'react';
import Nav from '@/app/components/Navbar/Navbar';
import SiteMapContainer from "@/app/containers/SiteMap";


export const metadata: Metadata = {
    title: "Elite Community Credit Union | Site Map",
};
const SiteMap: React.FC= () => {


  return (
    <div>
      <Nav />
      <SiteMapContainer />
    </div>
  );
};

export default SiteMap;