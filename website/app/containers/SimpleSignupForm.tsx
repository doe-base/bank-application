'use client';
import React, { useEffect, useState } from 'react';
import useStyles from '../styles/loan_application';
import FieldSet1 from '../components/SignupForm/FieldSet1';
import axios from 'axios';
import Popup from '../components/Popup/Popup';
import { ThreeCircles } from 'react-loader-spinner';


interface UserFormData{
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
  };
const SimpleSignupFormContainer: React.FC = () => {
    const classes = useStyles();

    const [formSubmitAttemt, setFormSubmitAttemt] = useState<boolean>(false);

    const [firstName, setFirstName] = useState<string>('')
    const [firstNameBool, setFirstNameBool] = useState<boolean>(false)
    const [lastName, setLastName] = useState<string>('')
    const [lastNameBool, setLastNameBool] = useState<boolean>(false)
    const [middleName, setMiddleName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [emailBool, setEmailNameBool] = useState<boolean>(false)
    
    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [needed, setNeeded] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [userFormData, setUserFormData] = useState<UserFormData | null>(null);


    const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setFormSubmitAttemt(true)

        firstName === '' ? setFirstNameBool(true) : setFirstNameBool(false)
        lastName === '' ? setLastNameBool(true) : setLastNameBool(false)
        email === '' ? setEmailNameBool(true) : setEmailNameBool(false)


        if(firstName === '') {
            document.getElementById('reg-first-name')?.focus()
            return
        }else if(lastName === '') {
            document.getElementById('reg-last-name')?.focus()
            return
        }else if(email === '') {
            document.getElementById('reg-email')?.focus()
            return
        }

        setLoading(true)
        setName('')
        setNeeded(false)
        setErrorMessage('')
        const url = process.env.NEXT_PUBLIC_REGISTRATION_FORM || ''
        const newFormData = new FormData;
        newFormData.append('firstName', firstName);
        newFormData.append('lastName', lastName);
        newFormData.append('middleName', middleName);
        newFormData.append('email', email);
        axios.post(url, newFormData)
        .then(response => {
            setUserFormData(response.data)
            setLoading(false)
            setName('enter-otp')
            setNeeded(true)
        })
        .catch(error => {
            if(error.response){
                setErrorMessage(error.response.data)
            }else{
                setErrorMessage('Something went wrong')
            }
            setLoading(false)
        });


    }

    useEffect(()=> {
        formSubmitAttemt && firstName === '' ? setFirstNameBool(true) : setFirstNameBool(false)
        formSubmitAttemt &&  lastName === '' ? setLastNameBool(true) : setLastNameBool(false)
        formSubmitAttemt &&  email === '' ? setEmailNameBool(true) : setEmailNameBool(false)
        
    }, [firstName, lastName, email])

  return (
    <>
        <main className={classes.main}>
                <header className={classes.header}>
                    <div className={classes.headerHalf}>
                        <a href="/" className={classes.logoLink}>
                            <img src="/imgs/altlogo.png" alt="Elite Community Credit Union Logo" className={classes.logo} />
                        </a>
                        <address className={classes.formHeaderAddress}>
                        [Addres goes here]<br />
                        Phone: NIL <span>•</span> Fax: NIL
                        </address>
                    </div>
                    <div className={classes.headerHalf}>
                        <h1 className={classes.formHeaderH1}>Secure Registration Form</h1>
                    </div>
                </header>

                <form onSubmit={formSubmitHandler} className={classes.formBody}>


                    <FieldSet1  
                        classes={classes} 
                        firstName={firstName} 
                        lastName={lastName}
                        middleName={middleName}
                        email={email}
                    
                        setFirstName={setFirstName} 
                        setLastName={setLastName} 
                        setMiddleName={setMiddleName}
                        setEmail={setEmail}

                        firstNameBool={firstNameBool} 
                        lastNameBool={lastNameBool} 
                        emailNameBool={emailBool}

                        
                    />


{/* Form Submit */}
                    <fieldset className={classes.fieldset}>
                        <legend className={classes.fieldsetTitle}>Submit Application</legend>


                        <p style={{margin: '0 0 13px', lineHeight: '1.25'}}>By pressing the "Submit Form" button below, you acknowledge that you have read, understood, and agree to the bank's Terms and Conditions. These include important details regarding your account's use, fees, privacy policies, and your rights as a customer. You also consent to receive electronic communications related to your account, where applicable. Please review the <a style={{textDecoration: 'underline', cursor: 'not-allowed'}}>Terms and Conditions</a>  carefully before providing your consent.</p>


                        <div className="field-button">
                            <input disabled={loading}  type="submit" className={loading ? classes.disableSubmitBtn : classes.submitButton} value="Submit Form" />
                        </div>
                        {
                            loading
                            ?                                           
                            <div>
                                <ThreeCircles
                                    visible={true}
                                    height="20"
                                    width="20"
                                    color="#4fa94d"
                                    ariaLabel="three-circles-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </div>
                            :null
                        }
                        <span className={classes.secondPartLinkSpan}>{errorMessage}</span>
                    </fieldset>


                </form>

        </main>

        <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName} userFormData={userFormData}/>
    </>
  )
};

export default SimpleSignupFormContainer;
