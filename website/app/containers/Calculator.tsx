'use client'
import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import {useStyles, Hero, MainContent, } from '../styles/calculator';


const CalculatorContainer: React.FC = () => {
    const classes = useStyles();

    useEffect(() => {
        const sectionEl = document.getElementById("calculator-hero");
        const handleScroll = () => {
            const position = 217.168 + window.scrollY * 0.65
            if(sectionEl){
                if(position >= 500){
                    sectionEl.style.backgroundPosition = `0px -500px`
                }else{
                    sectionEl.style.backgroundPosition = `0px -${position}px`
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);



    const openNewWindow1 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_01_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow2 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_02_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow3 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_03_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow4 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_04_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow5 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_05_v2/upfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow6 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_06_v2/upfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow7 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_07_v2/upfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };


      const openNewWindow8 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/auto_01_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow9 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/auto_02_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow10 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/auto_03_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow11 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/auto_04_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow12 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/auto_05_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };


      const openNewWindow13 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/loan_01_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow14 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/loan_04_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow15 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/loan_05_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow16 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/loan_06_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow17 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/loan_07_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };



      const openNewWindow18 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/loan_02_v2', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow19 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/save_01_v2/tmfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };


      const openNewWindow20 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/retire_01_v2/upfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };
      const openNewWindow21 = () => {
        const width = 900;
        const height = 700;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;
      
        window.open('https://my.homecu.net/calcs/retire_02_v2/upfcu', '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
      };

  return (
        <main>
            <Hero id='calculator-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Calculator</h1>
                </div>
            </Hero>
            
            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Savings Calculators</h2>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow1}>
                                    <a href='#' className={classes.subLink}>What will my savings be worth?</a>
                                </div>
                                <div className={classes.sub2} onClick={openNewWindow2}>
                                    <a href='#' className={classes.subLink}>How long will it take for my savings goals to be met?</a>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow3}>
                                    <a href='#' className={classes.subLink}>What will it take to become a millionaire?</a>
                                </div>

                                <div className={classes.sub2} onClick={openNewWindow4}>
                                    <a href='#' className={classes.subLink}>What will it take to save for a college education?</a>
                                </div>
                                
                                <div className={classes.sub} onClick={openNewWindow5}>
                                    <a href='#' className={classes.subLink}>What is the cost of waiting to save?</a>
                                </div>
                                
                                <div className={classes.sub2} onClick={openNewWindow6}>
                                    <a href='#' className={classes.subLink}>How much more can I save by spending less?</a>
                                </div>
                                
                                <div className={classes.sub} onClick={openNewWindow7} style={{marginBottom: '2rem'}}>
                                    <a href='#' className={classes.subLink}>How will different interest rates affect savings?</a>
                                </div>


                                {/* divid */}

                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Auto Calculators</h2>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow8}>
                                    <a href='#' className={classes.subLink}>How much will my monthly payments be?</a>
                                </div>
                                <div className={classes.sub2} onClick={openNewWindow9}>
                                    <a href='#' className={classes.subLink}>How much can I afford for a vehicle?</a>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow10}>
                                    <a href='#' className={classes.subLink}>Which is the best vehicle loan?</a>
                                </div>

                                <div className={classes.sub2} onClick={openNewWindow11}>
                                    <a href='#' className={classes.subLink}>Should I take the rebate or special financing?</a>
                                </div>
                                
                                <div className={classes.sub} onClick={openNewWindow12} style={{marginBottom: '2rem'}}>
                                    <a href='#' className={classes.subLink}>Should I pay cash or finance?</a>
                                </div>
                            



                                {/* Divid */}
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Loan Calculators</h2>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow13}>
                                    <a href='#' className={classes.subLink}>How can I pay off my debt?</a>
                                </div>
                                <div className={classes.sub2} onClick={openNewWindow14}>
                                    <a href='#' className={classes.subLink}>How much will my payments be?</a>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow15}>
                                    <a href='#' className={classes.subLink}>What is my debt ratio?</a>
                                </div>

                                <div className={classes.sub2} onClick={openNewWindow16}>
                                    <a href='#' className={classes.subLink}>How much will I save paying bi-weekly?</a>
                                </div>
                                
                                <div className={classes.sub} onClick={openNewWindow17} style={{marginBottom: '2rem'}}>
                                    <a href='#' className={classes.subLink}>Should I Consolidate My Debt?</a>
                                </div>




                                {/* Divide */}
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Mortgage Calculators</h2>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow18}>
                                    <a href='#' className={classes.subLink}>What will my monthly mortgage payment be?</a>
                                </div>
                                <div className={classes.sub2} onClick={openNewWindow19} style={{marginBottom: '2rem'}}>
                                    <a href='#' className={classes.subLink}>What willmy savings be worth?</a>
                                </div>




                                {/* Divide */}
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Retirement Calculators</h2>
                                </div>

                                <div className={classes.sub} onClick={openNewWindow20}>
                                    <a href='#' className={classes.subLink}>Am I saving enough for retirement?</a>
                                </div>
                                <div className={classes.sub2} onClick={openNewWindow21} style={{marginBottom: '2rem'}}>
                                    <a href='#' className={classes.subLink}>How Does An IRA, Roth IRA, and Traditional Savings Compare?</a>
                                </div>
                                
                        
                            </div>
                        </div>
                </div>
            </MainContent>

            <Footer />
        </main>
  )
};

export default CalculatorContainer;