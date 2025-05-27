'use client';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import {useStyles, Hero, MainContent,} from '../styles/loan_rates';
import NewCarTable from '../components/LoanRatesTables/NewCar';
import UsedVehicles from '../components/LoanRatesTables/UsedVehicles';
import SharedSecured from '../components/LoanRatesTables/SharedSecured';
import PersonalTable from '../components/LoanRatesTables/Personal';
import HomeEquityTable from '../components/LoanRatesTables/HomeEquity';


const LoanRatesContainer: React.FC = () => {
    const classes = useStyles();
    const [activeOption, setActiveOption] = useState<string>('new-car');

    const handleOptionChange=(name: string)=>{
        setActiveOption(name)
    };

    useEffect(() => {
        const sectionEl = document.getElementById("loan-rates-hero");
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
            <Hero id='loan-rates-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Loan Rates</h1>
                </div>
            </Hero>

            <MainContent id='main'>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{display: 'block', clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%', paddingBottom: '4rem'}}>
                                

                                <div>
                                    <ul className={classes.ulToggle}>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('new-car')}>
                                            <button id='new-car' className={activeOption === 'new-car' ? classes.pToggleActive : classes.pToggle}>New Car</button>
                                        </li>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('used-vehicles')}>
                                            <button id='used-vehicles' className={activeOption === 'used-vehicles' ? classes.pToggleActive : classes.pToggle}>Used Vehicles</button>
                                        </li>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('shared-secured')}>
                                            <button id='shared-secured' className={activeOption === 'shared-secured' ? classes.pToggleActive : classes.pToggle}>Shared Secured</button>
                                        </li>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('personal')}>
                                            <button id='personal' className={activeOption === 'personal' ? classes.pToggleActive : classes.pToggle}>Personal</button>
                                        </li>
                                        <li className={classes.liToggle} onClick={()=> handleOptionChange('home-equity')}>
                                            <button id='home-equity' className={activeOption === 'home-equity' ? classes.pToggleActive : classes.pToggle}>Home Equity</button>
                                        </li>
                                    </ul>
                                </div>

                                <div style={{position:'relative', padding: '20px 0'}}>
                                {
                                    
                                    activeOption === 'new-car'
                                    ?
                                    
                                        <NewCarTable classes={classes} />

                                    :
                                    activeOption === 'used-vehicles'
                                    ?

                                        <UsedVehicles classes={classes} />

                                    :
                                    activeOption === 'shared-secured'
                                    ?

                                       <SharedSecured classes={classes} />

                                    :
                                    activeOption === 'personal'
                                    ?

                                        <PersonalTable classes={classes} />

                                    :
                                    activeOption === 'home-equity'
                                    ?

                                       <HomeEquityTable classes={classes} />

                                    :

                                    null
                                    
                                }
                                </div>



                                <div>
                                    <p className={classes.paragraph}>Rates effective 08/01/2023.</p>
                                    <p className={classes.paragraph}>Rates are subject to change.</p>
                                </div>

                                {
                                    activeOption === 'personal'
                                    ?

                                    <div style={{width: '100%', textAlign: 'center', margin: '30px 0'}}>
                                        <strong className={classes.strong}>Ask your Loan Officer how you may qualify for a rate reduction!</strong>
                                        <p className={classes.paragraph}>(Rate reduction does not apply to VISA Credit Cards, Share Secured Loans and Cash N' Dash Payday Alternative Loans.)</p>
                                    </div>
                                    :
                                    null
                                }

                                <p className={classes.paragraph} style={{marginTop: '20px'}}>**LTV - Loan To Value</p>

                                <div style={{margin: '40px 0'}}>
                                    <p className={classes.paragraph}>NLMS#: NIL</p>
                                    <p className={classes.paragraph}>Note: New Loan Rates Effective 08/01/2023. Rates Subject To Change.</p>
                                    <p className={classes.paragraph}>Rates pertain to any new loan business on or after 08/01/2023, not previous loans.</p>
                                    <p className={classes.paragraph}>Call your Credit Union for more information.</p>
                                    <p className={classes.paragraph}>*Interest rates may vary based on the member(s) credit score and type of loan.</p>
                                </div>
                                
                                <img src="/imgs/eh.gif" alt="" className={classes.footerImg}/>
                            </div>
                        </div>
                </div>


            </MainContent>

            <Footer />
        </main>
  )
};

export default LoanRatesContainer;
