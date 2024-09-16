'use client';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { templateParser, templateFormatter, parseDigit } from 'input-format';
import ReactInput from 'input-format/react';
import CurrencyInput from 'react-currency-input-field';


interface Props {
    applicationType1: string;
    classes: any;

    jointapplicantName3: string;
    jointsetApplicantName3: React.Dispatch<React.SetStateAction<string>>
    jointapplicantName3Bool: boolean;
    jointdriverLicense3: string;
    jointsetDriverLicense3: React.Dispatch<React.SetStateAction<string>>
    jointdriverLicenseState3: string;
    jointsetDriverLicenseState3: React.Dispatch<React.SetStateAction<string>>
    jointsocialSecurity3: string;
    jointsetSocialSecurity3: any
    jointsocialSecurity3Bool: boolean;
    jointapplicantEmail3: string;
    jointsetApplicantEmail3: React.Dispatch<React.SetStateAction<string>>
    jointapplicantEmail3Bool: boolean;
    jointusCitizen: string;
    jointsetUsCitizen: React.Dispatch<React.SetStateAction<string>>
    jointbrithday3: string;
    jointsetbrithday3: any
    jointbrithdayValid: boolean
    jointbrithday3Bool: boolean;
    jointmaritalStatus: string;
    jointsetMaritalStatus: React.Dispatch<React.SetStateAction<string>>
    jointmaritalStatusBool: boolean;
    jointhomePhone: string;
    jointsetHomePhone: any
    jointcellPhone: string;
    jointsetCellPhone: any
    jointcellPhoneBool: boolean;
    jointstreetAddress: string;
    jointsetStreetAddress: React.Dispatch<React.SetStateAction<string>>
    jointstreetAddressBool: boolean;
    jointcity: string;
    jointsetCity: React.Dispatch<React.SetStateAction<string>>
    jointcityBool: boolean;
    jointstate: string;
    jointsetState: React.Dispatch<React.SetStateAction<string>>
    jointstateBool: boolean;
    jointzipcode: string;
    jointsetZipcode: React.Dispatch<React.SetStateAction<string>>
    jointzipcodeBool: boolean;
    jointcurrentAddressSince: string;
    jointsetCurrentAddressSince: any
    jointcurrentAddressSinceBool: boolean;
    jointpreviousAddress: string;
    jointsetPreviousAddress: React.Dispatch<React.SetStateAction<string>>
    jointemployerName: string;
    jointsetEmployerName: React.Dispatch<React.SetStateAction<string>>
    jointemployerPhone: string;
    jointsetEmployerPhone: any;
    jointemployerAddress: string;
    jointsetEmployerAddress: React.Dispatch<React.SetStateAction<string>>
    jointjobTitle: string;
    jointsetJobTitle: React.Dispatch<React.SetStateAction<string>>
    jointdateHire: string;
    jointsetDateHire: any
    jointmonthlyGrossIncome: string;
    jointsetMonthlyGrossIncome: React.Dispatch<React.SetStateAction<string>>
    jointotherIncome: string;
    jointsetOtherIncome: React.Dispatch<React.SetStateAction<string>>
    jointprevEmployer: string;
    jointsetPrevEmployer: React.Dispatch<React.SetStateAction<string>>
    jointyearsEmployed: string;
    jointsetYearsEmployed: React.Dispatch<React.SetStateAction<string>>
}

