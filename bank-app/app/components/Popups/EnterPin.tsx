import React, { useState } from 'react';
import AuthCode from 'react-auth-code-input';

// APP POPUPS ARE POSITIONED IN Investments/new & Settings/account-setting PAGE
const handleEnterPinClose =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-enter-pin');
    sidebarEl?.classList.remove('show');
};

interface Props{};
const EnterPin: React.FC<Props> = ({}) => {
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };

 const cancelTransaction =()=>{
    handleEnterPinClose();
 };

  return (
    <div id='sidebar-wrapper-enter-pin' className='sidebar-wrapper-receive-funds'>
        
        <div className='sidebar-receive-funds-beneficiariesmodal-dialog modal-dialog-scrollable modal-dialog-420-important'>
            <aside className='sidebar-receive-funds-beneficiaries' style={{padding: '0 0.6rem'}}>
                
                <div className='funds-beneficiaries-header'>
                <h6 className="funds-ben-header-h6">Enter Pin</h6>
                <button type="button" className="btn-beneficiaries-funds close" onClick={cancelTransaction}>×</button>
                </div>


                <div className='funds-beneficiaries-body' style={{paddingBottom: '0'}}>
                <div style={{margin: '0rem 0'}}>
                    <div style={{marginBottom: '3rem'}}>
                    <div style={{position: 'relative', overflow: 'hidden'}}>
                        
                            <div className='enter-pin-input-body'>

                                <label className="custom-large-badge-limit-trasacation-label" style={{padding: '1rem 0'}}>Please Enter Your Transaction Pin To Continue</label>

                                <AuthCode containerClassName='pin-input' length={4} onChange={handleOnChange} />
                            </div>
                            
                            <div className="limit-transaction-past-wrapper">
                                <button type="button" className="btn groom-panel-2-content-text-btn-limit-transaction1-enter-pin" onClick={cancelTransaction}>Cancel</button>
                                <button type="button" className="btn groom-panel-2-content-text-btn-limit-transaction2">Proceed</button>
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
export default EnterPin;
