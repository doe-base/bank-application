"use client";
import Appbar from "../components/Appbar/Appbar";
import Sidebar from "../components/Sidebar/Sidebar";
import DashBoardContainer1 from "../components/Dashboard/Container1";
import DashBoardContainer2 from "../components/Dashboard/Container2.";


interface Props {
    firstname: string;
    accountnumber: number;
    balance: number;
    hidebalance: boolean;
    message: string;
};
const DashBoardContainer: React.FC<Props>=({ 
    firstname, 
    accountnumber, 
    balance, 
    hidebalance, 
    message, 
 })=> {

    
  const handleTopupOpen =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-receive-funds');
    sidebarEl?.classList.add('show');
  };


  return (
      <>
        <Sidebar namefromApp={'home'}/>
  
        <main id="content">
            <Appbar />

            <DashBoardContainer1 
                firstname={firstname}
                accountnumber={accountnumber}
                balance={balance}
                hidebalance={hidebalance}
                message={message}
            />
  
            <DashBoardContainer2 />
        </main>
  
      </>
  );
};

export default DashBoardContainer;