import React from 'react'
import { Grid } from '@mui/material';


interface Props {
    classes: any;
    accountType: string;
    setAccountType: React.Dispatch<React.SetStateAction<string>>;

    accountPerson: string;
    setAccountPerson: React.Dispatch<React.SetStateAction<string>>;
}
const FieldSet4: React.FC<Props> = ({ 
    classes, 
    accountType, 
    setAccountType,
    accountPerson, 
    setAccountPerson
}) => {
    return (
        <>
{/* Payment Protection Cover */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Account Type:</legend>
                <div style={{fontSize: '13px', marginBottom: "1rem"}}>
                    <p className={classes.paragraph}><strong className={classes.strong}>Savings Account</strong>: Designed for saving money over time, typically offering interest on your balance.</p>
                    <p className={classes.paragraph}><strong className={classes.strong}>Checking Account</strong>: Ideal for daily transactions, such as deposits, withdrawals, and bill payments.</p>
                </div>

                <Grid style={{marginBottom: '1rem'}}>
                    <div id='radio-buttons' className={classes.radio}>
                        <label htmlFor="account_type_savings" className={classes.radioLabel}>
                            <input 
                                type="radio" 
                                name="account_type" 
                                id="account_type_savings" 
                                value="savings"
                                checked={accountType === 'savings'}
                                onChange={(event)=> setAccountType(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>Savings</span>
                        </label>
                        <label htmlFor="account_type_checking">
                            <input 
                                type="radio" 
                                name="account_type" 
                                id="account_type_checking" 
                                value="checking"
                                checked={accountType === 'checking'}
                                onChange={(event)=> setAccountType(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>Checking</span>
                        </label>
                        {/* <label htmlFor="account_type_money_market" className={classes.radioLabel}>
                            <input 
                                type="radio" 
                                name="account_type" 
                                id="account_type_money_market" 
                                value="money_market"
                                checked={accountType === 'money_market'}
                                onChange={(event)=> setAccountType(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>Money Market Account</span>
                        </label>
                        <label htmlFor="account_type_certificate_of_deposit">
                            <input 
                                type="radio" 
                                name="account_type" 
                                id="account_type_certificate_of_deposit" 
                                value="certificate_of_deposit"
                                checked={accountType === 'certificate_of_deposit'}
                                onChange={(event)=> setAccountType(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>Certificate of Deposit (CD)</span>
                        </label> */}
                    </div>
                </Grid>

                <div style={{fontSize: '13px', marginBottom: "1rem"}}>
                    <p className={classes.paragraph}>You are required to fill additional information for Joint account holder.</p>
                </div>
                <Grid>
                    <div id='radio-buttons' className={classes.radio}>
                        <label htmlFor="account_person_individual" className={classes.radioLabel}>
                            <input 
                                type="radio" 
                                name="account_person" 
                                id="account_person_individual" 
                                value="individual"
                                checked={accountPerson === 'individual'}
                                onChange={(event)=> setAccountPerson(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>Individual</span>
                        </label>
                        <label htmlFor="account_person_joint">
                            <input 
                                type="radio" 
                                name="account_person" 
                                id="account_person_joint" 
                                value="joint"
                                checked={accountPerson === 'joint'}
                                onChange={(event)=> setAccountPerson(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>Joint</span>
                        </label>
                    </div>
                </Grid>
            </fieldset>
        </>
    )
}
export default FieldSet4;