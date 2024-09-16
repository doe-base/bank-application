'use client';
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import {useStyles, Hero, MainContent} from '../styles/site_map';
import * as ROUTES from '../constants/routes';
import Popup from '../components/Popup/Popup';

const SiteMapContainer: React.FC = () => {
    const classes = useStyles();

    const [needed, setNeeded] = useState<boolean>(false);
    const [name, setName] = useState<string>('');



    const handleeZCardInfo = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName("credit_card")
        setNeeded(true)
    };
    const handleTermandConditions = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName("footer-terms-of-service")
        setNeeded(true)
    };


  return (
        <main>
            <Hero id='site-map-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Site Map</h1>
                </div>
            </Hero>

            <MainContent>
                <section style={{padding: '50px 0'}}>
                    <div style={{marginBottom: '50px', width: '100%'}}>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>


                        <div className={classes.sbox}>

                            <div className={classes.title}>My Credit Union</div>
                            <ul className={classes.sboxUl}>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.BECOME_A_MEMBER}>Become A Member</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.CONTACT_US}>Contact Us</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.HOLIDAY_SCHEDULE}>Holiday Schedule</a></li>
                                <li><a style={{color: '#b55e0c'}} href="/files/privacy.pdf" target="_blank">Privacy Policy</a></li>
                            </ul>
                        </div>


                        <div className={classes.sbox}>

                            <div className={classes.title}>Products & Services</div>
                            <ul className={classes.sboxUl}>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.LOAN_RATES}>Loan Rates</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.DEPOSITE_RATES}>Deposit Rates</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.CHECKING_ACCOUNTS}>Checking Accounts</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.CREDIT_CARDS}>Credit Cards</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.CU_SERVICE} target="_blank">CU Services</a></li>
                            </ul>
                        </div>



                        <div className={classes.sbox}>

                            <div className={classes.title}>Tools & Resources</div>
                            <ul className={classes.sboxUl}>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.LOAN_APPLICATION}>Loan Application</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.CALCULATOR}>Calculators</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.ATM_LOCATOR}>ATM Locators</a></li>
                                <li><a style={{color: '#b55e0c'}} onClick={handleeZCardInfo} href="https://www.eZCardInfo.com" target="_blank">eZCardInfo</a></li>
                                <li><a style={{color: '#b55e0c'}} href="/files/privacy.pdf" target="_blank">Verified By Visa</a></li>
                            </ul>
                        </div>
                        


                        <div className={classes.sbox}>

                            <div className={classes.title}>Other</div>
                            <ul className={classes.sboxUl}>
                                <li><a style={{color: '#b55e0c'}} onClick={handleTermandConditions}>Terms of Use</a></li>
                                <li><a style={{color: '#b55e0c'}} href="/files/fees.pdf" target='_blank'>Fee Schedule</a></li>
                                <li><a style={{color: '#b55e0c'}} href='/mcu-search-results/search-term'>Search</a></li>
                            </ul>
                        </div>

                        <div className={classes.sbox}>
                            <ul className={classes.sboxUl}>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.HOME}>Home Page</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.PROMOTION}>Promotions</a></li>
                                <li><a style={{color: '#b55e0c'}} href={ROUTES.HOME}>Online Banking Access</a></li>
                            </ul>
                        </div>


                        </div>
                    </div>

                    <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName}/>

                </section>
            </MainContent>

            <Footer />
        </main>
  )
};

export default SiteMapContainer;
