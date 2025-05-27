import React from 'react';
import { Grid } from '@mui/material';
import { templateParser, templateFormatter, parseDigit } from 'input-format';
import ReactInput from 'input-format/react';


interface Props {
    classes: any;
    firstNameRef1: string 
    setFirstNameRef1: React.Dispatch<React.SetStateAction<string>>
    middleNameRef1: string
    setMiddleNameRef1: React.Dispatch<React.SetStateAction<string>>
    lastNameRef1: string 
    setLastNameRef1: React.Dispatch<React.SetStateAction<string>>
    suffixRef1: string
    setSuffixRef1: React.Dispatch<React.SetStateAction<string>>
    homePhoneRef1: string
    setHomePhoneRef1: any
    cellPhoneRef1: string
    setCellPhoneRef1: any
    streetRef1: string
    setStreetRef1: React.Dispatch<React.SetStateAction<string>>
    cityRef1: string
    setCityRef1: React.Dispatch<React.SetStateAction<string>>
    stateRef1: string
    setStateRef1: React.Dispatch<React.SetStateAction<string>>
    zipcodeRef1: string
    setZipcodeRef1: React.Dispatch<React.SetStateAction<string>>

    firstNameRef2: string 
    setFirstNameRef2: React.Dispatch<React.SetStateAction<string>>
    middleNameRef2: string
    setMiddleNameRef2: React.Dispatch<React.SetStateAction<string>>
    lastNameRef2: string 
    setLastNameRef2: React.Dispatch<React.SetStateAction<string>>
    suffixRef2: string
    setSuffixRef2: React.Dispatch<React.SetStateAction<string>>
    homePhoneRef2: string
    setHomePhoneRef2: any
    cellPhoneRef2: string
    setCellPhoneRef2: any
    streetRef2: string
    setStreetRef2: React.Dispatch<React.SetStateAction<string>>
    cityRef2: string
    setCityRef2: React.Dispatch<React.SetStateAction<string>>
    stateRef2: string
    setStateRef2: React.Dispatch<React.SetStateAction<string>>
    zipcodeRef2: string
    setZipcodeRef2: React.Dispatch<React.SetStateAction<string>>
}

