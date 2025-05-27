import React, { useState } from "react";
import {useStyles} from "./style";
import * as ROUTES from '../../constants/routes';
import { ThreeCircles } from "react-loader-spinner";
import axios from 'axios';


interface Props{};
const LoginComponent: React.FC<Props> = ({  }) => {
    const classes = useStyles();

    const [loginId, setLogin] = useState('');
    const [OTP, setOTP] = useState('');
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [enterOTPMode, setEnterOTPMode] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [otpErrorMessage, setOTPErrorMessage] = useState('');

    function CancelOPT() {
        setEnterOTPMode(false)
        setUserEmail('')
    };
    const handleLoginSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoginLoading(true)
        setLoginErrorMessage('')
        setEnterOTPMode(false)
        setUserEmail('')
        setOTP('')
    
            if(!loginId){
                return
            };
    
            const newFormData = new FormData;
            newFormData.append('loginID', loginId);
            const url = process.env.NEXT_PUBLIC_LOGIN_POST || '';
    
            axios
            .post(url, newFormData)
            .then(response => {
                setLoginLoading(false)
                if(response.data.loginIDNotFound){
                    setLoginErrorMessage('The ID you provided could not be found')
                }else{
                    setUserEmail(response.data.email)
                    setEnterOTPMode(true)
                    setTimeout(CancelOPT, 300000);
                };
            })
            .catch(error => {
                setLoginLoading(false)
                setLoginErrorMessage('Something went wrong. Try again')
            });
    }
    const handleOTPSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setLoginLoading(true)
        setOTPErrorMessage('')
    
            if(!OTP){
                return
            };
    
            const newFormData = new FormData;
            newFormData.append('OTP', OTP);
            newFormData.append('loginID', loginId);
            const url = process.env.NEXT_PUBLIC_VERIFY_OTP_POST || '';
            axios
            .post(url, newFormData)
            .then(response => {
                setLoginLoading(false)
               window.location.replace(response.data.redirect_url);
            })
            .catch(error => {
                setLoginLoading(false)
                setOTPErrorMessage('Invalid OTP');
            });
    };


    

    return(
        <>
            {
                enterOTPMode
                ?
                <section className={classes.section2}>
                    <ul className={classes.ul} style={{borderBottom: 'none'}}>
                        <form className={classes.form} onSubmit={(e)=> handleOTPSubmit(e)}>
                            <div className={classes.box}>
                                <div className={classes.firstPart}>
                                    <h2 className={classes.firstPartTitle}>Online Account Access</h2>
                                    <input type="password" placeholder="Enter OPT" className={classes.input1} value={OTP} onChange={(e)=> setOTP(e.currentTarget.value)} autoComplete="new-password" required/>
                                    <button disabled={loginLoading} type="submit" className={loginLoading ? classes.input2Loading : classes.input2} style={{marginBottom: '10px'}}>
                                        <span>VERIFY</span>
                                        {
                                            loginLoading
                                            ?                                           
                                            <div className={classes.input2preloader}>
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
                                    </button>
                                    <span className={classes.secondPartLinkSpan}>{otpErrorMessage}</span>
                                </div>
                                <div className={classes.secondPart}>
                                    <p className={classes.secondPartLink} style={{cursor: 'default'}}>An OTP has been sent to <span>{userEmail}</span>.</p>
                                </div>
                            </div>
                        </form>
                    </ul>
                </section>

                :
                <section className={classes.section2}>
                        <ul className={classes.ul} style={{borderBottom: 'none'}}>
                            <form className={classes.form} onSubmit={handleLoginSubmit}>
                                <div className={classes.box}>

                                    <div className={classes.firstPart}>
                                        <h2 className={classes.firstPartTitle}>Online Account Access</h2>
                                        <input type="password" placeholder="LOGIN ID" className={classes.input1} value={loginId} onChange={(e)=> setLogin(e.currentTarget.value)} autoComplete="new-password" required/>
                                        <button disabled={loginLoading} type="submit" className={loginLoading ? classes.input2Loading : classes.input2} style={{marginBottom: '10px'}}>
                                            <span>LOGIN</span>
                                            {
                                                loginLoading
                                                ?                                           
                                                <div className={classes.input2preloader}>
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
                                        </button>
                                        <span className={classes.secondPartLinkSpan}>{loginErrorMessage}</span>
                                    </div>
                                    <div className={classes.secondPart}>
                                        <a href={ROUTES.BECOME_A_MEMBER_FORM} className={classes.secondPartLink}>Online Enrollment</a>
                                    </div>

                                </div>
                            </form>
                        </ul>
                </section>
            }
        </>
    );
};

export default LoginComponent;