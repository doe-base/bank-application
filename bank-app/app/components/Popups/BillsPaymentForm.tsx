import React from "react";
import Appbar from "../Appbar/Appbar";


interface Props {
    billType: string;
    handleDropDownUtilityProviderOpen: ()=>void;
    dropdownOpt1: string;
    handleDropDownUtilityServiceProviderOpen: ()=>void;
    dropdownOpt2: string;
};
const BillsPaymentFrom: React.FC<Props>=({ 
    billType, 
    handleDropDownUtilityProviderOpen, 
    dropdownOpt1, 
    handleDropDownUtilityServiceProviderOpen,
    dropdownOpt2
})=>{


    return (
        <main id="content" style={{display: 'block'}}>
            <Appbar />

            <section className="container">

                <div style={{padding: '3rem 0'}}>
                    <h1 className="tranfer-title-text">Bills Payment</h1>
                    <p className="tranfer-lead-text">Pay bills on autopilot. Schedule them now!</p>


                    <div className="custom-tabs" style={{marginTop: '3rem', width: '100%'}}>
                        <ul role="tablist">
                            <li role="tab"><span id="" className="active">Bills Payment</span></li>
                        </ul>
                    </div>

                    
                    {
                        billType === 'pay-bills-utilities'
                        ?
                            <div id="" className="groom-panel-2 active">
                                <div className="groom-panel-header"><p>Utilities</p></div>

                                <div style={{padding: '3rem 0'}}>

                                    <form className="transfer-form">

                                        <div className="transfer-form-row" style={{marginBottom: '1.6rem'}}>
                                            <div className="col-md-12" onClick={handleDropDownUtilityProviderOpen}>
                                                <span className="select-beneficiary-button" role="button">{ dropdownOpt1 ? <strong>{dropdownOpt1}</strong> : 'Select Utility Type'}<img src="/imgs/nav-icons/sue2.svg" alt="" /></span>
                                            </div>
                                        </div>

                                        <div className="transfer-form-row" style={{marginBottom: '1.6rem'}}>
                                            <div className="col-md-12" onClick={handleDropDownUtilityServiceProviderOpen}>
                                                <span className="select-beneficiary-button" role="button">{ dropdownOpt2 ? <strong>{dropdownOpt2}</strong> : 'Select Utility Provider'}<img src="/imgs/nav-icons/sue2.svg" alt="" /></span>
                                            </div>
                                        </div>


                                        <div className="form-group" style={{marginBottom: '1.6rem'}}>
                                            <div className="transfer-form-row">
                                                <div className="col-md-12">
                                                    <label>Customer ID</label>
                                                    <input name="recipientAccountNumber" type="text" className="form-control ft-recipient-input" placeholder="Enter Customer ID" autoCorrect="off"/>
                                                </div>

                                            </div>
                                        </div>


                                        <div style={{marginTop: '0.6rem', width: '100%'}}>
                                            <button className="btn create-acc ft-submit-btn" disabled>Continue</button>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        :
                        null
                    }
                </div>
            </section>
        </main>
        
    )
};

export default BillsPaymentFrom;