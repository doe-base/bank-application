'use client';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import usBanks from '../../data/usa-banks.json';


// APP POPUPS ARE POSITIONED IN BENEFICIARY PAGE
const handleBeneficiaryClose3 =()=>{
    const sidebarEl = document.getElementById('ben-beneficiaries-popup');
    sidebarEl?.classList.remove('show');
};
const addSomethingWrong5 =()=>{
    document.getElementById('somethingwrong5')?.classList.add('somethingwrong');
};
const removeSomethingWrong5 =()=>{
    document.getElementById('somethingwrong5')?.classList.remove('somethingwrong');
};
const lunchSomethingWrong5 =()=>{
    setTimeout(addSomethingWrong5, 1000);
    setTimeout(removeSomethingWrong5, 4200);
};

interface Props{};
const AddBeneficiairyPopup: React.FC<Props> = ({}) => {
  const [benBank, setBenBank] = useState<string>('elit-account');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [canProceed, setCanProceed] = useState<boolean>(true);

  const handleFormSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    lunchSomethingWrong5()
  };

  useEffect(()=>{
    if(accountNumber === ''){
      setCanProceed(true)
    }else{
      setCanProceed(false)
    }
  }, [accountNumber]);
  useEffect(()=>{
    if(benBank === 'elit-account'){
      document.getElementById('ben-choose-bank')?.classList.remove('show')
    }else if(benBank === 'other-bank'){
      document.getElementById('ben-choose-bank')?.classList.add('show')
    }
  }, [benBank]);


  return (
    <div id='ben-beneficiaries-popup' className='sidebar-wrapper-receive-funds'>
        
        <div className='sidebar-receive-funds-beneficiariesmodal-dialog modal-dialog-scrollable'>
            <aside className='sidebar-receive-funds-beneficiaries' style={{maxWidth: '500px'}}>
                
            <div className='funds-ben-header' style={{marginBottom: '35px'}}>
              <h6 className="funds-ben-header-h6">Add New Beneficiaries</h6>
            </div>

            <div style={{overflowY: 'auto', padding: '0.25rem 1.5rem', width: "100%"}}>

              <form onSubmit={(e)=> handleFormSubmit(e)}>
                <div>

                  <div className="add-ben-form-group" style={{marginBottom: '35px'}}>
                    <label>Beneficiary</label>
                    <input name="accountNumber" maxLength={20} className="add-ben-form-group-input" placeholder="Type Account Number" onChange={(e)=> setAccountNumber(e.currentTarget.value)}/>
                  </div>


                  <div className="add-ben-form-group" style={{marginBottom: '35px'}} >
                    <label>Account Type</label>
                    <select name="accountType" className="add-ben-form-group-input" onClick={(e)=> setBenBank(e.currentTarget.value)}>
                      <option value="elit-account">Elit Account</option>
                      <option value="other-bank">Other Banks</option>
                    </select>
                  </div>



                  <div id='ben-choose-bank' className="add-ben-form-group-choose" style={{marginBottom: '35px'}}>
                    <label>Choose Bank</label>
                    <select name="accountType" className="add-ben-form-group-input">
                      {
                        usBanks.map((item: any, index: number)=>{
                          return (
                            <option value={item.name}>{item.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>


                  <div className="dialog-footer mt-3 mb-4" style={{margin: '35px 0'}}>
                    <Grid container>
                      <Grid xs={6}>
                        <button onClick={handleBeneficiaryClose3} className="btn cancel" data-dismiss="modal" type="button" aria-label="Close">CANCEL</button>
                      </Grid>
                      
                      <Grid xs={6}>
                        <button className="btn create-acc" type="submit" disabled={canProceed}>Proceed</button>
                      </Grid>
                    </Grid>
                  </div>

                </div>
              </form>

            </div>
            
            </aside>
        </div>
    </div>
  )
};

export default AddBeneficiairyPopup;
