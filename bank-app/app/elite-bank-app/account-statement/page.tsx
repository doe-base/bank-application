'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import Appbar from "@/app/components/Appbar/Appbar";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { useGetData } from '../../context/GetDataContext';
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";

interface Props {};
const AccountStatement: React.FC<Props>=({ })=>{

    const { pageLoading } = useGetData();

    const [activeDuration, setActiveDuration] = useState('30');
    const [emailToSend, setEmailToSend] = useState('');
    const [dutationPeriodFrom, setDutationPeriodFrom] = useState('');
    const [dutationPeriodTo, setDutationPeriodTo] = useState('');

    const addSomethingWrong4 =()=>{
        document.getElementById('somethingwrong4')?.classList.add('somethingwrong');
    };
    const removeSomethingWrong4 =()=>{
        document.getElementById('somethingwrong4')?.classList.remove('somethingwrong');
    };
    const lunchSomethingWrong4 =()=>{
        setTimeout(addSomethingWrong4, 1000);
        setTimeout(removeSomethingWrong4, 4200);
    };
    const addSomethingWrong5 =()=>{
        document.getElementById('somethingwrong5')?.classList.add('somethingwrong');
    };
    const removeSomethingWrong5 =()=>{
        document.getElementById('somethingwrong5')?.classList.remove('somethingwrong');
    };
    const lunchSomethingWrong5 =()=>{
        setTimeout(addSomethingWrong5, 1000);
        setTimeout(removeSomethingWrong5, 4200);
    };

    const handleRequestStatementSubmit= async (e: any)=>{
        e.preventDefault();
        
        axios.post('fake-end-point', {
            duration: activeDuration,
            email: emailToSend,
            dutationPeriodFrom: dutationPeriodFrom,
            dutationPeriodTo: dutationPeriodTo,
        })
        .then(res => lunchSomethingWrong4())
        .catch(err => lunchSomethingWrong5())
    }
    const navigate = useRouter();
    const handleGoBack = () => {
        navigate.back()
    };


    useEffect(()=>{
        if(activeDuration == '30'){
            document.getElementById('custom-large-badge_button1')?.classList.add('selected');
            document.getElementById('custom-large-badge_button2')?.classList.remove('selected');
            document.getElementById('custom-large-badge_button3')?.classList.remove('selected');

        }else if(activeDuration == '60'){
            document.getElementById('custom-large-badge_button1')?.classList.remove('selected');
            document.getElementById('custom-large-badge_button2')?.classList.add('selected');
            document.getElementById('custom-large-badge_button3')?.classList.remove('selected');
        }else if(activeDuration == '90'){
            document.getElementById('custom-large-badge_button1')?.classList.remove('selected');
            document.getElementById('custom-large-badge_button2')?.classList.remove('selected');
            document.getElementById('custom-large-badge_button3')?.classList.add('selected');
        }
    }, [activeDuration]);

    
    return (
        <>
            {
                pageLoading
                ?
                <LoadingScreen/>
                :
                <>
                    <Sidebar namefromApp="account-statement" />
                    <main id="content">
                        <Appbar />

                        <section className="container">
                            <div className="transaction-back">
                                <button className="transaction-back-btn" onClick={handleGoBack}>
                                    <img src="/imgs/angle.svg" alt="" />
                                    <span>Back</span>
                                </button>
                            </div>

                            <div style={{paddingTop: '3rem'}}>
                                <h1 className="tranfer-title-text">Account Statement</h1>
                                <p className="tranfer-lead-text">Request statement from the past</p>
                            </div>

                            <div className="account-statement__groov-panel">
                                <form className="account-statement__form" onSubmit={handleRequestStatementSubmit}>
                                    <div className="ast-past" style={{width: '100%'}}>
                                        <h2>Request statement from the past</h2>

                                        <div className="ast-past-wrapper">
                                            <div role="button" id="custom-large-badge_button1" className="custom-large-badge" onClick={()=> setActiveDuration('30')}>30 days</div>
                                            <div role="button" id="custom-large-badge_button2" className="custom-large-badge" onClick={()=> setActiveDuration('60')}>60 days</div>
                                            <div role="button" id="custom-large-badge_button3" className="custom-large-badge" onClick={()=> setActiveDuration('90')}>90 days</div>
                                        </div>

                                        <div className="ast-divider"><span>or</span></div>

                                        <label>Custom range</label>

                                        <div className="ast-form-group">
                                            <div className="as-res-mr" style={{ marginBottom: '1rem', width: '100%' }}>
                                                <label style={{display: 'block', color: '#000', fontSize: '12px', fontWeight: '600', marginBottom: '0.3rem'}}>From</label>
                                                <input type="date" className="react-select__control css-ismsy3-control" style={{textTransform: 'uppercase', width: '100%'}} value={dutationPeriodFrom} onChange={(e)=>setDutationPeriodFrom(e.currentTarget.value)}/>
                                            </div>

                                            <div style={{ marginBottom: '1rem', width: '100%' }}>
                                                <label style={{display: 'block', color: '#000', fontSize: '12px', fontWeight: '600', marginBottom: '0.3rem'}}>To</label>
                                                <input type="date" className="react-select__control css-ismsy3-control" style={{textTransform: 'uppercase', width: '100%'}} value={dutationPeriodTo} onChange={(e)=>setDutationPeriodTo(e.currentTarget.value)}/>
                                            </div>
                                        </div>

                                        <div style={{marginTop: '18px'}}>
                                            <label>Email address</label>
                                            <input type="email" className="react-select__control css-ismsy3-control" placeholder='youremail@example.com' style={{textTransform: 'none', width: '100%', marginTop: '8px'}} onClick={(e)=> setEmailToSend(e.currentTarget.value)} required/>
                                        </div>

                                        <span className="ast-form-info">You can get your account statement sent to a different email other than the email registered with your elite community account using the column above.</span>

                                        <button className="btn btn-mint-default ast-submit-btn" type="submit" style={{textTransform: 'uppercase'}}>Request Statement</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </main>
                </>
            }
        </>
    )
};

export default AccountStatement;