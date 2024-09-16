import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import CurrencyInput from 'react-currency-input-field';


const handleLimitTransactionClose =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-limit-transacation');
    sidebarEl?.classList.remove('show');
};
const handleEnterPinOpen =()=>{
    handleLimitTransactionClose();

    const sidebarEl = document.getElementById('sidebar-wrapper-enter-pin');
    sidebarEl?.classList.add('show');
};

interface Props{};
const SetTransactionLimitPopup: React.FC<Props> = ({}) => {
  const [minValue, setMinValue] = useState('500000');
  const [maxValue, setMaxValue] = useState('5000000');
  const [minMaxBool, setMinMaxBool] = useState(false);

  const [title, setTitle] = useState('Elite to Elite');
  const handleSwitchBank = (id: string , otherID: string) =>{
    document.getElementById(id)?.classList.add('active');
    document.getElementById(otherID)?.classList.remove('active');
    if(id === 'custom-large-badge-limit-trasacation-id-1'){
        setTitle('Elite to Elite')
    }else{
        setTitle('Elite to Other Banks')
    }
  };

  useEffect(()=>{
    if(Number(maxValue) < 1 || Number(minValue) < 1 || !maxValue || !minValue){
        setMinMaxBool(true)
    }else{
        setMinMaxBool(false)
    }
  }, [minValue, maxValue]);


  return (
    <div id='sidebar-wrapper-limit-transacation' className='sidebar-wrapper-receive-funds'>
        
        <div className='sidebar-receive-funds-beneficiariesmodal-dialog modal-dialog-scrollable modal-dialog-420-important'>
            <aside className='sidebar-receive-funds-beneficiaries' style={{padding: '0 0.6rem'}}>
                
                <div className='limit-transaction-header'>
                <h6 className="limit-transaction-header-h6">{title}</h6>
                </div>


                <div className='funds-beneficiaries-body'>
                <div style={{margin: '1rem 0'}}>




                    <div style={{marginBottom: '3rem', height: '330px'}}>
                    <div style={{position: 'relative', overflow: 'hidden'}}>
                        <Scrollbars 
                        style={{transform: 'translateZ(-100px)', height: '340px'}}
                        autoHide
                        autoHideTimeout={1000}
                        autoHideDuration={200}>
                            
                            <div style={{marginBottom: '1.4rem'}}>
                                <label className='custom-large-badge-limit-trasacation-label'>Account Type</label>

                                <div className="limit-transaction-past-wrapper">
                                    <div role="button" id='custom-large-badge-limit-trasacation-id-1' className="custom-large-badge-limit-trasacation active" onClick={()=> handleSwitchBank('custom-large-badge-limit-trasacation-id-1', 'custom-large-badge-limit-trasacation-id-2')}>Elite Union</div>
                                    <div role="button" id='custom-large-badge-limit-trasacation-id-2' className="custom-large-badge-limit-trasacation" onClick={()=> handleSwitchBank('custom-large-badge-limit-trasacation-id-2', 'custom-large-badge-limit-trasacation-id-1')}>Other Banks</div>
                                </div>
                            </div>


                            <div style={{marginBottom: '1.4rem'}}>
                                <label className='custom-large-badge-limit-trasacation-label'>Bullet Limit ($)</label>

                                <div style={{marginBottom: '10px'}}>
                                    <CurrencyInput 
                                        id='desiredloadamount'
                                        name="desiredloadamount" 
                                        decimalsLimit={2} 
                                        className='limit-trasacation-search'
                                        defaultValue={'500000'}
                                        onValueChange={(value, name, values) => setMinValue(value!)}
                                    />
                                    {/* <input type="text" className='limit-trasacation-search' /> */}
                                </div>
                            </div>

                            <div style={{marginBottom: '1.4rem'}}>
                                <label className='custom-large-badge-limit-trasacation-label'>Daily Limit ($)</label>

                                <div style={{marginBottom: '10px'}}>
                                    <CurrencyInput 
                                        id='desiredloadamount'
                                        name="desiredloadamount" 
                                        decimalsLimit={2} 
                                        className='limit-trasacation-search'
                                        defaultValue={'5000000'}
                                        onValueChange={(value, name, values) => setMaxValue(value!)}
                                    />
                                </div>
                            </div>


                            <div className="limit-transaction-past-wrapper">
                                <button type="button" className="btn groom-panel-2-content-text-btn-limit-transaction1" onClick={handleLimitTransactionClose}>Cancel</button>
                                <button type="button" className="btn groom-panel-2-content-text-btn-limit-transaction2" disabled={minMaxBool} style={{opacity: `${ minMaxBool ? '0.5' : '1' }`}} onClick={handleEnterPinOpen}>Proceed</button>
                            </div>

                        </Scrollbars>
                    </div>
                    </div>
                </div>
                </div>

            </aside>
        </div>
    </div>
  )
};

export default SetTransactionLimitPopup;
