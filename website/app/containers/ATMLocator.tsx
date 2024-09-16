'use client';
import React, { useEffect, useState } from 'react';
import {useStyles, Hero, MainContent,} from '../styles/atm_locator';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';


const ATMLocatorContainer: React.FC = () => {
    const classes = useStyles();

    const [needed, setNeeded] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    const handleStarLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName("home-star-atm")
        setNeeded(true)
    };

    useEffect(() => {
        const sectionEl = document.getElementById("atm-locators-hero")
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
            <Hero id='atm-locators-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>ATM LOCATORS</h1>
                </div>
            </Hero>

            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Never Fret About Fees</h2>
                                </div>

                                <p className={classes.paragraph} style={{marginBottom: '40px'}}>Find a free ATM with any of the ATM locators below.</p>

                                
                                <a onClick={handleStarLink} className='linkImgBtn'>
                                    <img src="/imgs/star.gif" style={{border: 'none', maxWidth: '100%', verticalAlign: 'middle'}} alt="" />
                                </a>

                            </div>
                        </div>
                </div>
            </MainContent>

             <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName}/>
            <Footer />
        </main>
  )
};

export default ATMLocatorContainer;
