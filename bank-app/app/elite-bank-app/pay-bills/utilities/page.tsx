"use client"
import { useState } from "react";
import BillsPaymentFrom from "@/app/components/Popups/BillsPaymentForm";
import BillsDropdownPopup from "@/app/components/Popups/BillsDropdownPopup";
import Sidebar from "@/app/components/Sidebar/Sidebar";

const handleDropDownUtilityProviderOpen =()=>{
    document.getElementById('bill-select-utility-type')?.classList.remove('justdisplaynone');
    document.getElementById('bill-select-service-provider')?.classList.add('justdisplaynone');

    document.getElementById('bill-select-utility-type-options')?.classList.remove('justdisplaynone');
    document.getElementById('bill-select-service-provider-options')?.classList.add('justdisplaynone');

    const sidebarEl = document.getElementById('dropdown-select-popup');
    sidebarEl?.classList.add('show');
};
const handleDropDownUtilityServiceProviderOpen =()=>{
    document.getElementById('bill-select-utility-type')?.classList.add('justdisplaynone');
    document.getElementById('bill-select-service-provider')?.classList.remove('justdisplaynone');

    document.getElementById('bill-select-utility-type-options')?.classList.add('justdisplaynone');
    document.getElementById('bill-select-service-provider-options')?.classList.remove('justdisplaynone');

    const sidebarEl = document.getElementById('dropdown-select-popup');
    sidebarEl?.classList.add('show');
};
const handleDropDownClose =()=>{
    document.getElementById('bill-select-utility-type')?.classList.remove('justdisplaynone');
    document.getElementById('bill-select-service-provider')?.classList.remove('justdisplaynone');

    document.getElementById('bill-select-utility-type-options')?.classList.remove('justdisplaynone');
    document.getElementById('bill-select-service-provider-options')?.classList.remove('justdisplaynone');

    const sidebarEl = document.getElementById('dropdown-select-popup');
    sidebarEl?.classList.remove('show');
};

interface Props {};
const Utilities: React.FC<Props>=({})=>{
    const [dropdown, setDropdown] = useState<string>("");
    const [dropdownOpt1, setDropdownOpt1] = useState<string>("");
    const [dropdownOpt2, setDropdownOpt2] = useState<string>("");
    
    return (
        <>
            <Sidebar namefromApp={'pay-bills'}/>
            <>
                <BillsPaymentFrom 
                    billType={"pay-bills-utilities"} 
                    handleDropDownUtilityProviderOpen={handleDropDownUtilityProviderOpen} 
                    dropdownOpt1={dropdownOpt1} 
                    handleDropDownUtilityServiceProviderOpen={handleDropDownUtilityServiceProviderOpen}
                    dropdownOpt2={dropdownOpt2}
                />
                <BillsDropdownPopup 
                    dropdown={dropdown} 
                    handleDropDownClose={handleDropDownClose} 
                    setDropdownOpt1={setDropdownOpt1}
                    dropdownOpt1={dropdownOpt1}
                    setDropdownOpt2={setDropdownOpt2}
                />
            </>
        </>
    )
};
export default Utilities;