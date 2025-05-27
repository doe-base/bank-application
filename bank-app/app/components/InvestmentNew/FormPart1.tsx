'use client';

interface Props {};
const FormPart1: React.FC<Props>=({ })=>{

    const handleActivePeriodChange =(idNumberMain: string, idNumber2: string, idNumber3: string, idNumber4: string, idNumber5: string)=>{
        document.getElementById(`investment-new-typesRadioBtn${idNumberMain}`)?.classList.add('active');
        document.getElementById(`investment-new-typesRadioBtn${idNumber2}`)?.classList.remove('active');
        document.getElementById(`investment-new-typesRadioBtn${idNumber3}`)?.classList.remove('active');
        document.getElementById(`investment-new-typesRadioBtn${idNumber4}`)?.classList.remove('active');
        document.getElementById(`investment-new-typesRadioBtn${idNumber5}`)?.classList.remove('active');
    }
    const handleSetpChange1 =()=>{
        document.getElementById(`groom-panel-active-option-investment-new-1`)?.classList.remove('active');
        document.getElementById(`groom-panel-active-option-investment-new-2`)?.classList.add('active');
    }


    return (
        <div 
            id="groom-panel-active-option-investment-new-1" 
            className="groom-panel-2 active" 
            style={{marginBottom: '50px', padding: '2rem 0'}}>
        
            <div className="groom-panel-2-inner"  style={{minHeight: 'calc(100vh - 250px)'}}>

                <div className="groom-panel-2-content">
                    
                    <div className="investment-new-holder">
                        <div className="investment-new-step">Step 1</div>

                        <small className="investment-new-text--main">1 of 3 Done</small>
                    </div>

                    <div style={{width: '100%', margin: '1.5rem 0', textAlign: 'left'}}>
                        <h3 className="investment-new-sub-heading">Duration Category</h3>
                        <span className="investment-new-tiny__message">Select a Period category you would want to invest within</span>
                    </div>

                    <div className="form-group radio__select">
                        <label 
                            id='investment-new-typesRadioBtn9' 
                            className={`radio__select__round-type active`} 
                            onClick={()=> handleActivePeriodChange('9', '10', '13', '16', '18')}
                        >
                            <input type="radio" name="type" value="4110189" defaultChecked/>
                            <div className="round-type__text ">
                                <p>Flex 1 - 3 months at 9% Per annum</p>
                                <span>Penalty fee: 0% of accrued interest</span>
                            </div>
                        </label>

                        <label 
                            id='investment-new-typesRadioBtn10' 
                            className={`radio__select__round-type `}
                             onClick={()=> handleActivePeriodChange('10', '9', '13', '16', '18')} 
                        >
                            <input type="radio" name="type" value="4110190" />
                            <div className="round-type__text ">
                                <p>4 - 6 months at 10% Per annum</p>
                                <span>Penalty fee: 22% of accrued interest</span>
                            </div>
                        </label>

                        <label 
                            id='investment-new-typesRadioBtn13' 
                            className={`radio__select__round-type `}
                             onClick={()=> handleActivePeriodChange('13', '10', '9', '16', '18')} 
                        >
                            <input type="radio" name="type" value="4110191" />
                            <div className="round-type__text ">
                                <p>7 - 9 months at 13% Per annum</p>
                                <span>Penalty fee: 38.5% of accrued interest</span>
                            </div>
                        </label>

                        <label 
                            id='investment-new-typesRadioBtn16' 
                            className={`radio__select__round-type `}
                             onClick={()=> handleActivePeriodChange('16', '10', '13', '9', '18')} 
                        >
                            <input type="radio" name="type" value="4110192" />
                            <div className="round-type__text ">
                                <p>10 - 12 months at 16% Per annum</p>
                                <span>Penalty fee: 50% of accrued interest</span>
                            </div>
                        </label>

                        <label 
                            id='investment-new-typesRadioBtn18' 
                            className={`radio__select__round-type `}
                             onClick={()=> handleActivePeriodChange('18', '10', '13', '16', '9')} 
                        >
                            <input type="radio" name="type" value="4110193" />
                            <div className="round-type__text ">
                                <p>13 - 24 months at 18% Per annum</p>
                                <span>Penalty fee: 55.5% of accrued interest</span>
                            </div>
                        </label>
                    </div>

                    <button onClick={handleSetpChange1} className="btn investment-new-create-acc">Proceed</button>

                </div>
            </div>
        </div>
    )
};

export default FormPart1;