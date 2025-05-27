'use client';
import React, { useState } from 'react';
import AuthCode from 'react-auth-code-input';

// APP POPUPS ARE POSITIONED IN Setting/Account Management PAGE
const handleChangePinClose =()=>{
    document.getElementById('sidebar-wrapper-change-pin-setting')?.classList.remove('show');
};
interface Props{};
const ChangePin: React.FC<Props> = ({}) => {
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  return (
    <div id='sidebar-wrapper-change-pin-setting' className='sidebar-wrapper-receive-funds'>
        
        <div className='sidebar-receive-funds-beneficiariesmodal-dialog modal-dialog-scrollable modal-dialog-420-important'>
            <aside className='sidebar-receive-funds-beneficiaries' style={{padding: '0 0.6rem'}}>
                
            <div className='limit-transaction-header'>
              <h6 className="limit-transaction-header-h6">Change Transaction Pin</h6>
            </div>


            <div className='funds-beneficiaries-body'>
              <div style={{margin: '1rem 0'}}>

                <div style={{textAlign: 'center', marginBottom: '1.4rem'}}>
                    <label className="custom-large-badge-limit-trasacation-label" style={{padding: '0rem 0', color: '#555'}}>Current Pin</label>

                    <AuthCode containerClassName='pin-input' length={4} onChange={handleOnChange} />
                </div>


                <div style={{textAlign: 'center', marginBottom: '1.4rem'}}>
                    <label className="custom-large-badge-limit-trasacation-label" style={{padding: '0rem 0', color: '#555'}}>New Pin</label>

                    <AuthCode containerClassName='pin-input' length={4} onChange={handleOnChange} />
                </div>


                <div style={{textAlign: 'center', marginBottom: '1.4rem', color: '#555'}}>
                    <label className="custom-large-badge-limit-trasacation-label" style={{padding: '0rem 0', color: '#555'}}>Confirm New Pin</label>

                    <AuthCode containerClassName='pin-input' length={4} onChange={handleOnChange} />
                </div>


                <div style={{marginBottom: '3rem', height: '100%'}}>
                  <div style={{position: 'relative', overflow: 'hidden'}}>
                
                        <div className="pin-input-past-wrapper">
                            <button type="button" className="btn groom-panel-2-content-text-btn-change-pin-1" onClick={handleChangePinClose}>Cancel</button>
                            <button type="button" className="btn groom-panel-2-content-text-btn-change-pin-2">Proceed</button>
                        </div>

                  </div>
                </div>
              </div>
            </div>

            </aside>
        </div>
    </div>
  )
};

export default ChangePin;
