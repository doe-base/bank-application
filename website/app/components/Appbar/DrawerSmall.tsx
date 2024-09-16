import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as ROUTES from '../../constants/routes';
import {useStyles, Section} from "./style";
import { HiLockOpen } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import Popup from "../Popup/Popup";


interface Props{
    searchActive: boolean;
    setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
    setSmallLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
    setNavActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const SmallDrawer: React.FC<Props> = ({ searchActive, setSearchActive, setSmallLoginActive, setNavActive }) => {
    const classes = useStyles();

    const [activeMenu, setActiveMenu] = useState<string | null>(localStorage.getItem('active-menu'));
    const [needed, setNeeded] = useState<boolean>(false);
    const [name2, setName] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useRouter();


    const handleActiveChange =(name:string)=>{
        setActiveMenu(name)
        localStorage.setItem('active-menu', name)
    };
    const openSmallLogin =()=>{
        setSmallLoginActive(true)
        setNavActive(false)
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
    const handleSearchFormSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        navigate.push(`/ecw/search-result?search-term=${searchTerm}`)
    };


    useEffect(()=> {
        if(localStorage.getItem('active-menu')){
            setActiveMenu(localStorage.getItem('active-menu'))
        }else{
            setActiveMenu('credit')
        };
    }, [searchActive]);

    return(
        <>
            <Section>
                <ul className={classes.smallul}>
                    <div className={classes.smallnavHolder}>
                        <div className={classes.half} onClick={()=> openSmallLogin()}>
                            <a className={classes.smallLink}>
                                <div>
                                    <HiLockOpen className={classes.icon} />
                                    <HiLockClosed id="hover-icon" className={classes.icon}/>
                                    
                                    <span id="dt-only" style={{fontSize: '0.9rem'}}>Online Access</span>
                                    <span id="dt-only2" style={{fontSize: '0.9rem'}}>Login</span>
                                </div>
                            </a>
                        </div>
                        <div className={classes.half} onClick={()=> setSearchActive(!searchActive)}>
                            {
                                searchActive
                                ?
                                <form onSubmit={handleSearchFormSubmit} className={classes.smallForm}>
                                    <input 
                                        type="text" 
                                        placeholder="SEARCH HERE" 
                                        autoFocus={searchActive} 
                                        className={classes.smallInput}
                                        value={searchTerm}
                                        onChange={(event)=> setSearchTerm(event.currentTarget.value)}
                                    />
                                </form>
                                :
                                <a className={classes.smallLink}>
                                    <div>
                                        <IoSearch className={classes.icon} />
                                    </div>
                                </a>
                            }
                        </div>
                    </div>

                    <div className={classes.smallnavHolder}>
                        <div className={classes.halfApp}>
                            <a className={classes.smallLink}>
                                <div className={classes.icon}>
                                    <i className="fa fa-apple"></i>
                                </div>
                            </a>
                        </div>
                        <div className={classes.halfApp}>
                            <a className={classes.smallLink}>
                                <div className={classes.icon}>
                                    <i className="fa fa-android"></i>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={classes.smallnavItems}>
                            <button className={activeMenu === 'credit' ? classes.smallnavItemsButtonActive : classes.smallnavItemsButton} onClick={()=> handleActiveChange('credit')}>My Credit Union</button>
                            {
                                activeMenu === 'credit'
                                ?
                                <div className={classes.mob}>
                                    <a href={ROUTES.BECOME_A_MEMBER}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Become A Member</a></div>
                                    </a>
                                    <a href={ROUTES.CONTACT_US}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Contact Us</a></div>
                                    </a>
                                    <a href={ROUTES.HOLIDAY_SCHEDULE}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Holiday Schedule</a></div>
                                    </a>
                                    <a style={{textDecoration: 'none'}}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Privacy Policy</a></div>
                                    </a>
                                </div>
                                :
                                null
                            }
                            <button className={activeMenu === 'product' ? classes.smallnavItemsButtonActive : classes.smallnavItemsButton} onClick={()=> handleActiveChange('product')}>Products & Services</button>
                            {
                                activeMenu === 'product'
                                ?
                                <div className={classes.mob}>
                                    <a href={ROUTES.LOAN_RATES}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Loan Rates</a></div>
                                    </a>
                                    <a href={ROUTES.LOAN_APPLICATION}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Loan Application</a></div>
                                    </a>
                                    <a href={ROUTES.DEPOSITE_RATES}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Deposit Rates</a></div>
                                    </a>
                                    <a href={ROUTES.CHECKING_ACCOUNTS}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Checking Accounts</a></div>
                                    </a>
                                    <a href={ROUTES.CREDIT_CARDS}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Credit Cards</a></div>
                                    </a>
                                    <a href={ROUTES.CU_SERVICE}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>CU Services</a></div>
                                    </a>
                                    <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Student Loans</a></div>
                                </div>
                                :
                                null
                            }
                            <button className={activeMenu === 'tool' ? classes.smallnavItemsButtonActive : classes.smallnavItemsButton} onClick={()=> handleActiveChange('tool')}>Tools & Resources</button>
                            {
                                activeMenu === 'tool'
                                ?
                                <div className={classes.mob}>
                                    <a href={ROUTES.LOAN_APPLICATION}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Loan Application</a></div>
                                    </a>
                                    <a href={ROUTES.CALCULATOR}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>Calculators</a></div>
                                    </a>
                                    <a href={ROUTES.ATM_LOCATOR}>
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>ATM Locators</a></div>
                                    </a>
                                    <a onClick={handleeZCard} target="_blank" href="https://www.eZCardInfo.com">
                                        <div id="linkIconHolder" className={classes.mobLi}><a id="linkCard" className={classes.mobA}>eZCardInfo</a></div>
                                    </a>
                                    <a onClick={handlAllied} target="_blank" href="https://eliteccu.iqq.alliedsolutions.net/iQQ/ConsumerWebsite/Home">
                                        <div id="linkIconHolder" className={classes.mobLi} style={{borderBottom: '1px solid #583680'}}><a id="linkCard" className={classes.mobA}>Collateral Protection</a></div>
                                    </a>
                                </div>
                                :
                                null
                            }
                    </div>
                </ul>

            </Section>
            <Popup needed={needed} setNeeded={setNeeded} name={name2} setName={setName}/>
        </>

    );
};

export default SmallDrawer;