import React, { useState } from 'react'
import { Grid } from '@mui/material';
import CurrencyInput from 'react-currency-input-field';
import { templateParser, templateFormatter, parseDigit } from 'input-format'
import ReactInput from 'input-format/react'


interface Props {
    classes: any;
    applicantName3: string;
    setApplicantName3: React.Dispatch<React.SetStateAction<string>>
    applicantName3Bool: boolean;
    driverLicense3: string;
    setDriverLicense3: React.Dispatch<React.SetStateAction<string>>
    driverLicenseState3: string;
    setDriverLicenseState3: React.Dispatch<React.SetStateAction<string>>
    socialSecurity3: string;
    setSocialSecurity3: any
    socialSecurity3Bool: boolean;
    applicantEmail3: string;
    setApplicantEmail3: React.Dispatch<React.SetStateAction<string>>
    applicantEmail3Bool: boolean;
    usCitizen: string;
    setUsCitizen: React.Dispatch<React.SetStateAction<string>>
    brithday3: string;
    setbrithday3: any
    brithdayValid: boolean
    brithday3Bool: boolean;
    maritalStatus: string;
    setMaritalStatus: React.Dispatch<React.SetStateAction<string>>
    maritalStatusBool: boolean;
    homePhone: string;
    setHomePhone: any
    cellPhone: string;
    setCellPhone: any
    cellPhoneBool: boolean;
    streetAddress: string;
    setStreetAddress: React.Dispatch<React.SetStateAction<string>>
    streetAddressBool: boolean;
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>
    cityBool: boolean;
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>
    stateBool: boolean;
    zipcode: string;
    setZipcode: React.Dispatch<React.SetStateAction<string>>
    zipcodeBool: boolean;
    currentAddressSince: string;
    setCurrentAddressSince: any
    currentAddressSinceBool: boolean;
    previousAddress: string;
    setPreviousAddress: React.Dispatch<React.SetStateAction<string>>
    employerName: string;
    setEmployerName: React.Dispatch<React.SetStateAction<string>>
    employerPhone: string;
    setEmployerPhone: any;
    employerAddress: string;
    setEmployerAddress: React.Dispatch<React.SetStateAction<string>>
    jobTitle: string;
    setJobTitle: React.Dispatch<React.SetStateAction<string>>
    dateHire: string;
    setDateHire: any
    monthlyGrossIncome: string;
    setMonthlyGrossIncome: React.Dispatch<React.SetStateAction<string>>
    otherIncome: string;
    setOtherIncome: React.Dispatch<React.SetStateAction<string>>
    prevEmployer: string;
    setPrevEmployer: React.Dispatch<React.SetStateAction<string>>
    yearsEmployed: string;
    setYearsEmployed: React.Dispatch<React.SetStateAction<string>>
}


