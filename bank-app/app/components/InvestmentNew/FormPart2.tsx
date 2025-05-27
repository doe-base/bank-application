import React, { useEffect, useState } from "react";
import CurrencyInput from 'react-currency-input-field';


interface Props {};
const FormPart2: React.FC<Props>=({ })=>{

    const [investmentAmount, setInvestmentAmount] = useState('5000');
    const [monthDuration, setMonthDuration] = useState('3');
    const [activeBtn2, setActiveBtn2] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const handleSetpChange2 =()=>{
        document.getElementById(`groom-panel-active-option-investment-new-2`)?.classList.remove('active');
        document.getElementById(`groom-panel-active-option-investment-new-3`)?.classList.add('active');
    };

    useEffect(()=>{
        if(Number(investmentAmount) >= 5000 && isChecked){
            setActiveBtn2(false)
        }else{
            setActiveBtn2(true)
        }
    }, [ investmentAmount, isChecked ]);
      

    return (
        <div id="groom-panel-active-option-investment-new-2" className="groom-panel-2" style={{marginBottom: '50px', padding: '2rem 0'}}>
            <div className="groom-panel-2-inner"  style={{minHeight: 'calc(100vh - 250px)'}}>
                <div className="groom-panel-2-content">
                
                    <div className="investment-new-holder">
                            <div className="investment-new-step">Step 2</div>

                            <small className="investment-new-text--main">2 of 3 Done</small>
                    </div>

                    <div style={{width: '100%', margin: '1.5rem 0', textAlign: 'left'}}>
                        <h3 className="investment-new-sub-heading">Create Investment</h3>
                        <span className="investment-new-tiny__message">Enter your investment preferences</span>
                    </div>

                    <div style={{marginBottom: '1rem', textAlign: 'left'}}>
                        <div style={{marginBottom: '.25rem'}}>
                            <label className="investment-new-low-form-label">Amount ($)</label>
                            <div style={{position: 'relative'}}>
                                <CurrencyInput 
                                    id='desiredloadamount'
                                    name="desiredloadamount" 
                                    decimalsLimit={2} 
                                    className='limit-trasacation-search'
                                    defaultValue={'5000'}
                                    onValueChange={(value, name, values) => setInvestmentAmount(value!)}
                                />
                                {/* <input name="amount" type="number" maxLength={12} className="investment-new-form-control investment-new-ft-recipient-input" placeholder="Enter Amount" autoComplete="off"/> */}
                            </div>
                        </div>
                        <small className="investent-new-tiny__message">Minimum amount to invest is $5,000.00</small>
                    </div>

                    <div className="investment-new-select-field-container" style={{width: '100%', textAlign: 'left', marginBottom: '1rem'}}>
                            <label>Select Investment Duration</label>

                            <select 
                                name="investment-duration" 
                                id="investment-new-investment-duration"
                                className="investment-new-form-control investment-new-ft-recipient-input"
                                style={{ background: 'rgb(235, 236, 239)', fontSize: '0.9rem', color: '#000'}}
                                onChange={(e)=> setMonthDuration(e.currentTarget.value)}    
                            >
                                    {/* <option value="" disabled selected>Choose Duration</option> */}
                                    <option value="3">3 Months</option>
                                    <option value="6">6 Months</option>
                                    <option value="12">12 Months</option>
                            </select>
                    </div>

                    <div style={{marginBottom: '1rem', textAlign: 'left'}}>
                        <div style={{marginBottom: '.25rem'}}>
                            <label className="investment-new-low-form-label">Referral Code (optional)</label>
                            <div style={{position: 'relative'}}>
                                <input name="amount" type="text" maxLength={12} className="investment-new-form-control investment-new-ft-recipient-input" placeholder="Enter referral code" autoComplete="off"/>
                            </div>
                        </div>
                    </div>

                    <div style={{padding: '1.5rem 0', textAlign: 'left'}}>
                        <div className="investment-new-custom-control-custom-checkbox">
                            <input type="checkbox" className="investment-new-custom-control-input" id="terms" name="terms" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)}/>
                            <div className="investment-new-custom-control-label-zero-text">Mintyn investment<a href="https://mintyn.com/terms" className="investment-new-specialLink" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>, I confirm that I act on my own behalf</div>
                        </div>
                        <small className="investment-new-zero-text">I hereby create a Mintyn Investment according to the following legal documents which I have read and to which I consent</small>
                    </div>

                    <button onClick={handleSetpChange2} className="btn investment-new-create-acc" style={activeBtn2 ? {opacity: '.65'} : {}} disabled={activeBtn2}>Proceed</button>

                </div>
            </div>
        </div>
    )
};

export default FormPart2;