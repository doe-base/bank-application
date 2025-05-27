import type { Metadata } from "next";
import React from 'react';
import Nav from '@/app/components/Navbar/Navbar';
import SeachResultContainer from "@/app/containers/SearchResult";



export const metadata: Metadata = {
    title: "Elite Community CU | Search Results",
};
const SearchResult: React.FC= () => {
    


  return (
    <div>
      <Nav />
      <SeachResultContainer />
    </div>
  );
};

export default SearchResult;