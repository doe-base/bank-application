'use client';
import React, { useEffect, useState } from "react";
import { RotatingLines } from 'react-loader-spinner';
import useBanks from "../../data/usa-banks.json";
import axios from 'axios';


interface Props {};
const TransferToOther: React.FC<Props>=({})=>{
    const [selectBank, setSelectBank] = useState('');
    const [accountNumActive, setACcountNumActive] = useState(true);
    const [btnActive2, setBtnActive2] = useState(true);
    const [wrongAccountNumber2, setWrongAccountNumber2] = useState(false);
    const [networkError2, setNetworkErrror2] = useState(false);
    const [loading2, setLoading2] = useState(false);

      useEffect(()=>{
        if(selectBank != ''){
            setACcountNumActive(false)
        }else{
            setACcountNumActive(true)
        };
      }, [selectBank]);

      const handleInputChange2 =(value: string) =>{
        if(value.length >= 10){
            setBtnActive2(false)
        }else{
            setBtnActive2(true)
        };
      };
      const checkAccountNumber2 = ()=>{
        setLoading2(true)
        setWrongAccountNumber2(false)
        setNetworkErrror2(false)

        axios
        .get("fake-endpoint-that-does-not-exist")
        .then(function (response) {
            setNetworkErrror2(false)
            setLoading2(false)
            setWrongAccountNumber2(true)
        })
        .catch(function (error) {
            setNetworkErrror2(true)
            setLoading2(false)
            setWrongAccountNumber2(false)
        })
      };
      const handleBeneficiaryOpen2 =()=>{
        const sidebarEl = document.getElementById('sidebar-wrapper-beneficiaries-popup2');
        sidebarEl?.classList.add('show');
      };
    
    return (

        <div id="groom-panel-active-option-2" className="groom-panel-2">
            <div className="groom-panel-header"><p>Send Money to a Non-Mintyn user</p></div>

            <div style={{paddingTop: '3rem'}}></div>

            <div className="transfer-form">

                <div className="transfer-form-row" style={{marginBottom: '1.6rem'}} onClick={handleBeneficiaryOpen2}>
                    <div className="col-md-12">
                        <span className="select-beneficiary-button" role="button">Choose Beneficiary<img src="/imgs/nav-icons/sue2.svg" alt="" /></span>
                    </div>
                </div>


                <div className="form-group" style={{marginBottom: '1.6rem'}}>
                    <div className="transfer-form-row">
                        <div className="col-md-12">
                            <label>Choose Bank</label>

                            <select name="choosebank" id="" className="form-control ft-recipient-input" onChange={(e)=> setSelectBank(e.currentTarget.value)}>
                                <option value=''>-- select bank --</option>
                                {
                                    useBanks.map((item: any, index: number)=>{
                                    return (
                                        <option value={item.name}>{item.name}</option>
                                    )
                                    })
                                }
                            </select>
                        </div>

                    </div>
                </div>


                <div className="form-group" style={{marginBottom: '1.6rem'}}>
                    <div className="transfer-form-row">
                        <div className="col-md-12">
                            <label>Recipient Account</label>
                            <input 
                                name="recipientAccountNumber" 
                                type="text" 
                                className="form-control ft-recipient-input disable" 
                                disabled={accountNumActive} placeholder="Enter Account Number" 
                                autoCorrect="off" 
                                style={accountNumActive ? {} :{backgroundColor: 'transparent', cursor: 'default'}} 
                                onChange={(e) => handleInputChange2(e.currentTarget.value)}/>
                        </div>

                    </div>
                </div>

                
                <div style={{marginTop: '0.6rem', width: '100%'}}>
                    <button className="btn create-acc ft-submit-btn" onClick={checkAccountNumber2} disabled={btnActive2}>Continue</button>

                    {
                        loading2
                        ?
                        <RotatingLines
                            visible={true}
                            width="16"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                        /> 
                        :
                        networkError2
                        ?
                        <span style={{color: '#ff2e2e', fontSize: '0.8rem', fontStyle: 'italic'}}>This action does not work</span>
                        :
                        wrongAccountNumber2
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

export default TransferToOther;