const FieldSet6: React.FC<Props> = ({ 
    classes, 
    firstNameRef1, 
    setFirstNameRef1,
    middleNameRef1,
    setMiddleNameRef1,
    lastNameRef1, 
    setLastNameRef1,
    suffixRef1,
    setSuffixRef1,
    homePhoneRef1,
    setHomePhoneRef1,
    cellPhoneRef1,
    setCellPhoneRef1,
    streetRef1,
    setStreetRef1,
    cityRef1,
    setCityRef1,
    stateRef1,
    setStateRef1,
    zipcodeRef1,
    setZipcodeRef1,
    firstNameRef2, 
    setFirstNameRef2,
    middleNameRef2,
    setMiddleNameRef2,
    lastNameRef2, 
    setLastNameRef2,
    suffixRef2,
    setSuffixRef2,
    homePhoneRef2,
    setHomePhoneRef2,
    cellPhoneRef2,
    setCellPhoneRef2,
    streetRef2,
    setStreetRef2,
    cityRef2,
    setCityRef2,
    stateRef2,
    setStateRef2,
    zipcodeRef2,
    setZipcodeRef2
 }) => {


    const TEMPLATE3 = '(xxx) xxx-xxxx';
    const parse3 = templateParser(TEMPLATE3, parseDigit);
    const usNumberFormat = templateFormatter(TEMPLATE3);

    return (
        <>
{/* References (Nearest relative not living with you) */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>References (Nearest relative not living with you)</legend>

                <section className={classes.reference}>
                    <span className={classes.referenceText}>Reference 1:</span>

                    <Grid container>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="first_name_relative"><strong className={classes.strong}>First Name:</strong></label>
                            <span className={classes.val}>
                                <input 
                                    type="text" 
                                    name="first_name_relative" 
                                    className={classes.inputStyle1}
                                    value={firstNameRef1}
                                    onChange={(event)=> setFirstNameRef1(event.currentTarget.value)}
                                />
                            </span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="middle_name_relative"><strong className={classes.strong}>Middle Name:</strong></label>
                            <span className={classes.val}>
                                <input type="text" name="middle_name_relative" className={classes.inputStyle1} value={middleNameRef1} onChange={(event)=> setMiddleNameRef1(event.currentTarget.value)}/>
                            </span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="last_name_relative"><strong className={classes.strong}>Last Name:</strong></label>
                            <span className={classes.val}><input type="text" name="last_name_relative" className={classes.inputStyle1} value={lastNameRef1} onChange={(event)=> setLastNameRef1(event.currentTarget.value)}/></span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="suffix"><strong className={classes.strong}>Suffix:</strong></label>
                            <span className={classes.val}><input type="text" name="suffix" className={classes.inputStyle1} value={suffixRef1} onChange={(event)=> setSuffixRef1(event.currentTarget.value)}/></span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="home_phone_relative"><strong className={classes.strong}>Home Phone:</strong></label>
                            <span className={classes.val}>
                                    <ReactInput
                                        id='home_phone_relative'
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                        value={homePhoneRef1}
                                        onChange={setHomePhoneRef1}
                                    />
                            </span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="cell_phone_relative"><strong className={classes.strong}>Cell Phone:</strong></label>
                            <span className={classes.val}>
                                <ReactInput
                                        id='cell_phone_relative'
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                        value={cellPhoneRef1}
                                        onChange={setCellPhoneRef1}
                                    />
                            </span>
                        </Grid>
                    </Grid> 



                        <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                            <Grid item xs={12} style={{paddingTop: '20px', paddingBottom: '0'}}>
                                <label style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>What is their home address?</strong></label>
                            </Grid>
                        </Grid>

                        <Grid container style={{alignItems: 'center', justifyContent:'space-between'}}>
                            <Grid item xs={6} md={4} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="street_relative" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Street:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><input type="text" name="street_relative" id="street_relative" className={classes.inputStyle1} value={streetRef1} onChange={(event)=> setStreetRef1(event.currentTarget.value)}/></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={3} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="city_relative" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>City:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><input type="text" name="city_relative" id="city_relative" className={classes.inputStyle1} value={cityRef1} onChange={(event)=> setCityRef1(event.currentTarget.value)}/></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="state_relative" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>State:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><select className={classes.inputStyle1} value={stateRef1} onChange={(event)=> setStateRef1(event.currentTarget.value)}><option defaultValue=''>Select...</option><option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DC">DC</option><option value="DE">DE</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="zip_code_relative" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Zip Code:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><input type="text" name="zip_code_relative" id="zip_code_relative" className={classes.inputStyle1} value={zipcodeRef1} onChange={(event)=> setZipcodeRef1(event.currentTarget.value)}/></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                </section>

                <section className={classes.reference}>
                    <span className={classes.referenceText}>Reference 2:</span>

                    <Grid container>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="first_name_relative2"><strong className={classes.strong}>First Name:</strong></label>
                            <span className={classes.val}><input type="text" name="first_name_relative2" value={firstNameRef2} onChange={(event)=> setFirstNameRef2(event.currentTarget.value)} className={classes.inputStyle1}/></span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="middle_name_relative2"><strong className={classes.strong}>Middle Name:</strong></label>
                            <span className={classes.val}><input type="text" name="middle_name_relative2" value={middleNameRef2} onChange={(event)=> setMiddleNameRef2(event.currentTarget.value)} className={classes.inputStyle1}/></span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="last_name_relative2"><strong className={classes.strong}>Last Name:</strong></label>
                            <span className={classes.val}><input type="text" name="last_name_relative2" value={lastNameRef2} onChange={(event)=> setLastNameRef2(event.currentTarget.value)} className={classes.inputStyle1}/></span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="suffix"><strong className={classes.strong}>Suffix:</strong></label>
                            <span className={classes.val}><input type="text" name="suffix" value={suffixRef2} onChange={(event)=> setSuffixRef2(event.currentTarget.value)} className={classes.inputStyle1}/></span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="home_phone_relative2"><strong className={classes.strong}>Home Phone:</strong></label>
                            <span className={classes.val}>
                                <ReactInput
                                        id='home_phone_relative2'
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                        value={homePhoneRef2}
                                        onChange={setHomePhoneRef2}
                                />
                            </span>
                        </Grid>
                        <Grid item style={{padding: '8px'}} xs={6} md={3}>
                            <label htmlFor="cell_phone_relative2"><strong className={classes.strong}>Cell Phone:</strong></label>
                            <span className={classes.val}>
                                <ReactInput
                                        id='cell_phone_relative2'
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                        value={cellPhoneRef2}
                                        onChange={setCellPhoneRef2}
                                />
                            </span>
                        </Grid>
                    </Grid> 



                        <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                            <Grid item xs={12} style={{paddingTop: '20px', paddingBottom: '0'}}>
                                <label style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>What is their home address?</strong></label>
                            </Grid>
                        </Grid>

                        <Grid container style={{alignItems: 'center', justifyContent:'space-between'}}>
                            <Grid item xs={6} md={4} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="street_relative2" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Street:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><input type="text" name="street_relative2" id="street_relative2" className={classes.inputStyle1} value={streetRef2} onChange={(event)=> setStreetRef2(event.currentTarget.value)}/></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={3} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="city_relative2" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>City:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><input type="text" name="city_relative2" id="city_relative2" className={classes.inputStyle1} value={cityRef2} onChange={(event)=> setCityRef2(event.currentTarget.value)}/></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="state_relative2" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>State:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><select className={classes.inputStyle1} value={stateRef2} onChange={(event)=> setStateRef2(event.currentTarget.value)}><option defaultValue=''>Select...</option><option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DC">DC</option><option value="DE">DE</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={2} className={classes.gridItemPaddingOpp}>
                                <Grid container style={{alignItems: 'center', justifyContent:'center'}}>
                                    <Grid item xs={12}>
                                        <label htmlFor="zip_code_relative2" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Zip Code:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}><input type="text" name="zip_code_relative2" id="zip_code_relative2" className={classes.inputStyle1} value={zipcodeRef2} onChange={(event)=> setZipcodeRef2(event.currentTarget.value)}/></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                </section>
            </fieldset>
        </>
    )
};
export default FieldSet6;