'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { HiLockOpen } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import Drawer from '../Appbar/Drawer';
import SmallDrawer from '../Appbar/DrawerSmall';
import SmallLogin from '../Appbar/LoginComponent';
import {useStyles, NavBig, NavSmall, MeasureHeight} from './style';


interface Props {};

const Nav: React.FC<Props> = () =>{
    const classes = useStyles();

    const [firstButton, setFirstButton] = useState<boolean>(false);
    const [secondButton, setSecondButton] = useState<boolean>(false);
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [navDisplay, setNavDisplay] = useState<string>('');
    const [navActive, setNavActive] = useState<boolean>(false);
    const [smallLoginActive, setSmallLoginActive] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useRouter();

    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollThreshold = 100;
            const navLinkEl =  document.getElementById('nav-link');
            const navLinkEl2 =  document.getElementById('nav-link2');
            const navLinkEl3 =  document.getElementById('nav-link3');
            const navSecEl =  document.getElementById('nav-section');
            const logoHolderEl =  document.getElementById('logo-holder');
            
            
            if(scrollTop > scrollThreshold){
                if(navLinkEl && navLinkEl2 && navLinkEl3 && navSecEl && logoHolderEl){

                    navLinkEl.style.marginTop = '10px'
                    navLinkEl2.style.marginTop = '10px'
                    navLinkEl3.style.marginTop = '10px'

                    logoHolderEl.style.height = '60px'

                    navSecEl.style.background = '#150723'
                    navSecEl.style.height = '60px'
                };
                
            }else{
                if(navLinkEl && navLinkEl2 && navLinkEl3 && navSecEl && logoHolderEl){

                    navLinkEl.style.marginTop = '30px'
                    navLinkEl2.style.marginTop = '30px'
                    navLinkEl3.style.marginTop = '30px'

                    logoHolderEl.style.height = '100px'

                    navSecEl.style.background = 'none'
                    navSecEl.style.height = 'auto'
                };

            };
        };

        window.addEventListener('scroll', handleScroll);
    }, []);
    
    
    const closeSearch =()=> {
        setSearchActive(false)
    };
    const closeNav =()=> {
        setSmallLoginActive(false)
        setNavActive(false)
        setSearchActive(false)
    };
    const openNav =()=> {
        setNavActive(true)
    };
    const handleNavClick =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, button:string)=>{
        e.preventDefault()

        switch (button) {
            case '1':
                if(firstButton === true){
                    closeNav()
                    setFirstButton(false)
                    setSecondButton(false)
                }else{
                    setSecondButton(false)
                    setFirstButton(true)
                    setNavDisplay('menu')
                    openNav()
                }
                break;
                
            case '2':
                if(secondButton === true){
                    closeNav()
                    setSecondButton(false)
                    setFirstButton(false)
                }else{
                    setFirstButton(false)
                    setSecondButton(true)
                    setNavDisplay('online')
                    openNav()
                };
                break;
            case '3': 
                setSecondButton(false)
                setFirstButton(false)
                setSearchActive(!searchActive)
                break;
        
            default:
                break;
        };
        
    };
    const closeEverything =()=>{
        closeSearch();
        closeNav();
        setFirstButton(false)
        setSecondButton(false)
        setSmallLoginActive(false)
    };
    const handleSearchFormSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        navigate.push(`/ecw/search-result?search-term=${searchTerm}`)
    };
    return (
        <>
            <MeasureHeight></MeasureHeight>


            <section className={classes.section} id='nav-section'>
                <NavBig>
                    <div className={classes.imgSection}>
                        {
                            searchActive
                            ?
                            <form className={classes.searchForm} onSubmit={handleSearchFormSubmit}>
                                <input 
                                    id='search-here' 
                                    placeholder='SEARCH HERE' 
                                    type="text" 
                                    name='search-here'
                                    autoComplete="off"
                                    className={classes.searchInput} 
                                    value={searchTerm} 
                                    onChange={(event)=> setSearchTerm(event.currentTarget.value)}
                                />
                            </form>
                            :
                            <a id='logo-holder' href="/" className={classes.logo}>
                                <img src="/imgs/logo.png" alt="Elit Credit Union Logo" style={{height: '100%'}}/>
                            </a>

                        }
                    </div>


                    <div className={classes.navigationSection}>
                        <ul className={classes.ul}>
                            <li className={classes.li}>

                                {
                                    navActive
                                    ?
                                    <Drawer name={navDisplay} closeSearch={closeSearch} searchActive={searchActive}/>
                                    :
                                    null
                                }

                                <a id='nav-link' className={firstButton ? classes.navLinkActive : classes.navLink} onClick={(e)=> handleNavClick(e, '1')} style={{cursor: 'pointer'}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <MdOutlineMenu className={classes.icon}/>
                                        <span className="dt-only">Menu</span>
                                    </div>
                                </a>
                            </li>
                            <li className={classes.li2} id='icon-container'>
                                <a id='nav-link2' className={secondButton ? classes.navLinkActive : classes.navLink} onClick={(e)=> handleNavClick(e, '2')} style={{cursor: 'pointer'}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <HiLockOpen id="normal-icon" className={classes.icon} />
                                        <HiLockClosed id="hover-icon" className={classes.icon}/>
                                        
                                        <span className="dt-only">Online Access</span>
                                    </div>
                                </a>
                            </li>

                            <li className={classes.li2} style={{position: 'relative', zIndex: '100'}}>
                                <a id='nav-link3' className={searchActive ? classes.navLinkActive : classes.navLink} onClick={(e)=> handleNavClick(e, '3')} style={{cursor: 'pointer'}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        { searchActive ? <IoCloseSharp className={classes.icon}/> : <IoSearch className={classes.icon}/>}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </NavBig>


                <NavSmall>
                    <div className={classes.imgSection}>
                        {
                            
                            <a href="/">
                                <img src="/imgs/logo.png" alt="Elit Credit Union Logo" className={classes.logo}/>
                            </a>

                        }
                    </div>


                    <div className={classes.navigationSection}>
                        <ul className={classes.ul}>

                        {
                            navActive
                            ?
                            <SmallDrawer searchActive={searchActive} setSearchActive={setSearchActive} setSmallLoginActive={setSmallLoginActive} setNavActive={setNavActive}/>
                            :
                            smallLoginActive
                            ?
                            <SmallLogin  />
                            :
                            null
                        }

                            
                            <li onClick={navActive ? ()=>closeNav() : ()=> openNav()} className={classes.li2} style={{position: 'relative', zIndex: '100'}}>
                                <a  className={classes.navLinkActiveSmall}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        { navActive ? <IoCloseSharp className={classes.icon}/> :  <MdOutlineMenu className={classes.icon}/>}
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </NavSmall>
            </section>
            
            
            
            
            {
                navActive || searchActive || smallLoginActive
                ?
                <div onClick={closeEverything} className={classes.overlay}></div>
                :
                null

            }
        </>
    )
};

export default Nav;