const FieldSet4: React.FC<Props> = ({   
        applicationType1,   
        classes, 
        jointapplicantName3,
        jointsetApplicantName3,
        jointapplicantName3Bool,
        jointdriverLicense3,
        jointsetDriverLicense3,
        jointdriverLicenseState3,
        jointsetDriverLicenseState3,
        jointsocialSecurity3,
        jointsetSocialSecurity3,
        jointsocialSecurity3Bool,
        jointapplicantEmail3,
        jointsetApplicantEmail3,
        jointapplicantEmail3Bool,
        jointusCitizen,
        jointsetUsCitizen,
        jointbrithday3,
        jointsetbrithday3,
        jointbrithdayValid,
        jointbrithday3Bool,
        jointmaritalStatus,
        jointsetMaritalStatus,
        jointmaritalStatusBool,
        jointhomePhone,
        jointsetHomePhone,
        jointcellPhone,
        jointsetCellPhone,
        jointcellPhoneBool,
        jointstreetAddress,
        jointsetStreetAddress,
        jointstreetAddressBool,
        jointcity,
        jointsetCity,
        jointcityBool,
        jointstate,
        jointsetState,
        jointstateBool,
        jointzipcode,
        jointsetZipcode,
        jointzipcodeBool,
        jointcurrentAddressSince,
        jointsetCurrentAddressSince,
        jointcurrentAddressSinceBool,
        jointpreviousAddress,
        jointsetPreviousAddress,
        jointemployerName,
        jointsetEmployerName,
        jointemployerPhone,
        jointsetEmployerPhone,
        jointemployerAddress,
        jointsetEmployerAddress,
        jointjobTitle,
        jointsetJobTitle,
        jointdateHire,
        jointsetDateHire,
        jointmonthlyGrossIncome,
        jointsetMonthlyGrossIncome,
        jointotherIncome,
        jointsetOtherIncome,
        jointprevEmployer,
        jointsetPrevEmployer,
        jointyearsEmployed,
        jointsetYearsEmployed,
    }) => {

    const [isDisable, setIsDisable] = useState<boolean>(false);

    const TEMPLATE = 'xxx-xx-xxxx';
    const parse = templateParser(TEMPLATE, parseDigit);
    const format = templateFormatter(TEMPLATE);
 
    const TEMPLATE2 = 'xx/xx/xxxx';
    const parse2 = templateParser(TEMPLATE2, parseDigit);
    const dateFormat = templateFormatter(TEMPLATE2);

    const TEMPLATE22 = 'xx/xxxx';
    const parse22 = templateParser(TEMPLATE22, parseDigit);
    const dateFormat2 = templateFormatter(TEMPLATE22);

    const TEMPLATE3 = '(xxx) xxx-xxxx';
    const parse3 = templateParser(TEMPLATE3, parseDigit);
    const usNumberFormat = templateFormatter(TEMPLATE3);

    useEffect(()=> {
        if(applicationType1 === 'Individual'){
            setIsDisable(true)
        }else{
            setIsDisable(false)
        }
    }, [applicationType1])

    return (
        <>
{/* Primary Applicant */}
            <fieldset className={isDisable ? classes.fieldsetDisable : classes.fieldset}>
                <legend className={classes.fieldsetTitle} style={isDisable ? {display: 'none'} : {display: 'block'}}>Joint Applicant</legend>
                <h3 className={classes.fieldsetH3} style={isDisable ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>Joint Applicant Information</h3>

                <Grid container style={{marginBottom: '2rem'}}>
                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointapplicant_name" className={classes.labelResponsiveStyle}><strong className={classes.strong}>Applicant's Name:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                            id="jointapplicant_name" 
                                            type="text" 
                                            name="jointapplicant_name" 
                                            className={classes.inputStyle1}
                                            value={jointapplicantName3} 
                                            onChange={(event)=> jointsetApplicantName3(event.currentTarget.value)} 
                                    />
                                    {jointapplicantName3Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointdriver_license" className={classes.labelResponsiveStyle}><strong className={classes.strong}>Driver License #:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        id="jointdriver_license" 
                                        type="text" 
                                        name="jointdriver_license" 
                                        className={classes.inputStyle1} 
                                        value={jointdriverLicense3} 
                                        onChange={(event)=> jointsetDriverLicense3(event.currentTarget.value)} 
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
                                    id='jointdriver_license_state'
                                    className={classes.inputStyle1} 
                                    value={jointdriverLicenseState3}
                                    onChange={(event)=> jointsetDriverLicenseState3(event.currentTarget.value)}
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
                                <label htmlFor="jointsocail_security"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Social Security #:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                
                                <span className={classes.val}>
                                    <ReactInput
                                        id='jointsocial_security'
                                        value={jointsocialSecurity3}
                                        onChange={jointsetSocialSecurity3}
                                        parse={parse}
                                        format={format}
                                        className={classes.inputStyle1}
                                    />
                                    {jointsocialSecurity3Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>


                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointemail"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Email:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        id="jointemail" 
                                        type="email" 
                                        name="jointemail" 
                                        className={classes.inputStyle1} 
                                        value={jointapplicantEmail3}
                                        onChange={(event)=> jointsetApplicantEmail3(event.currentTarget.value)} 
                                    />
                                    {jointapplicantEmail3Bool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointus_citizen"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>US Citizen:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <div id='radio-buttons' className={classes.radio}>
                                    <label htmlFor="jointus_citizen_yes" className={classes.radioLabel}>
                                        <input 
                                            type="radio" 
                                            name="jointus_citizen" 
                                            id="jointus_citizen_yes" 
                                            value="Yes" 
                                            checked={jointusCitizen === 'Yes'}
                                            onChange={(event)=> jointsetUsCitizen(event.target.value)}
                                        />
                                        <span className={classes.radioLabelSpan}>Yes</span>
                                    </label>
                                    <label htmlFor="jointus_citizen_no">
                                        <input 
                                            type="radio" 
                                            name="jointus_citizen" 
                                            id="jointus_citizen_no" 
                                            value="No" 
                                            checked={jointusCitizen === 'No'}
                                            onChange={(event)=> jointsetUsCitizen(event.target.value)}
                                        />
                                        <span className={classes.radioLabelSpan}>No</span>
                                    </label>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointbirthday"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Birthday:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <ReactInput
                                        id='jointapp_birthbay'
                                        placeholder='MM/DD/YYYY'
                                        parse={parse2}
                                        format={dateFormat}
                                        className={classes.inputStyle1}
                                        value={jointbrithday3}
                                        onChange={jointsetbrithday3}
                                    />
                                    {jointbrithday3Bool && jointbrithdayValid ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                    {!jointbrithdayValid ? <div id="loantype-error" className="error">Please enter a valid date.</div> : null}
                                    
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
                                    id='jointmarital_status'
                                    className={classes.inputStyle1} 
                                    value={jointmaritalStatus}
                                    onChange={(event)=>jointsetMaritalStatus(event.currentTarget.value)}
                                >
                                    <option defaultValue=''>Select...</option>
                                    <option value="Married">Married</option>
                                    <option value="Separated">Separated</option>
                                    <option value="Single">Single</option>
                                </select>
                                {jointmaritalStatusBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                            </Grid>
                        </Grid>



                    </Grid>

                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>


                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointhome_number"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Home Phone:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <ReactInput
                                        value={jointhomePhone}
                                        onChange={jointsetHomePhone}
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointcell_number"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Cell Phone:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                 <span className={classes.val}>
                                    <ReactInput
                                        id='jointcell_phone'
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                        value={jointcellPhone}
                                        onChange={jointsetCellPhone}
                                    />
                                    {jointcellPhoneBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointstree_address"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Street Addres:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        id="jointstree_address" 
                                        type="text" 
                                        name="jointstree_address" 
                                        className={classes.inputStyle1}
                                        value={jointstreetAddress} 
                                        onChange={(event)=> jointsetStreetAddress(event.currentTarget.value)} 
                                    />
                                    {jointstreetAddressBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointcity"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>City:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="jointcity" 
                                        id="jointcity" 
                                        className={classes.inputStyle1}
                                        value={jointcity} 
                                        onChange={(event)=> jointsetCity(event.currentTarget.value)}
                                    />
                                    {jointcityBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointapplicant_state"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>State:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <select 
                                        id='jointapplicant_state'
                                        className={classes.inputStyle1} 
                                        value={jointstate}
                                        onChange={(event)=>jointsetState(event.currentTarget.value)}
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

                                        {jointstateBool ? <div id="loantype-error" className="error">This field is required.</div> : null}

                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointzip_code"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Zip Code:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="jointzip_code" 
                                        id="jointzip_code" 
                                        className={classes.inputStyle1}
                                        value={jointzipcode}
                                        onChange={(event)=>jointsetZipcode(event.currentTarget.value)}
                                    />
                                    {jointzipcodeBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5}>
                                <label htmlFor="jointaddress_since"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Current Address since:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <ReactInput
                                        id='jointaddress_since'
                                        placeholder='MM/YYYY'
                                        value={jointcurrentAddressSince}
                                        onChange={jointsetCurrentAddressSince}
                                        parse={parse22}
                                        format={dateFormat2}
                                        className={classes.inputStyle1}
                                    />
                                    {jointcurrentAddressSinceBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                                </span>
                            
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} style={{paddingTop: '8px'}}>
                                <label htmlFor="jointless_than" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>If less than 3 yrs enter previous address:</strong></label>
                            </Grid>
                            <Grid item xs={12}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="jointless_than" 
                                        id="jointless_than" 
                                        className={classes.inputStyle1} 
                                        value={jointpreviousAddress}
                                        onChange={(event)=>jointsetPreviousAddress(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>
                        
                        

                    </Grid>
                </Grid>


                <h3 className={classes.fieldsetH3} style={isDisable ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>Joint Applicant Employment Information</h3>

                <Grid container>
                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointemployer_name"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Employer's Name:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="jointemployer_name" 
                                        id="jointemployer_name" 
                                        className={classes.inputStyle1}
                                        value={jointemployerName}
                                        onChange={(event)=>jointsetEmployerName(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointemployer_phone"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Employer Phone:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <ReactInput
                                        value={jointemployerPhone}
                                        onChange={jointsetEmployerPhone}
                                        parse={parse3}
                                        format={usNumberFormat}
                                        className={classes.inputStyle1}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointemployer_address"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Employer Address:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="jointemployer_address" 
                                        id="jointemployer_address" 
                                        className={classes.inputStyle1}
                                        value={jointemployerAddress}
                                        onChange={(event)=>jointsetEmployerAddress(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointjob_title"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Job Title:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val}>
                                    <input 
                                        type="text" 
                                        name="jointjob_title" 
                                        id="jointjob_title" 
                                        className={classes.inputStyle1} 
                                        value={jointjobTitle}
                                        onChange={(event)=>jointsetJobTitle(event.currentTarget.value)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                    
                    </Grid>




                    <Grid item xs={12} md={6} className={classes.gridItemPaddingWT}>   


                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointdate_hired"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Date Hired:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <ReactInput
                                        placeholder='MM/DD/YYYY'
                                        value={jointdateHire}
                                        onChange={jointsetDateHire}
                                        parse={parse2}
                                        format={dateFormat}
                                        className={classes.inputStyle1}
                                />
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5} className={classes.gridItemPadding}>
                                <label htmlFor="jointmonthlyincome"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Monthly Gross Income:</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                       id='jointmonthlyincome'
                                       name="jointmonthlyincome" 
                                       decimalsLimit={2} 
                                       style={{paddingLeft: '35px', fontFamily: 'sans-serif'}} 
                                       className={classes.inputStyle1} 
                                       onValueChange={(value, name, values) => jointsetMonthlyGrossIncome(value!)}
                                    />
                                </span>
                            </Grid>
                        </Grid>

                        <Grid container className={classes.gridContaineerResponsive}>
                            <Grid item xs={12} md={5}>
                                <label htmlFor="jointotherincome"  className={classes.labelResponsiveStyle}><strong className={classes.strong}>Other Income (per month):</strong></label>
                            </Grid>
                            <Grid item xs={12} md={7} className={classes.gridItemPadding}>
                                <span className={classes.val2}>
                                    <CurrencyInput 
                                       id='jointotherincome'
                                       name="jointotherincome" 
                                       decimalsLimit={2} 
                                       style={{paddingLeft: '35px', fontFamily: 'sans-serif'}} 
                                       className={classes.inputStyle1} 
                                       onValueChange={(value, name, values) => jointsetOtherIncome(value!)}
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
                                        <label htmlFor="jointprev_employer" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Previous Employers Name:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}>
                                            <input 
                                                type="text" 
                                                name="jointprev_employer" 
                                                id="jointprev_employer"
                                                className={classes.inputStyle1} 
                                                value={jointprevEmployer}
                                                onChange={(event)=>jointsetPrevEmployer(event.currentTarget.value)}
                                            />
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container className={classes.gridContaineerResponsive}>
                                    <Grid item xs={12}>
                                        <label htmlFor="jointyear_expr" style={{display: 'inline-block', width: '100%', textAlign: 'left'}}><strong className={classes.strong}>Yrs Employed:</strong></label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span className={classes.val}>
                                            <input 
                                                type="text" 
                                                name="jointyear_expr" 
                                                id="jointyear_expr" 
                                                className={classes.inputStyle1} 
                                                value={jointyearsEmployed}
                                                onChange={(event)=>jointsetYearsEmployed(event.currentTarget.value)}
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
export default FieldSet4;