'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Appbar from "@/app/components/Appbar/Appbar";
import FormPart1 from "@/app/components/InvestmentNew/FormPart1";
import FormPart2 from "@/app/components/InvestmentNew/FormPart2";
import FormPart3 from "@/app/components/InvestmentNew/FormPart3";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import EnterPin from "@/app/components/Popups/EnterPin";
import { useGetData } from '../../../context/GetDataContext';
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";


interface Props {};
const InvestNew: React.FC<Props>=({ })=>{
    const { pageLoading } = useGetData();

    const navigate = useRouter();
    const [isChecked, setIsChecked] = useState(false);
    const [activeSet, setActiveSet] = useState(1);


    const handleGoBack = () => {
        if(activeSet === 1){
            navigate.back();
        }else if(activeSet === 2){
            setActiveSet(1)
            setIsChecked(false)
            document.getElementById(`groom-panel-active-option-investment-new-1`)?.classList.add('active');

            document.getElementById(`groom-panel-active-option-investment-new-2`)?.classList.remove('active');
        }else if(activeSet === 3){
            setActiveSet(2)
            setIsChecked(false)
            document.getElementById(`groom-panel-active-option-investment-new-2`)?.classList.add('active');

            document.getElementById(`groom-panel-active-option-investment-new-3`)?.classList.remove('active');
        }else{
            navigate.back();
        };
    };
    
      

    return (
        <>
            {
                pageLoading
                ?
                    <LoadingScreen/>
                :
                    <>
                        <Sidebar namefromApp="invest" />
                        <main id="content">
                            <Appbar />

                            <section className="container">

                                <div className="transaction-back">
                                    <button className="transaction-back-btn" onClick={handleGoBack}>
                                        <img src="/imgs/angle.svg" alt="" />
                                        <span>Back</span>
                                    </button>
                                </div>

                                <div style={{padding: '3rem 0'}}>
                                    <h1 className="tranfer-title-text">Setting Up A New Investment</h1>
                                    <p className="tranfer-lead-text">Please select your Investment preferences and start Investing</p>

                                    <FormPart1 />

                                    <FormPart2 />

                                    <FormPart3 />

                                </div>
                            </section>
                        </main>

                        <EnterPin />
                    </>
            }
        </>
    )
};

export default InvestNew;