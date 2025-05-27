import React from 'react'
import { Grid } from '@mui/material';


interface Props {
    classes: any;
    identificationMeans: string;
    setIdentificationMeans: React.Dispatch<React.SetStateAction<string>>;

    identityNumber: string;
    setIdentityNumber: React.Dispatch<React.SetStateAction<string>>;
    identityNumberBool: boolean;

    driverLicenseState3: string;
    setDriverLicenseState3: React.Dispatch<React.SetStateAction<string>>

}
const FieldSet2: React.FC<Props> = ({ 
    classes, 
    identificationMeans, 
    setIdentificationMeans,
    identityNumber,
    setIdentityNumber,
    identityNumberBool,
    driverLicenseState3,
    setDriverLicenseState3,
}) => {
    return (
        <>
{/* Payment Protection Cover */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Form Of Identification:</legend>

                <div style={{fontSize: '13px', marginBottom: '10px'}}>
                    <p className={classes.paragraph} style={{lineHeight: 1.3}}>Choose a form of identification and provide your ID number. This field is optional.</p>
                </div>

                <Grid>
                    <div id='radio-buttons' className={classes.radio}>
                        <label htmlFor="payment_protection_driver_license" className={classes.radioLabel}>
                            <input 
                                type="radio" 
                                name="payment_protection" 
                                id="payment_protection_driver_license" 
                                value="driver_license"
                                checked={identificationMeans === "driver_license"}
                                onChange={(event)=> setIdentificationMeans(event.currentTarget.value)}
                            />
                            <span className={classes.radioLabelSpan}>Driver's License</span>
                        </label>
                        <label htmlFor="payment_protection_state_id">
                            <input 
                                type="radio" 
                                name="payment_protection" 
                                id="payment_protection_state_id" 
                                value="state_id"
                                checked={identificationMeans === 'state_id'}
                                onChange={(event)=> setIdentificationMeans(event.currentTarget.value)}
                            />
                            <span className={classes.radioLabelSpan}>State ID Number</span>
                        </label>
                    </div>
                </Grid>
                {
                    identificationMeans
                    &&
                    <>
                        <Grid container style={{marginTop: '0.5rem'}}>
                            <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                                <label htmlFor="accountnum"><strong className={classes.strong}>Identification Number:</strong></label>
                                <span className={classes.val}>
                                    <input 
                                        id='accountnum'
                                        type="text" 
                                        name="accountnum" 
                                        className={classes.inputStyle1} 
                                        value={identityNumber} 
                                        onChange={(event)=> setIdentityNumber(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={4} className={classes.gridItemPadding}>
                                <label htmlFor="accountnum"><strong className={classes.strong}>State Registered:</strong></label>
                                <select 
                                    id='driver_license_state'
                                    className={classes.inputStyle1} 
                                    value={driverLicenseState3}
                                    onChange={(event)=> setDriverLicenseState3(event.currentTarget.value)}
                                >
                                    <option defaultValue=''>Select...</option>
                                    <option value="AL">AL</option>
                                    <option value="AK">AK</option>
                                    <option value="AZ">AZ</option>
                                    <option value="AR">AR</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DC">DC</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="IA">IA</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="ME">ME</option>
                                    <option value="MD">MD</option>
                                    <option value="MA">MA</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MS">MS</option>
                                    <option value="MO">MO</option>
                                    <option value="MT">MT</option>
                                    <option value="NE">NE</option>
                                    <option value="NV">NV</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NY">NY</option>
                                    <option value="NC">NC</option>
                                    <option value="ND">ND</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VT">VT</option>
                                    <option value="VA">VA</option>
                                    <option value="WA">WA</option>
                                    <option value="WV">WV</option>
                                    <option value="WI">WI</option>
                                    <option value="WY">WY</option>
                                </select>
                            </Grid>
                        </Grid>
   
                    </>
                }
            </fieldset>
        </>
    )
}
export default FieldSet2