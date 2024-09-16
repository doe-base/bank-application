import React from 'react';
import { Grid } from '@mui/material';
import CurrencyInput from 'react-currency-input-field';


interface Props {
    classes: any;
    accountNo1: string;
    applicationType1: string;
    desiredLoanType1: string;
    desiredLoanAmount1: string | undefined;
    desiredLoanTerm1: string;
    setAccountNo1: React.Dispatch<React.SetStateAction<string>>;
    setApplication1: React.Dispatch<React.SetStateAction<string>>;
    setDesiredLoadType1: React.Dispatch<React.SetStateAction<string>>;
    setDesiredLoadAmount1: React.Dispatch<React.SetStateAction<string>>;
    setDesiredLoadTerm1: React.Dispatch<React.SetStateAction<string>>;

    accountNo1Bool: boolean;
    application1Bool: boolean;
    desiredLoadType1Bool: boolean
    desiredLoadAmount1Bool: boolean;
    desiredLoadTerm1Bool: boolean;
    
}

const FieldSet1: React.FC<Props> = ({ 
    classes, 
    accountNo1, 
    applicationType1, 
    desiredLoanType1, 
    desiredLoanAmount1, 
    desiredLoanTerm1, 
    setAccountNo1, 
    setApplication1, 
    setDesiredLoadType1, 
    setDesiredLoadAmount1, 
    setDesiredLoadTerm1, 
    accountNo1Bool, 
    application1Bool, 
    desiredLoadType1Bool, 
    desiredLoadAmount1Bool, 
    desiredLoadTerm1Bool 
}) => {


    return (
        <>
{/* Application Type */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Type Of Loan Applying For</legend>

                <div style={{fontSize: '13px'}}>
                    <p className={classes.paragraph}><strong className={classes.strong}>Individual Credit</strong>: You must complete the Applicant section about yourself and the Other section about your spouse if:</p>
                    <ol className={classes.ol}>
                        <li className={classes.paragraph} style={{lineHeight: '1.4'}}>you live in or the property pledged as collateral is located in a community property state (AK, AZ, CA, ID, LA, NM, NV, TX, WA, WI)</li>
                        <li className={classes.paragraph} style={{lineHeight: '1.4'}}>your spouse will use the account, or</li>
                        <li className={classes.paragraph} style={{lineHeight: '1.4'}}>you are relying on your spouse's income as a basis for repayment. If you are relying on income from alimony, child support, or separate maintenance, complete the Other section to the extent possible about the person on whose payments you are relying.</li>
                    </ol>
                    <p className={classes.paragraph}><strong className={classes.strong}>Joint Credit</strong>: Each Applicant must individually complete the appropriate section below, If Co-Borrower is spouse of the Applicant,- mark the Co-Applicant box.</p>
                    <p className={classes.paragraph}><strong className={classes.strong}>Guarantor</strong>: Complete the Other section if you are a guarantor on an account/loan.</p>
                    <p className={classes.paragraph} style={{margin: '0 0 10px'}}>You must be a member to apply over the internet. If you are not currently a member and would like to apply, please call us at [Number goes here]</p>
                </div>

                <Grid container>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="accountnum"><strong className={classes.strong}>Account No:</strong></label>
                        <span className={classes.val}>
                            <input 
                                id='accountnum'
                                type="text" 
                                name="accountnum" 
                                className={classes.inputStyle1} 
                                value={accountNo1} 
                                onChange={(event)=> setAccountNo1(event.currentTarget.value)}
                            />
                            {accountNo1Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="applicationtype"><strong className={classes.strong}>Application Type:</strong></label>
                        <select 
                            id='applicationtype'
                            className={classes.inputStyle1} 
                            value={applicationType1}
                            onChange={(event)=> setApplication1(event.currentTarget.value)}
                        >
                            <option value=''>Select...</option>
                            <option value="Individual">Individual</option>
                            <option value="Joint (Spousal)">Joint (Spousal)</option>
                            <option value="Joint (Non-Spousal)">Joint (Non-Spousal)</option>
                        </select>
                        {application1Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="loantype"><strong className={classes.strong}>Desired Loan Type:</strong></label>
                        <select 
                            id='loantype'
                            className={classes.inputStyle1} 
                            value={desiredLoanType1}
                            onChange={(event)=>setDesiredLoadType1(event.currentTarget.value)}
                        >
                            <option value=''>Select...</option>
                            <option value="New Vehicle">New Vehicle</option>
                            <option value="Used Vehicle">Used Vehicle</option>
                            <option value="Recreational Vehicle">Recreational Vehicle</option>
                            <option value="Boat">Boat</option>
                            <option value="Motorcycle">Motorcycle</option>
                            <option value="Savings Secured">Savings Secured</option>
                            <option value="Fixed Home Equity">Fixed Home Equity</option>
                            <option value="Visa Credit Card">Visa Credit Card</option>
                            <option value="Other">Other</option>
                        </select>
                        {desiredLoadType1Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                    </Grid>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="desiredloadamount"><strong className={classes.strong}>Desired Loan Amount:</strong></label>
                        <span className={classes.val2}>
                            <CurrencyInput 
                                id='desiredloadamount'
                                name="desiredloadamount" 
                                decimalsLimit={2} 
                                style={{paddingLeft: '35px', fontFamily: 'sans-serif'}} 
                                className={classes.inputStyle1} 
                                onValueChange={(value, name, values) => setDesiredLoadAmount1(value!)}
                            />
                            {desiredLoadAmount1Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="desiredloadterm"><strong className={classes.strong}>Desired Loan Term (Months):</strong></label>
                        <span className={classes.val}>
                            <input 
                                id='desiredloadterm'
                                type="text" 
                                name="desiredloadterm" 
                                className={classes.inputStyle1} 
                                 
                                value={desiredLoanTerm1}
                                onChange={(event)=> setDesiredLoadTerm1(event.currentTarget.value)}/>
                                {desiredLoadTerm1Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>
                </Grid>
            </fieldset>
        </>
    );
};
export default FieldSet1;