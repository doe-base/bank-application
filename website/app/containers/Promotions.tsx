'use client';
import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import { useStyles, Hero, MainContent, } from '../styles/promotions';


const PromotionContainer: React.FC = () => {
    const classes = useStyles();

    useEffect(() => {
        const sectionEl = document.getElementById("promotions-hero");
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
      }, []);


  return (
        <main>
            <Hero id='promotions-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Promotions</h1>
                </div>
            </Hero>

            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>

                            <div className={classes.colFull}>
                                <div className={classes.blackbots}>
                                    <div className={classes.blackbotsPromoImg}></div>

                                    <div className={classes.promoDetailsWrapper}>
                                        <h2 className={classes.promoDetailsWrapperH2}>Need Cash Fast?</h2>

                                        <p className={classes.promoDetailsWrapperP}>Check out our Cash N' Dash Payday Alternative Loan<br/></p>


                                        <ul className={classes.promoDetailsWrapperUl}>
                                            <li>Borrow up to $1000</li>
                                            <li>3-6 Month Repayment Plan</li>
                                            <li>20.00% APR*</li>
                                            <li>NO Credit Check</li>
                                            <li>Same Day Approval</li>
                                            <li>$35 Application Fee</li>
                                        </ul>

                                        <p className={classes.promoDetailsWrapperP}></p>


                                        <a href="pdf/Elite_Loan_Application.pdf" target="_blank" className={classes.promoDetailsWrapperBtn}>Apply Today</a>

                                        <p className={classes.promoDetailsWrapperP}>*APR = Annual Percentage Rate.<br/>Some restrictions may apply</p>
                                    </div>
                                </div>


                                <div className={classes.blackbotsRight}>
                                    <div className={classes.blackbotsPromoImg2}></div>

                                    <div className={classes.promoDetailsWrapper}>
                                        <h2 className={classes.promoDetailsWrapperH2}>Mechanical Breakdown Protection</h2>

                                        <p className={classes.promoDetailsWrapperP}>Expensive repair bills can leave you stranded financially unless you have an extended service plan. We offer this valuable protection for much less than what you would pay elsewhere.<br/></p>


                                        <ul className={classes.promoDetailsWrapperUl}>
                                            <li>Competitive Price</li>
                                            <li>Cost can be financed into your loan payment</li>
                                            <li>24hr emergency roadside assistance</li>
                                            <li>Coverage may be cancelled at any time</li>
                                        </ul>

                                        <p className={classes.promoDetailsWrapperP}></p>


                                        <a href="pdf/Elite_Loan_Application.pdf" target="_blank" className={classes.promoDetailsWrapperBtn}>Contact us for more information</a>

                                        <p className={classes.promoDetailsWrapperP}>The purchase of MBP is voluntary and cannot be required as a condition of loan approval.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>


            </MainContent>

            <Footer />
        </main>
  )
};

export default PromotionContainer;
