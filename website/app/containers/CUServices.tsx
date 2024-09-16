'use client';
import React, { useEffect, useState } from 'react';
import {useStyles, Hero, MainContent, } from '../styles/cu_services';
import Footer from '../components/Footer/Footer';
import * as ROUTES from "../constants/routes";


const CUServiceContainer: React.FC = () => {
    const classes = useStyles();

    const [activeOption, setActiveOption] = useState<string>('loans');


    const handleOptionChange=(name: string)=>{
        setActiveOption(name)
    };

    
    useEffect(() => {
        const sectionEl = document.getElementById("cu-service-hero");
        const handleScroll = () => {
            const position = 217.168 + window.scrollY * 0.65
            if(sectionEl){
                if(position >= 500){
                    sectionEl.style.backgroundPosition = `0px -500px`
                }else{
                    sectionEl.style.backgroundPosition = `0px -${position}px`
                }
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [activeOption]);
      useEffect(()=> {
        document.getElementById(activeOption)?.focus();
    }, [activeOption]);


  return (
        <main>
            <Hero id='cu-service-hero'>
                <div className={classes.heroInner}>
                    <div style={{ position: 'relative'}}>
                        <h1 className={classes.heroInnerH1}>CU SERVICES</h1>
                        <h2 className={classes.heroInnerH2}>Services and Benefits that help over and over again.</h2>
                        <a className="cta-btn2" style={{cursor: 'not-allowed'}}>Join Now</a>
                    </div>
                </div>
            </Hero>

            <MainContent id='main'>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{display: 'block', clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%', paddingBottom: '4rem'}}>

                                <div>
                                    <ul className={classes.ulToggle}>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('loans')}>
                                            <button id='loans' className={activeOption === 'loans' ? classes.pToggleActive : classes.pToggle}>Loans</button>
                                        </li>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('accounts')}>
                                            <button id='accounts' className={activeOption === 'accounts' ? classes.pToggleActive : classes.pToggle}>Accounts</button>
                                        </li>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('cu-services')}>
                                            <button id='cu-services' className={activeOption === 'cu-services' ? classes.pToggleActive : classes.pToggle}>CU Services</button>
                                        </li>
                                    </ul>
                                </div>

                                <div style={{position:'relative', padding: '20px 0'}}>
                                {
                                    
                                    activeOption === 'loans'
                                    ?

                                    
                                        <div>
                                            <div className={classes.pageTitle}>
                                                <h2 className={classes.pageTitleH2}>Loans</h2>
                                            </div>


                                            <ul style={{paddingLeft: '20px', marginBottom: '2rem'}} className={classes.paragraph}>
                                                <li>Home Equity Loans</li>
                                                <li>New &amp; Used Car Loans - 100% Financing Available </li>
                                                <li>Personal &amp; Share-Secured Loans</li>
                                                <li><a href={ROUTES.CREDIT_CARDS} style={{textDecoration: 'none', color: "#b55e0c"}}>Visa Credit Cards</a></li>
                                            </ul>

                                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                                <a href={ROUTES.LOAN_RATES} className={classes.linkBtn} style={{marginBottom: '10px'}}>See Rates</a>
                                                <a href={ROUTES.LOAN_APPLICATION} className={classes.linkBtn} style={{marginBottom: '10px'}}>Apply For A Loan</a>

                                            </div>
                                        </div>
                                    :
                                    
                                    activeOption === 'accounts'
                                    ?

                                    <div>
                                        <div className={classes.pageTitle}>
                                            <h2 className={classes.pageTitleH2}>Accounts</h2>
                                        </div>

                                        <ul style={{paddingLeft: '20px', marginBottom: '2rem'}} className={classes.paragraph}>
                                            <li>Share Savings Accounts (Federally Insured up to $250,000.00)</li>
                                            <li><a href={ROUTES.CHECKING_ACCOUNTS} style={{textDecoration: 'none', color: "#b55e0c"}}>Checking Accounts</a> With No Min. Balance Requirement, No Monthly Service Fee, (50) Free Checks and ATM / Debit Cards</li>
                                            <li>Overdraft Protection &amp; Courtesy Pay On Checking Accounts</li>
                                            <li>Ira Accounts (Roth, Traditional &amp; Coverdell Education Savings Accounts)</li>
                                            <li>Christmas &amp; Vacation Club Accounts</li>
                                        </ul>
                                        

                                        <div>
                                            <a href={ROUTES.LOAN_RATES} className={classes.linkBtn}>See Rates</a>
                                        </div>
                                    </div>
                                    :

                                    activeOption === 'cu-services'
                                    ?

                                        <div>


                                            <div className={classes.pageTitle}>
                                                <h2 className={classes.pageTitleH2}>CU Services</h2>
                                            </div>

                                            <ul style={{paddingLeft: '20px', marginBottom: '2rem'}} className={classes.paragraph}>
                                                <li>Visa Pre-paid Debit Cards</li>
                                                <li>Wire Transfers</li>
                                                <li>Direct Deposit of Payroll, Pension, Social
                                                Security and Tax Refunds.</li>
                                                <li>Vehicle Pricing Guides</li>
                                                <li>Cashier's Checks and Money Orders</li>
                                                <li>Online Bill Pay</li>
                                                <li>Cash N' Dash Payday Alternative Loan</li>
                                                <li>Visa Gift Cards</li>
                                                <li>Homebanking with Mobile App</li>
                                                <li>Remote Deposit Capture</li>
                                                <li>Notary Service</li>					
                                                <li>Night Depository Box</li>					
                                                <li>Drive Thru</li>					
                                                <li>ATM Machine</li>
                                            </ul>
                                        </div>

                                    :
                                    null
                                    
                                }
                                </div>

                            </div>
                        </div>
                </div>


            </MainContent>
    
            <Footer />
        </main>
  )
};

export default CUServiceContainer;
