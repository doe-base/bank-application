import React, { useEffect, useState } from "react";
import * as ROUTES from '../../constants/routes';
import {useStyles} from "./style";


interface Props{
    searchActive: boolean;
    activeMenu: string | null;
    setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>;
    setNeeded: React.Dispatch<React.SetStateAction<boolean>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
};
const MenuComponent: React.FC<Props> = ({ 
    searchActive, 
    activeMenu, 
    setActiveMenu, 
    setNeeded, 
    setName, 
}) => {
    const classes = useStyles();

    const handleActiveChange =(name:string)=>{
        setActiveMenu(name)
        localStorage.setItem('active-menu', name)
    };
    const handleeZCard = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName("credit_card")
        setNeeded(true)
    };
    const handlAllied = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName("colledral-protection")
        setNeeded(true)
    };


    useEffect(()=> {
        if(localStorage.getItem('active-menu')){
            setActiveMenu(localStorage.getItem('active-menu'))
        }else{
            setActiveMenu('credit')
        };
    }, [searchActive]);
    

    return(
   
        <section>
            <ul className={classes.ul}>
                <button 
                    onClick={()=> handleActiveChange('credit')} 
                    className={activeMenu==='credit' ? classes.activeButton : classes.button}>My Credit Union</button>
                <button 
                    onClick={()=> handleActiveChange('product')} 
                    className={activeMenu==='product' ? classes.activeButton : classes.button}>Products & Services</button>
                <button 
                    onClick={()=> handleActiveChange('tool')} 
                    className={activeMenu==='tool' ? classes.activeButton : classes.button}>Tools & Resources</button>
                {
                    activeMenu === 'credit'
                    ?
                        <section>
                            <div>
                                <a href={ROUTES.BECOME_A_MEMBER}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-users"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Become A Member</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.CONTACT_US}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-envelope"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Contact Us</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.HOLIDAY_SCHEDULE}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-calendar-times-o"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Holiday Schedule</p>
                                        </div>
                                    </div>
                                </a>


                                <a style={{textDecoration: 'none'}}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                            <div id="linkCard" className={classes.linkIconHolder}>
                                                <div className={classes.linkCardIcon}><i className="fa fa-file-text-o"></i></div>
                                                <p style={{fontSize: '0.9rem'}}>Privacy Policy</p>
                                            </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                    :
                    activeMenu === 'product'
                    ?
                        <section>
                            <div>
                                <a href={ROUTES.LOAN_RATES}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-percent" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Loan Rates</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.LOAN_APPLICATION}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Loan Application</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.DEPOSITE_RATES}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-percent" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Deposit Rates</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.CHECKING_ACCOUNTS}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-usd" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Checking Accounts</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.CREDIT_CARDS}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-credit-card-alt" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Credit Cards</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.CU_SERVICE}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-shield" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>CU Services</p>
                                        </div>
                                    </div>
                                </a>

                                <a>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}>
                                                <img id="linkCard2" src="/imgs/student-loads.svg" alt="" />
                                            </div>
                                            <p style={{fontSize: '0.9rem'}}>Student Loans</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                    :
                    activeMenu === 'tool'
                    ?
                        <section>
                            <div>
                                <a href={ROUTES.LOAN_APPLICATION}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-file-text-o"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Loan Application</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.CALCULATOR}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-calculator" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Calculators</p>
                                        </div>
                                    </div>
                                </a>

                                <a href={ROUTES.ATM_LOCATOR}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-map-pin" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>ATM Locators</p>
                                        </div>
                                    </div>
                                </a>

                                <a onClick={handleeZCard}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-credit-card-alt" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>eZCardInfo</p>
                                        </div>
                                    </div>
                                </a>

                                <a onClick={handlAllied}>
                                    <div id="linkIconHolder" className={classes.linkCard}>
                                        <div id="linkCard" className={classes.linkIconHolder}>
                                            <div className={classes.linkCardIcon}><i className="fa fa-car" aria-hidden="true"></i></div>
                                            <p style={{fontSize: '0.9rem'}}>Collateral Protection</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                    :
                    null
                }
            </ul>
        </section>
                  
    )
};

export default MenuComponent;