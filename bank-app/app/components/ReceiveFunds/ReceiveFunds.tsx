'use client';
import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import CurrencyInput from 'react-currency-input-field';
import useStyles from './style';
import { useGetData } from '../../context/GetDataContext';



interface Props{};
const ReceiveFundsPopup: React.FC<Props> = ({}) => {
  const { dashboardData } = useGetData();
  const { accountnumber } = dashboardData
  const classes = useStyles();
  const etRef = useRef<any>(null)


  const rmShowInSec = () => {
    document.getElementById('rf-copied')?.classList.remove('show');
  };
  const copyToClipboardEt = () => {
    etRef.current.select()
    document.execCommand('copy');
    document.getElementById('rf-copied')?.classList.add('show');
    setTimeout(() => {
        rmShowInSec()
    }, 7000);
  };
  const handleUsCardSwitch =()=> {
    document.getElementById('switch-useCard')?.classList.remove('show');
    document.getElementById('switch-useCardInput')?.classList.add('show');
  };
  const handleTopupClose =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-receive-funds')
    sidebarEl?.classList.remove('show')
  }

  return (
    <main id='sidebar-wrapper-receive-funds' className='sidebar-wrapper-receive-funds'>
      <aside className='sidebar-receive-funds'>
        <div className={classes.asideInner}>
          <button type="button" className="btn-receive-funds close" onClick={handleTopupClose}>×</button>
          
          <section className='responsive-20px'>

                <div className='rf-title-holder'>
                    <h6>Fund Account</h6>
                    <p>Fund Your Elite Account With</p>
                </div>


                <Grid container style={{justifyContent: 'space-between'}}>
                    <Grid item xs={12} lg={3.85} style={{margin: '1rem 0' }}>
                        <div className='rf-boxxie'>

                            <div className="rf-small-talk" style={{marginBottom: '10px'}}>
                                <div title='Local Bank'>
                                    <img src="/imgs/bank.svg" alt="" />
                                </div>


                                <h6>Your Local Bank</h6>
                                <p>Make a bank transfer with your bank app, USSD code or a deposit at the bank</p>
                            
                            </div>

                            <div className='rf-input-group' style={{flexDirection: 'column'}}>
                                <div className="rf-small-form" style={{marginBottom: '5px'}}>
                                    <label>Your Bank Account Number</label>

                                    <div id='rf-copied' className="rf-small-tool fadeInRF">Copied!</div>
                                </div>


                                <div className='rf-flexxx'>
                                    <div style={{padding: '0'}}>
                                        <input ref={etRef} type="text" className='rf-bordered' id='primaryNumber' readOnly value={accountnumber} />
                                    </div>
                                    <div style={{padding: '0'}}>
                                        <div>
                                            <button className='btn rf-botton' onClick={copyToClipboardEt}>
                                                <div title='Copy Account Number'>
                                                    <img src="/imgs/link.svg" alt="" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Grid>

                    <Grid item xs={12} lg={3.85} style={{margin: '1rem 0' }}>
                        <div className='rf-boxxie'>
                            <div className="rf-small-talk" style={{marginBottom: '10px'}}>
                                <div title='Card'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" className="injected-svg" data-src="https://res.cloudinary.com/dswxtf2ay/image/upload/v1583075515/Mint_InternetBanking/illustrations/your-card_lb389m.svg">
                                    <circle cx="30" cy="30" r="30" fill="#FAF5EB"></circle>
                                    <rect x="11.1309" y="17.7666" width="37.739" height="24.4672" fill="#D0A23C"></rect>
                                    <rect x="11.1309" y="21.7439" width="37.739" height="4.80494" fill="#D0A23C"></rect>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1304 16.6667H48.8696C49.494 16.6667 50 17.1591 50 17.7666V42.2333C50 42.8408 49.494 43.3333 48.8696 43.3333H11.1304C10.5061 43.3333 10 42.8409 10 42.2333V17.7666C10 17.1592 10.506 16.6667 11.1304 16.6667ZM47.7392 20.6436V18.8666H12.2607V20.6436H47.7392ZM47.7392 25.4486H12.2607V22.8435H47.7392V25.4486ZM12.2607 27.6486V41.1333H47.7392V27.6486H12.2607Z" fill="#77512F"></path>
                                    <rect x="33.0049" y="31.4029" width="11.2635" height="6.27652" fill="#EAECF0"></rect>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0445 38.7792H44.2296C44.8755 38.7792 45.3991 38.2867 45.3991 37.6792V31.4026C45.3991 30.7951 44.8755 30.3026 44.2296 30.3026H33.0445C32.3986 30.3026 31.875 30.795 31.875 31.4026V37.6792C31.875 38.2867 32.3985 38.7792 33.0445 38.7792ZM43.0599 36.5793H34.2139V32.5026H43.0599V36.5793Z" fill="#77512F"></path>
                                    </svg>
                                </div>
                                <h6>Your Card</h6>
                                <p>You can add your a credit card to transfer funds to your Elite Union Bank Account</p>
                            </div>

                            <div style={{height: '180px'}}>
                                <div id='switch-useCard' className='rf-input-group-switch show'>
                                    <div className='rf-flexxx'>
                                        <button className='btn rf-card-button' onClick={handleUsCardSwitch}>Use Card</button>
                                    </div>
                                </div>

                                <div id='switch-useCardInput' className="rf-small-form-switch" style={{padding: '0'}}>
                                    <label className="rf-mkTell">How much do you want to fund your account with?</label>
                                    <CurrencyInput 
                                        id='card-amount'
                                        name="card-amount" 
                                        decimalsLimit={2} 
                                        className="rf-form-control"
                                    />
                                    <span className='error-text'>Sorry, account funding service is currently unavailable. Please try again in a few minutes <a>try again</a></span>
                                    <button className='btn rf-card-button'>Proceed</button>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} lg={3.85} style={{margin: '1rem 0' }}>
                        <div className='rf-boxxie'>
                            <div className="rf-small-talk" style={{marginBottom: '10px'}}>
                                <div title=''>
                                    <img src="/imgs/quick-teller.svg" alt="" />
                                </div>

                                <h6>Quick Teller</h6>
                                <p>Fund your account using quick teller payment gateway</p>
                            </div>

                            <div className='rf-input-group-last'>
                                <div className='rf-flexxx'>
                                    <button className='btn rf-card-button'>Go To Quick Teller</button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

          </section>
        </div>

        
      </aside>
    </main>
  )
};

export default ReceiveFundsPopup;
