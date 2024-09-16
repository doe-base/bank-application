'use client'
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { CiMoneyCheck1 } from "react-icons/ci";
import { useStyles, Hero, MainContent, } from '../styles/checking_accounts';
import * as ROUTES from '../constants/routes'
import Popup from '../components/Popup/Popup';
import Footer from '../components/Footer/Footer';


const CheckingAccountsContainer: React.FC = () => {
    const classes = useStyles()

    const [needed, setNeeded] = useState<boolean>(false);
    const [name, setName] = useState<string>('');


    const handleLessLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName('checking_accounts_less')
        setNeeded(true)
    };
    const handleStreetLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName('main_street_check')
        setNeeded(true)
    };


    useEffect(() => {
        const sectionEl = document.getElementById("checking-account-hero");
        const handleScroll = () => {
            const position = 217.168 + window.scrollY * 0.65
            if(sectionEl){
                if(position >= 500){
                    sectionEl.style.backgroundPosition = `0px -500px`
                }else{
                    sectionEl.style.backgroundPosition = `0px -${position}px`
                };
            };
            
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
        <main>
            <Hero id='checking-account-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Checking Accounts</h1>
                </div>
            </Hero>

            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Share Draft (Checking) Accounts</h2>
                                </div>

                                <p className={classes.paragraph} style={{marginBottom: '2rem'}}>A Credit Union Share Draft account is an alternative to a traditional checking account at a bank and offers you the savings and convenience you want to manage your personal day-to-day finances.</p>
                                <p className={classes.paragraph} style={{marginBottom: '2rem'}}>There is no minimum balance, no per check charge and no monthly service fee. The only thing you pay for is the printing of your choice of drafts when you need them.</p>
                                <p className={classes.paragraph} style={{marginBottom: '2rem'}}>You'll receive a monthly statement so you may reconcile your check register accordingly and Overdraft Protection and Courtesy Pay is available.</p>


                                <div>
                                    <a className={classes.linkBtn} style={{display: 'inline'}} href={ROUTES.CONTACT_US}>Contact our Office</a>
                                    <p className={classes.paragraph} style={{display: 'inline'}}>today to open your Credit Union Share Draft Account!</p>
                                </div>

                                
                                <div style={{margin: '80px 0'}}>
                                    <div className={classes.pageTitle}>
                                        <h2 className={classes.pageTitleH2}>Reorder Checks</h2>
                                    </div>
                                    <p className={classes.paragraph} style={{marginBottom: '2rem'}}>Reordering checks online has never been easier. Choose a check provider and submit your reorder below.</p>



                                    <Grid container style={{justifyContent: 'space-between'}}>
                                        <Grid item xs={12} sm={5.65}>
                                            <div id='card-holder' className={classes.pageCard}>
                                                <div id='card-icon-holder' className={classes.cardIconHolder}>
                                                    <div id='card-icon-icon' className={classes.cardIcon}>
                                                        <CiMoneyCheck1 style={{fontSize: '3rem'}}/>
                                                    </div>
                                                </div>
                                                <h3 className={classes.cardH3}>Checks For Less</h3>
                                                <h3 className={classes.cardH3}>
                                                    <a className={classes.cardLink} onClick={(e)=>handleLessLink(e)} href='https://www.bank-a-count.com/Account/Orders/Checks/OrderChecks/Consumer/SignIn.asp?RTNum=271985556'>Reorder Checks</a>
                                                </h3>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={5.65}>
                                            <div id='card-holder2' className={classes.pageCard}>
                                                <div id='card-icon-holder2' className={classes.cardIconHolder}>
                                                    <div id='card-icon-icon2' className={classes.cardIcon}>
                                                        <CiMoneyCheck1 style={{fontSize: '3rem'}}/>
                                                    </div>
                                                </div>
                                                <h3 className={classes.cardH3}>Main Street Checks</h3>
                                                <h3 className={classes.cardH3}>
                                                    <a className={classes.cardLink} onClick={(e)=>handleStreetLink(e)} href='https://www.leghrefacymemberservices.net/LOES/main/interfacewww.aspx?UseHeader=Yes'>Reorder Checks</a>
                                                </h3>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>

                            </div>
                        </div>
                </div>


            </MainContent>


            <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName}/>
            <Footer />
        </main>
  )
};

export default CheckingAccountsContainer;
