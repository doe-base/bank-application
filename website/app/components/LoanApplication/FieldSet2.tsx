import React from 'react'
import { Grid } from '@mui/material';


interface Props {
    classes: any;
    paymentProtection: string;
    setPaymentProtection: React.Dispatch<React.SetStateAction<string>>;
}
const FieldSet2: React.FC<Props> = ({ 
    classes, 
    paymentProtection, 
    setPaymentProtection 
}) => {
    return (
        <>
{/* Payment Protection Cover */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Payment Protection Coverage:</legend>

                <div style={{fontSize: '13px', marginBottom: '10px'}}>
                    <p className={classes.paragraph} style={{lineHeight: 1.3}}>Check coverage(s) desired. The Credit Union will disclose the cost of this voluntary insurance to you. A separate enrollment form which discloses the terms and conditions must be signed for coverage to become effective.</p>
                </div>

                <Grid>
                    <div id='radio-buttons' className={classes.radio}>
                        <label htmlFor="payment_protection_yes" className={classes.radioLabel}>
                            <input 
                                type="radio" 
                                name="payment_protection" 
                                id="payment_protection_yes" 
                                value="Yes"
                                checked={paymentProtection === 'Yes'}
                                onChange={(event)=> setPaymentProtection(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>Yes</span>
                        </label>
                        <label htmlFor="payment_protection_no">
                            <input 
                                type="radio" 
                                name="payment_protection" 
                                id="payment_protection_no" 
                                value="No"
                                checked={paymentProtection === 'No'}
                                onChange={(event)=> setPaymentProtection(event.target.value)}
                            />
                            <span className={classes.radioLabelSpan}>No</span>
                        </label>
                    </div>
                </Grid>
            </fieldset>
        </>
    )
}
export default FieldSet2