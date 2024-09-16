"use client";
import React, { useState, useEffect } from "react";
import useStyles from "../../styles/dashboard";
import { Grid } from "@mui/material";
import * as DASHBOARDROUTES from "../../constants/routes";


interface Props {
    firstname: string;
    accountnumber: number;
    balance: number;
    hidebalance: boolean;
    message: string;
};
const DashBoardContainer1: React.FC<Props>=({ 
    firstname, 
    accountnumber, 
    balance, 
    hidebalance, 
    message, })=> {

  const classes = useStyles();
  const [greeting, setGreeting] = useState('');
  const [hideBalanceBool, setHideBalanceBool] = useState(hidebalance);

  const updateGreeting = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  };
  const handleTopupOpen =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-receive-funds');
    sidebarEl?.classList.add('show');
  };
  const handleHideBalance = () =>{
    const h2el = document.getElementById('hideH2');
    if(balance && hideBalanceBool){
        h2el!.innerText = balance.toFixed(2)
    }else{
        h2el!.innerText = '$XXX.XXX'
    };

    const h4el = document.getElementById('hideH4');
    if(balance && hideBalanceBool){
        h4el!.innerText = balance.toFixed(2)
    }else{
        h4el!.innerText = '$XXX.XXX'
    };

    const hideBalance = document.getElementById('hideBalanceSpan');
    if(balance && !hideBalanceBool){
        hideBalance!.innerText = 'Show Balance'
    }else{
        hideBalance!.innerText = 'Hide Balance'
    };

    setHideBalanceBool(!hideBalanceBool)
  };


  useEffect(() => {
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);
    return () => clearInterval(intervalId);
  }, []);



  return (

  
            <div className="container">
                <div style={{margin: '3rem auto'}}>
                    <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                        <Grid item>
                            <div className="dashboardIComponetntro">
                                <h4 className="dashboardIntro__heading">{greeting}, {firstname}</h4>
                                <p className="dashboardIntro__paragraph" style={{marginBottom: '5px'}}>
                                    <span className="dashboardIntro__paragraph__bigTitle">Account Number: <strong>{accountnumber}</strong></span><span className="dashboardIntro__paragraph__accNumber-text pl-2"></span>
                                </p>
                            </div>
                        </Grid>
                        <Grid item>
                            {
                                message != ""
                                ?
                                    <div className="verification__barner danger" style={{width: 'fit-content'}}>
                                        <div className="info">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="injected-svg" data-src="/static/media/info.e0b82d7c.svg">
                                                    <path d="M11 22C4.9 22 0 17.1 0 11C0 4.9 4.9 0 11 0C17.1 0 22 4.9 22 11C22 17.1 17.1 22 11 22ZM11 2C6 2 2 6 2 11C2 16 6 20 11 20C16 20 20 16 20 11C20 6 16 2 11 2Z" fill="#d03c6a"></path>
                                                    <path d="M11 12C10.4 12 10 11.6 10 11V7C10 6.4 10.4 6 11 6C11.6 6 12 6.4 12 7V11C12 11.6 11.6 12 11 12Z" fill="#d03c6a"></path>
                                                    <path d="M11 16C10.7 16 10.5 15.9 10.3 15.7C10.1 15.5 10 15.3 10 15C10 14.9 10 14.7 10.1 14.6C10.2 14.5 10.2 14.4 10.3 14.3C10.6 14 11 13.9 11.4 14.1C11.5 14.1 11.5 14.1 11.6 14.2C11.6 14.2 11.7 14.3 11.8 14.3C11.9 14.4 12 14.5 12 14.6C12 14.7 12 14.9 12 15C12 15.1 12 15.3 11.9 15.4C11.8 15.5 11.8 15.6 11.7 15.7C11.5 15.9 11.3 16 11 16Z" fill="#d03c6a"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>{message}</span>
                                    </div>
                                :
                                    null
                            }
                        </Grid>
                    </Grid>
                </div>
  
  
                <div>
                    <section className="list-section">
                        <div className="list-section-item">
                            <div className="balance-box">
                                <div>
                                    <div>
                                        <div className="account-lead">
                                            <Grid container className={classes.row}>
                                                <Grid item xs={12} sm={6}>
                                                    <h6 style={{marginBottom: '1rem'}}>Account Balance</h6>
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <div style={{userSelect: 'none'}} className="balance-toggle" role="button" onClick={handleHideBalance}>
                                                        <img alt="" src="/imgs/nav-icons/hide.png" /><span id="hideBalanceSpan">Hide Balance</span>
                                                    </div>
                                                </Grid>
                                            </Grid>
  
                                            <Grid container>
                                                <Grid item xs={12} style={{marginTop: '3px'}}>
                                                    <h2 id='hideH2'>{balance && balance.toFixed(2)}</h2>
                                                </Grid>
                                                {/* <Grid item xs={5}>
                                                    
                                                </Grid> */}
                                            </Grid>
  
                                        </div>
                                    </div>
                                </div>
                                <Grid container className={classes.row} style={{marginTop: '1.6rem', alignItems: 'center'}}>
                                    <Grid item xs={12} sm={6} style={{marginBottom: '1rem'}}>
                                        <div className="ledger-balance">
                                                    
                                                        {/* <><h6>Ledger balance:</h6><h4>$XXX.XXX</h4></> */}
                                                        <><h6>Ledger balance:</h6><h4 id='hideH4'>{balance && balance.toFixed(2)}</h4></>
                                            
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} className="rm-flex-600" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <button className="btn fundAcc-btn" onClick={handleTopupOpen}>
                                            <div>
                                                <div style={{marginRight: '5px'}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#000" className="injected-svg" data-src="/static/media/white_plus_icon.33ca4294.svg">
                                                        <path d="M6.33691 1.87987V10.3978" stroke="white" stroke-width="2.4337" stroke-linecap="round"></path>
                                                        <path d="M10.5959 6.13884L2.07795 6.13884" stroke="white" stroke-width="2.4337" stroke-linecap="round"></path>
                                                    </svg>
                                                </div>
                                            </div> 
                                            <span>ADD MONEY</span>
                                        </button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
  
                        <div className="list-section-item">
                            <div className="quick-actions">
                                <h4 className="sub-heading">Quick Actions</h4>
                                <div className="quick-actions-row">
  
                                    <div className="quick-action">
                                        <a onClick={handleTopupOpen}>
                                            <div className="action-icon">
                                                <div className="action-icon-wrapper">
                                                    <span className="top-up-icon" style={{mask: "url(/imgs/nav-icons/top-up-col.svg) no-repeat center left"}}></span>
                                                </div>
                                                <h6>Top Up</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="quick-action">
                                        <a href={DASHBOARDROUTES.TRANSFER}>
                                            <div className="action-icon">
                                                <div className="action-icon-wrapper">
                                                    <span className="transer-icon" style={{mask: "url(/imgs/nav-icons/transfer.svg) no-repeat center left"}}></span>
                                                </div>
                                                <h6>Transfer</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="quick-action">
                                        <a href={DASHBOARDROUTES.PAY_BILL}>
                                            <div className="action-icon">
                                                <div className="action-icon-wrapper">
                                                    <span className="pay-bill-icon" style={{mask: "url(/imgs/nav-icons/pay-bill.svg) no-repeat center left"}}></span>
                                                </div>
                                                <h6>Pay Bill</h6>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="quick-action">
                                        <a href={DASHBOARDROUTES.ACCOUNT_SETTINGS}>
                                            <div className="action-icon">
                                                <div className="action-icon-wrapper">
                                                    <span className="piggy-icon" style={{mask: "url(/imgs/nav-icons/settings.svg) no-repeat center left", maskSize: '85%'}}></span>
                                                </div><h6>Settings</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
  

  );
};

export default DashBoardContainer1