'use client';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useStyles, Hero, MainContent } from '../styles/credit_card';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';
import * as ROUTES from "../constants/routes";


const CreditCardContainer: React.FC = () => {
    const classes = useStyles();

    const [needed, setNeeded] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    const handleLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName('credit_card')
        setNeeded(true)
    };

    useEffect(() => {
        const sectionEl = document.getElementById("credit-card-hero");
        const handleScroll = () => {
            const position = 217.168 + window.scrollY * 0.65;
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
            <Hero id='credit-card-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Credit Cards</h1>
                </div>
            </Hero>

            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                                
                                <div style={{marginBottom: '4rem'}}>
                                    <Grid container style={{justifyContent: 'space-between'}}>
                                        <Grid item xs={12} sm={5.65}>
                                            <div id='card-holder' className={classes.pageCard}>
                                                <div id='card-icon-holder' className={classes.cardIconHolder}>
                                                    <div id='card-icon-icon' className={classes.cardIcon}>
                                                    <i className="fa fa-file-text-o" style={{fontSize: '2.5rem'}}></i>
                                                    </div>
                                                </div>
                                                
                                                <a className={classes.cardLink} href={ROUTES.LOAN_APPLICATION}>Apply For Credit Card</a>
                                                <h3 className={classes.cardH3}>Apply Online from Anywhere</h3>
                                                
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={5.65}>
                                            <div id='card-holder2' className={classes.pageCard}>
                                                <div id='card-icon-holder2' className={classes.cardIconHolder}>
                                                    <div id='card-icon-icon2' className={classes.cardIcon}>
                                                        <i className="fa fa-credit-card" style={{fontSize: '2.5rem'}}></i>
                                                    </div>
                                                </div>

                                                <a className={classes.cardLink} onClick={(e)=>handleLink(e)} href='https://www.eZCardInfo.com'>eZCardInfo</a>
                                                <h3 className={classes.cardH3}>Access Your Credit Card Easily</h3>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>


                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>VISA Account Types</h2>
                                </div>

                                <ul className={classes.paragraph} style={{fontSize: '1rem', paddingLeft: '20px',}}>
                                    <li>The Visa Classic Card has a 12.00% interest rate and is eligible for qualified members.</li>
                                    <li>The Visa Classic Preferred Card has a 10.50% interest rate and is eligible to qualified full-house members. Full-house members shall be defined as members who maintain a share draft and debit card account.</li>
                                </ul>

                            </div>
                        </div>
                </div>

            </MainContent>

            <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName}/>
            <Footer />
        </main>
  )
};

export default CreditCardContainer;
