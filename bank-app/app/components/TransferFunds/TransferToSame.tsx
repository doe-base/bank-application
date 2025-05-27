'use client';
import React, { useState } from "react";
import { RotatingLines } from 'react-loader-spinner';
import axios from 'axios';


interface Props {}
const TransferToSame: React.FC<Props>=({})=>{
    const [wrongAccountNumber, setWrongAccountNumber] = useState(false);
    const [networkError, setNetworkErrror] = useState(false);
    const [loading, setLoading] = useState(false);
    const [btnActive, setBtnActive] = useState(true);

    const checkAccountNumber = ()=>{
        setLoading(true);
        setWrongAccountNumber(false);
        setNetworkErrror(false);

        axios
        .get( "fake-url-that-does-not-exist" )
        .then(function (response) {
            setNetworkErrror(false)
            setLoading(false)
            setWrongAccountNumber(true)
        })
        .catch(function (error) {
            setNetworkErrror(true)
            setLoading(false)
            setWrongAccountNumber(false)
        })
    };
 
    const handleInputChange =(value: string) =>{
        if(value.length == 11){
            setBtnActive(false)
        }else{
            setBtnActive(true)
        };
    };
    const handleBeneficiaryOpen =()=>{
        const sidebarEl = document.getElementById('sidebar-wrapper-beneficiaries-popup');
        sidebarEl?.classList.add('show');
    };



    return (

        <div id="groom-panel-active-option-1" className="groom-panel-2 active">
            <div className="groom-panel-header"><p>Send Money to a Mintyn user</p></div>

            <div style={{paddingTop: '3rem'}}></div>

            <div className="transfer-form">

                <div className="transfer-form-row" style={{marginBottom: '1.6rem'}} onClick={handleBeneficiaryOpen}>
                    <div className="col-md-12">
                        <span className="select-beneficiary-button" role="button">Choose Beneficiary<img src="/imgs/nav-icons/sue2.svg" alt="" /></span>
                    </div>
                </div>


                <div className="form-group" style={{marginBottom: '1.6rem'}}>
                    <div className="transfer-form-row">
                        <div className="col-md-12">
                            <label>Recipient Account</label>
                            <input name="recipientAccountNumber" type="text" className="form-control ft-recipient-input " maxLength={11} placeholder="Enter Account Number" autoCorrect="off" onChange={(e) => handleInputChange(e.currentTarget.value)}/>
                        </div>

                    </div>
                </div>


                <div style={{marginTop: '0.6rem', width: '100%'}}>
                    <button className="btn create-acc ft-submit-btn" onClick={checkAccountNumber} disabled={btnActive}>Continue</button>

                    {
                        loading
                        ?
                        <RotatingLines
                            visible={true}
                            width="16"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                        /> 
                        :
                        networkError
                        ?
                        <span style={{color: '#ff2e2e', fontSize: '0.8rem', fontStyle: 'italic'}}>This action does not work</span>
                        :
                        wrongAccountNumber
                        ?
                        <span style={{color: '#ff2e2e', fontSize: '0.8rem', fontStyle: 'italic'}}>This action does not work</span>
                        :
                        null
                    }
                </div>

            </div>

            <div style={{paddingTop: '3rem'}}></div>
        </div>

    )
};

export default TransferToSame;