const FieldSet3: React.FC<Props> = ({   
    classes, 
    applicantName3,
    setApplicantName3,
    applicantName3Bool,
    driverLicense3,
    setDriverLicense3,
    driverLicenseState3,
    setDriverLicenseState3,
    socialSecurity3,
    setSocialSecurity3,
    socialSecurity3Bool,
    applicantEmail3,
    setApplicantEmail3,
    applicantEmail3Bool,
    usCitizen,
    setUsCitizen,
    brithday3,
    setbrithday3,
    brithdayValid,
    brithday3Bool,
    maritalStatus,
    setMaritalStatus,
    maritalStatusBool,
    homePhone,
    setHomePhone,
    cellPhone,
    setCellPhone,
    cellPhoneBool,
    streetAddress,
    setStreetAddress,
    streetAddressBool,
    city,
    setCity,
    cityBool,
    state,
    setState,
    stateBool,
    zipcode,
    setZipcode,
    zipcodeBool,
    currentAddressSince,
    setCurrentAddressSince,
    currentAddressSinceBool,
    previousAddress,
    setPreviousAddress,
    employerName,
    setEmployerName,
    employerPhone,
    setEmployerPhone,
    employerAddress,
    setEmployerAddress,
    jobTitle,
    setJobTitle,
    dateHire,
    setDateHire,
    monthlyGrossIncome,
    setMonthlyGrossIncome,
    otherIncome,
    setOtherIncome,
    prevEmployer,
    setPrevEmployer,
    yearsEmployed,
    setYearsEmployed,
}) => {


    const TEMPLATE = 'xxx-xx-xxxx'
    const parse = templateParser(TEMPLATE, parseDigit)
    const format = templateFormatter(TEMPLATE)
 
    const TEMPLATE2 = 'xx/xx/xxxx'
    const parse2 = templateParser(TEMPLATE2, parseDigit)
    const dateFormat = templateFormatter(TEMPLATE2)

    const TEMPLATE22 = 'xx/xxxx'
    const parse22 = templateParser(TEMPLATE22, parseDigit)
    const dateFormat2 = templateFormatter(TEMPLATE22)

    const TEMPLATE3 = '(xxx) xxx-xxxx'
    const parse3 = templateParser(TEMPLATE3, parseDigit)
    const usNumberFormat = templateFormatter(TEMPLATE3)


    return (
        <>
{/* Primary Applicant */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Primary Applicant</legend>
                <h3 className={classes.fieldsetH3}>Applicant Information</h3>

                <Grid container style={{marginBottom: '2rem'}}>
                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="applicant_name" className={classes.labelResponsiveStyle}><strong className={classes.strong}>Applicant's Name:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                            id="applicant_name" 
                                            type="text" 
                                            name="applicant_name" 
                                            className={classes.inputStyle1}
                                            value={applicantName3} 
                                            onChange={(event)=> setApplicantName3(event.currentTarget.value)} 
                                    />
                                    {applicantName3Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="driver_license" className={classes.labelResponsiveStyle}><strong className={classes.strong}>Driver License #:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        id="driver_license" 
                                        type="text" 
                                        name="driver_license" 
                                        className={classes.inputStyle1} 
                                        value={driverLicense3} 
                                        onChange={(event)=> setDriverLicense3(event.currentTarget.value)} 
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5}>
                                <label htmlFor="dl_state"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Drivers License State:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
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

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="socail_security"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Social Security #:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                {/* <span className={classes.val}><input type="text" name="socail_security" id="socail_security" className={classes.inputStyle1} required/></span> */}
                                
                                <span className={classes.val}>
                                    <ReactInput
                                        id='social_security'
                                        value={socialSecurity3}
                                        onChange={setSocialSecurity3}
                                        parse={parse}
                                        format={format}
                                        className={classes.inputStyle1}
                                    />
                                    {socialSecurity3Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>


                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="email"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Email:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        className={classes.inputStyle1} 
                                        value={applicantEmail3}
                                        onChange={(event)=> setApplicantEmail3(event.currentTarget.value)} 
                                    />
                                    {applicantEmail3Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="us_citizen"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>US Citizen:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <div id='radio-buttons' className={classes.radio}>
                                    <label htmlFor="us_citizen_yes" className={classes.radioLabel}>
                                        <input 
                                            type="radio" 
                                            name="us_citizen" 
                                            id="us_citizen_yes" 
                                            value="Yes" 
                                            checked={usCitizen === 'Yes'}
                                            onChange={(event)=> setUsCitizen(event.target.value)}
                                        />
                                        <span className={classes.radioLabelSpan}>Yes</span>
                                    </label>
                                    <label htmlFor="us_citizen_no">
                                        <input 
                                            type="radio" 
                                            name="us_citizen" 
                                            id="us_citizen_no" 
                                            value="No" 
                                            checked={usCitizen === 'No'}
                                            onChange={(event)=> setUsCitizen(event.target.value)}
                                        />
                                        <span className={classes.radioLabelSpan}>No</span>
                                    </label>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="birthday"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Birthday:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <ReactInput
                                        id='app_birthbay'
                                        placeholder='MM/DD/YYYY'
                                        parse={parse2}
                                        format={dateFormat}
                                        className={classes.inputStyle1}
                                        value={brithday3}
                                        onChange={setbrithday3}
                                    />
                                    {brithday3Bool && brithdayValid ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                    {!brithdayValid ? <div id="loantype-error" className="error">Please enter a valid date.</div> : null}
                                    
                                </span>
                            </Grid>
                        </Grid>

                        <p className={classes.paragraph} style={{lineHeight: 1.3, margin: "15px 0 10px 0"}}>Please indicate your marital status if you are applying for joint credit, secured credit or if you live in a community property state:</p>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5}>
                                <label htmlFor="applicant_maritalStatus"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Marital Status:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <select 
                                    id='marital_status'
                                    className={classes.inputStyle1} 
                                    value={maritalStatus}
                                    onChange={(event)=>setMaritalStatus(event.currentTarget.value)}
                                >
                                    <option defaultValue=''>Select...</option>
                                    <option value="Married">Married</option>
                                    <option value="Separated">Separated</option>
                                    <option value="Single">Single</option>
                                </select>
                                {maritalStatusBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                            </Grid>
                        </Grid>



                    </Grid>

                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>


                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="home_number"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Home Phone:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <ReactInput
                                        value={homePhone}
                                        onChange={setHomePhone}
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="cell_number"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Cell Phone:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                 <span className={classes.val}>
                                    <ReactInput
                                        id='cell_phone'
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                        value={cellPhone}
                                        onChange={setCellPhone}
                                    />
                                    {cellPhoneBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="stree_address"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Street Addres:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        id="stree_address" 
                                        type="text" 
                                        name="stree_address" 
                                        className={classes.inputStyle1}
                                        value={streetAddress} 
                                        onChange={(event)=> setStreetAddress(event.currentTarget.value)} 
                                    />
                                    {streetAddressBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="city"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>City:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        id="city" 
                                        className={classes.inputStyle1}
                                        value={city} 
                                        onChange={(event)=> setCity(event.currentTarget.value)}
                                    />
                                    {cityBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="applicant_state"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>State:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <select 
                                        id='applicant_state'
                                        className={classes.inputStyle1} 
                                        value={state}
                                        onChange={(event)=>setState(event.currentTarget.value)}
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

                                        {stateBool ? <div id="loantype-error" className="error">This field is required.</div> : null}

                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="zip_code"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Zip Code:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="zip_code" 
                                        id="zip_code" 
                                        className={classes.inputStyle1}
                                        value={zipcode}
                                        onChange={(event)=>setZipcode(event.currentTarget.value)}
                                    />
                                    {zipcodeBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5}>
                                <label htmlFor="address_since"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Current Address since:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                {/* <span className={classes.val}><input type="date" name="address_since" id="address_since" className={classes.inputStyle1} required/></span> */}
                                <span className={classes.val}>
                                    <ReactInput
                                        id='address_since'
                                        placeholder='MM/YYYY'
                                        value={currentAddressSince}
                                        onChange={setCurrentAddressSince}
                                        parse={parse22}
                                        format={dateFormat2}
                                        className={classes.inputStyle1}
                                    />
                                    {currentAddressSinceBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} style={{paddingTop: '8px'}}>
                                <label htmlFor="less_than" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>If less than 3 yrs enter previous address:</strong></label>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="less_than" 
                                        id="less_than" 
                                        className={classes.inputStyle1} 
                                        value={previousAddress}
                                        onChange={(event)=>setPreviousAddress(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                        
                        

                    </Grid>
                </Grid>


                <h3 className={classes.fieldsetH3}>Employment Information</h3>

                <Grid container>
                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="employer_name"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Employer's Name:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="employer_name" 
                                        id="employer_name" 
                                        className={classes.inputStyle1}
                                        value={employerName}
                                        onChange={(event)=>setEmployerName(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="employer_phone"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Employer Phone:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <ReactInput
                                        value={employerPhone}
                                        onChange={setEmployerPhone}
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="employer_address"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Employer Address:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="employer_address" 
                                        id="employer_address" 
                                        className={classes.inputStyle1}
                                        value={employerAddress}
                                        onChange={(event)=>setEmployerAddress(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="job_title"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Job Title:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="job_title" 
                                        id="job_title" 
                                        className={classes.inputStyle1} 
                                        value={jobTitle}
                                        onChange={(event)=>setJobTitle(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                    
                    </Grid>




                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>   


                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="date_hired"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Date Hired:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <ReactInput
                                        placeholder='MM/DD/YYYY'
                                        value={dateHire}
                                        onChange={setDateHire}
                                        parse={parse2}
                                        format={dateFormat}
                                        className={classes.inputStyle1}
                                />
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="monthlyincome"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Monthly Gross Income:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                       id='monthlyincome'
                                       name="monthlyincome" 
                                       decimalsLimit={2} 
                                       style={{paddingLeft: '35px', fontFamily: 'sans-serif'}} 
                                       className={classes.inputStyle1} 
                                       onValueChange={(value, name, values) => setMonthlyGrossIncome(value!)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5}>
                                <label htmlFor="otherincome"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Other Income (per month):</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                       id='otherincome'
                                       name="otherincome" 
                                       decimalsLimit={2} 
                                       style={{paddingLeft: '35px', fontFamily: 'sans-serif'}} 
                                       className={classes.inputStyle1} 
                                       onValueChange={(value, name, values) => setOtherIncome(value!)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} style={{paddingTop: '8px', paddingBottom: '0'}}>
                                <label style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Complete if current employment is less than 2 years:</strong></label>
                            </Grid>
                        </Grid>

                        <Grid container style={{alignItems: 'center', justifyContent:'space-between'}}>
                            <Grid item xs={7.8}>
                                <Grid container className={classes.gridContaineerResponsive}>
                                    <Grid item xs={12}>
                                        <label htmlFor="prev_employer" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Previous Employers Name:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}>
                                            <input 
                                                type="text" 
                                                name="prev_employer" 
                                                id="prev_employer"
                                                className={classes.inputStyle1} 
                                                value={prevEmployer}
                                                onChange={(event)=>setPrevEmployer(event.currentTarget.value)}
                                            />
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container className={classes.gridContaineerResponsive}>
                                    <Grid item xs={12}>
                                        <label htmlFor="year_expr" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Yrs Employed:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}>
                                            <input 
                                                type="text" 
                                                name="year_expr" 
                                                id="year_expr" 
                                                className={classes.inputStyle1} 
                                                value={yearsEmployed}
                                                onChange={(event)=>setYearsEmployed(event.currentTarget.value)}
                                            />
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        



                    </Grid>
                </Grid>

                <p className={classes.paragraph} style={{lineHeight: 1.3, marginTop: '15px'}}><strong>NOTE:</strong> Alimony, child support, or separate maintenance income need not be revealed if You do not choose to have it considered as a basis for this credit request.</p>
            </fieldset>
        </>
    );
};
export default FieldSet3;