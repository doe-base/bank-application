import React from 'react';
import { Grid } from '@mui/material';
import CurrencyInput from 'react-currency-input-field';
import { templateParser, templateFormatter, parseDigit } from 'input-format';
import ReactInput from 'input-format/react';


interface Props {
    classes: any;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;

    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    setMiddleName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;


    firstNameBool: boolean;
    lastNameBool: boolean;
    emailNameBool: boolean;
}

const FieldSet1: React.FC<Props> = ({ 
    classes, 
    firstName, 
    lastName,
    middleName,
    email,

    setFirstName,
    setLastName,
    setMiddleName,
    setEmail,

    firstNameBool,
    lastNameBool,
    emailNameBool
}) => {

    const TEMPLATE = 'xxx-xx-xxxx'
    const parse = templateParser(TEMPLATE, parseDigit)
    const format = templateFormatter(TEMPLATE)

    const TEMPLATE3 = '(xxx) xxx-xxxx'
    const parse3 = templateParser(TEMPLATE3, parseDigit)
    const usNumberFormat = templateFormatter(TEMPLATE3)

    return (
        <>
{/* Application Type */}
            <fieldset className={classes.fieldset}>
                <legend className={classes.fieldsetTitle}>Full Name</legend>

                <div style={{fontSize: '13px'}}>
                    <p className={classes.paragraph}><strong className={classes.strong}>NOTE</strong>: This is a simplified version of the sign up form, so people can easily sign up and experience the authentication and bank application feature. All other information have be auto created.</p>
                </div>

                <Grid container>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="first-name"><strong className={classes.strong}>First Name:</strong></label>
                        <span className={classes.val}>
                            <input 
                                id='reg-first-name'
                                type="text" 
                                name="reg-first-name" 
                                className={classes.inputStyle1} 
                                value={firstName} 
                                onChange={(event)=> setFirstName(event.currentTarget.value)}
                            />
                            {firstNameBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="last-name"><strong className={classes.strong}>Last Name:</strong></label>
                        <span className={classes.val}>
                            <input 
                                id='reg-last-name'
                                type="text" 
                                name="reg-last-name" 
                                className={classes.inputStyle1} 
                                value={lastName} 
                                onChange={(event)=> setLastName(event.currentTarget.value)}
                            />
                            {lastNameBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="middle-name"><strong className={classes.strong}>Middle Name (optional):</strong></label>
                        <span className={classes.val}>
                            <input 
                                id='reg-middle-name'
                                type="text" 
                                name="reg-middle-name" 
                                className={classes.inputStyle1} 
                                value={middleName} 
                                onChange={(event)=> setMiddleName(event.currentTarget.value)}
                            />
                        </span>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="email"><strong className={classes.strong}>Email Address:</strong></label>
                        <span className={classes.val}>
                            <input 
                                id='reg-email'
                                type="email" 
                                name="reg-email" 
                                className={classes.inputStyle1} 
                                value={email} 
                                onChange={(event)=> setEmail(event.currentTarget.value)}
                            />
                            {emailNameBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>
                </Grid>


                {/* <Grid container>
                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="social_security"><strong className={classes.strong}>Social Security #:</strong></label>
                        <span className={classes.val}>
                            <ReactInput
                                id='reg-social_security'
                                value={socialSecurity}
                                onChange={setSocialSecurity}
                                parse={parse}
                                format={format}
                                className={classes.inputStyle1}
                            />
                            {socialSecurityBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>

                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="email-address"><strong className={classes.strong}>Email Address:</strong></label>
                        <span className={classes.val}>
                            <input 
                                id='reg-email-address'
                                type="email" 
                                name="reg-email-address" 
                                className={classes.inputStyle1} 
                                value={emailAddress} 
                                onChange={(event)=> setEmailAddress(event.currentTarget.value)}
                            />
                            {emailAddressBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>

                    <Grid item className={classes.gridItemPadding} xs={12} md={4}>
                        <label htmlFor="phone-number"><strong className={classes.strong}>Phone Number:</strong></label>
                        <span className={classes.val}>
                            <ReactInput
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                parse={parse3}
                                format={usNumberFormat}
                                className={classes.inputStyle1}
                            />
                            {phoneNumberBool ? <div id="loantype-error" className="error">This field is required.</div> : null}
                        </span>
                    </Grid>
                
                                    
                </Grid> */}
            </fieldset>
        </>
    );
};
export default FieldSet1;