import type { Metadata } from "next";
import CUServiceContainer from '@/app/containers/CUServices';
import Nav from '@/app/components/Navbar/Navbar';


export const metadata: Metadata = {
    title: "Elite Community CU | CU Services",
    description:"Services and Benefits that help over and over again",
};
const CUService: React.FC= () => {

  return (
    <div>
      <Nav />
      <CUServiceContainer />
    </div>
  );
};

export default CUService;