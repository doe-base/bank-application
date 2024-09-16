'use client';
import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import { useStyles, Hero, MainContent, } from '../styles/deposite_rate';


const DepositeRateContainer: React.FC = () => {
    const classes = useStyles();

    useEffect(() => {
        const sectionEl = document.getElementById("deposite-rate-hero");
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
            <Hero id='deposite-rate-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Deposit Rates</h1>
                </div>
            </Hero>

            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                                <div style={{margin: '50px 0'}}>
                                    <table className="ratetable twoCol" id="new-cars">
                                        <caption className={classes.caption}>
                                            <div className="inputdiv">Current Savings Rates</div>
                                        </caption>
                                        <tbody>
                                            <tr> 
                                                <th className={classes.th}>ACCOUNT TYPE</th>
                                                <th className={classes.th} style={{textAlign: 'center'}}>DIVIDEND RATE</th>
                                                <th className={classes.th} style={{textAlign: 'center'}}>APR*</th>
                                            </tr>
                                            <tr> 
                                                <td>Shares</td>
                                                <td>.20%</td>
                                                <td>.20%</td>
                                            </tr>
                                            <tr> 
                                                <td>Clubs</td>
                                                <td>.10%</td>
                                                <td>.10%</td>
                                            </tr>
                                            <tr> 
                                                <td>Roth IRA</td>
                                                <td>.99%</td>
                                                <td>1.00%</td>
                                            </tr>
                                            <tr> 
                                                <td>Traditional IRA</td>
                                                <td>.99%</td>
                                                <td>1.00%</td>
                                            </tr>
                                            <tr> 
                                                <td>Coverdell IRA</td>
                                                <td>1.50%</td>
                                                <td>1.51%</td>
                                            </tr>
                                            <tr> 
                                                <td colSpan={3} className={classes.tablefoot}>*APY is the Annual Percentage Yield.</td>
                                            </tr>
                                        </tbody>
                                    </table>



                                    <div style={{width: '100%', textAlign: 'center', margin: '30px 0'}}>
                                        <p className={classes.paragraph} style={{textAlign: 'left', fontSize: '0.879rem'}}>We offer CD's with 6 - 12 - 24 and 36 month terms, at competitive rates. The minimum investment for a 6 month CD is $500.00, and 12, 24 and 36 month CD's is $1000.00. As always, our CD's are federally insured through the NCUA. Dividends will be compounded monthly and credited quarterly on the anniversary date. Penalties apply for early withdrawal.</p>
                                    </div>


                                    <div style={{marginBottom: '30px', fontSize: '0.879rem'}}>
                                        <p className={classes.paragraph}>Rates Effective 11/01/2022.</p>
                                        <p className={classes.paragraph}>Rates are subject to change.</p>
                                    </div>


                                    <table className="ratetable twoCol" id="new-cars">
                                        <caption className={classes.caption}>
                                            <div className="inputdiv">Certificates of Deposit Rates</div>
                                        </caption>
                                        <tbody>
                                            <tr> 
                                                <th className={classes.th}>Certificate</th>
                                                <th className={classes.th} style={{textAlign: 'center'}}>Dividend Rate</th>
                                                <th className={classes.th} style={{textAlign: 'center'}}>APR*</th>
                                            </tr>
                                            <tr> 
                                                <td>6 Month Minimum $500.00*</td>
                                                <td>.99%</td>
                                                <td>1.00%</td>
                                            </tr>
                                            <tr> 
                                                <td>12 Month</td>
                                                <td>1.25%</td>
                                                <td>1.25%</td>
                                            </tr>
                                            <tr> 
                                                <td>24 Month</td>
                                                <td>1.49%</td>
                                                <td>1.50%</td>
                                            </tr>
                                            <tr> 
                                                <td>36 Month</td>
                                                <td>1.73%</td>
                                                <td>1.75%</td>
                                            </tr>
                            
                                            <tr> 
                                                <td colSpan={3} className={classes.tablefoot}>*APY is the Annual Percentage Yield.</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div style={{width: '100%', textAlign: 'center', margin: '30px 0'}}>
                                        <p className={classes.paragraph} style={{textAlign: 'left', fontSize: '0.879rem'}}>DIVIDENDS WILL BE COMPOUNDED AND CREDITED TO ACCOUNTS EVERY QUARTER.</p>
                                    </div>

                                    <div style={{marginBottom: '30px'}}>
                                        <p className={classes.paragraph}>*APY is the Annual Percentage Yield.</p>
                                        <p className={classes.paragraph}>Rates Effective 11/01/2022.</p>
                                        <p className={classes.paragraph}>Rates subject to change quarterly.</p>
                                        <p className={classes.paragraph}>Dividends paid 4th Quarter.</p>
                                    </div>


                                    <img src="/imgs/ncua.gif" alt="ncua" className={classes.imgs}/>

                                </div>
                            </div>
                        </div>
                </div>


            </MainContent>

            <Footer />
        </main>
  )
};

export default DepositeRateContainer;
