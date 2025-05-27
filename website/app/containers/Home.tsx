import React, { useEffect, useState } from 'react';
import { useContentSections, useContentSections2, useContentSections3, useContentSections4, FirstContent, FirstContentResponsive, FirstContentResponsiveInner, SecondContent, ThirdContent, FouthContent, FifthContent, SithContent, } from '../styles/home';
import * as ROUTES from '../constants/routes';
import { Grid } from '@mui/material';
import { MdMenuBook } from "react-icons/md";
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';
import HeroSection from '../components/HomePage/HeroSection';


const HomeContainer: React.FC = () => {
    const classes2 = useContentSections();
    const classes3 = useContentSections2();
    const classes4 = useContentSections3();
    const classes5 = useContentSections4();

    var [currentDotState, setCurrentDotState] = useState<any>(1);
    const [needed, setNeeded] = useState<boolean>(false);
    const [name, setName] = useState<string>('');


    const handleStarLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setName("home-star-atm")
        setNeeded(true)
    };
    const handleNadaLink = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        event.preventDefault()
        setName("home-nada-link")
        setNeeded(true)
    };
    const handleTruState = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        event.preventDefault()
        setName("home-tru-state")
        setNeeded(true)
    };
    useEffect(() => {
        const sectionEl = document.getElementById("second-content");
        const handleScroll = () => {
            if(sectionEl){
                sectionEl.style.backgroundPositionY = `-${window.scrollY * 0.15}px`
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    useEffect(() => {
        const sectionEl = document.getElementById("fouth-content");
        const sectionRect = sectionEl?.getBoundingClientRect().top;
        const handleScroll = () => {
            if(sectionEl && sectionRect){
                sectionEl.style.backgroundPositionY = `${(window.scrollY - sectionRect) * 0.15}px`
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [currentDotState]);
    useEffect(()=>{
        const card = document.querySelector('.card');
        if(card){
            card.addEventListener('touchstart', function() {
                card.classList.toggle('flip');
            });
            card.addEventListener('touchend', function() {
                card.classList.toggle('flip');
            });
        };
    });




  return (
        <main>
            <HeroSection />
    
            <FirstContent>
                <div className={classes2.inner}>
                    <div className={classes2.inner2}>
                        <div className={classes2.rowHalf}>
                            <a href={ROUTES.LOAN_APPLICATION} className={classes2.linkButtonSmall}>Apply For a Loan</a>
                            <div className={classes2.lostNumberSmall}>
                                Lost/Stolen Debit Cards:
                                <span style={{fontFamily: '"Raleway", sans-serif', marginLeft: '1rem'}}>1-800-523-4175</span>
                            </div>
                            <div className={classes2.lostNumberSecondSmall}>
                                Lost/Stolen VISA Credit Cards:
                                <span style={{fontFamily: '"Raleway", sans-serif', marginLeft: '1rem'}}>1-800-322-8472</span>
                            </div>
                        </div>

                        <h3 className={classes2.firstContentH3}>ATM LOCATORS</h3>
                
                        <div className={classes2.rowHalfLast}>
                            <a onClick={handleStarLink} className={classes2.rowHalfLastLink}>
                                <img src="/imgs/star.gif" alt="Star ATM" className={classes2.rowHalfLastImg}  />
                            </a>
                        </div>
                        <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName}/>
                    </div>
                </div>
            </FirstContent>

            <FirstContentResponsive>
                <FirstContentResponsiveInner>
                    <div className={classes2.firstContentResponsive}>
                        <div className={classes2.halfSmall}>
                            <a href="" className={classes2.linkButtonSmall}>Apply For a Loan</a>
                            <div className={classes2.lostNumberSmall}>
                                Lost/Stolen Debit Cards:
                                <span style={{fontFamily: '"Raleway", sans-serif', marginLeft: '0.5rem'}}>1-800-523-4175</span>
                            </div>
                            <div className={classes2.lostNumberSecondSmall}>
                                Lost/Stolen VISA Credit Cards:
                                <span style={{fontFamily: '"Raleway", sans-serif', marginLeft: '0.5rem'}}>1-800-322-8472</span>
                            </div>
                        </div>

                        <h3 className={classes2.firstContentH3Small}>ATM LOCATORS</h3>

                        <div className={classes2.rowHalfLastSmall}>
                            <a href="" className={classes2.rowHalfLastLink}>
                                <img src="/imgs/star.gif" alt="Star ATM" className={classes2.rowHalfLastImg}  />
                            </a>
                        </div>
                    </div>
                </FirstContentResponsiveInner>
            </FirstContentResponsive>


            <SecondContent id='second-content'>
                <div className={classes3.secondContent1}>
                    <div className={classes3.sectionTitleHolder}>
                        <h2 className={classes3.sectionTitle}>Featured Rates</h2>
                        <a href={ROUTES.LOAN_APPLICATION} className={classes3.sectionTitleLink}>Apply Now</a>
                    </div>
                </div>
                <div className={classes3.secondContent1} style={{marginBottom: '1.5rem'}}>
                    <Grid container style={{alignContent: 'center', justifyContent: 'center'}}>
                        <Grid item xs={11} sm={9} md={6}>
                            <div className={classes3.secondSecCard}>
                                <div className={classes3.secondSecCardImg} style={{backgroundImage: 'url(/imgs/carkey.jpg)'}}></div>
                                <div className={classes3.secondSecText}>
                                    <p className={classes3.secondSecText1}>NEW AUTO</p>
                                    <p className={classes3.secondSecText2}>AS LOW AS</p>
                                    <h2 className={classes3.secondSecText3}>5.50% <span className={classes3.secondSecText4}>APR*</span></h2>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={11} sm={9} md={6}>
                            <div className={classes3.secondSecCard}>
                                <div className={classes3.secondSecCardImg} style={{backgroundImage: 'url(/imgs/card.jpg)'}}></div>
                                <div className={classes3.secondSecText}>
                                    <p className={classes3.secondSecText1}>VISA PREFERRED</p>
                                    <p className={classes3.secondSecText2}>AS LOW AS</p>
                                    <h2 className={classes3.secondSecText3}>13.00% <span className={classes3.secondSecText4}>APR*</span></h2>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={11} sm={9} md={6}>
                            <div className={classes3.secondSecCard}>
                                <div className={classes3.secondSecCardImg} style={{backgroundImage: 'url(/imgs/calculator.jpg)'}}></div>
                                <div className={classes3.secondSecText}>
                                    <p className={classes3.secondSecText1}>USED AUTO</p>
                                    <p className={classes3.secondSecText2}>AS LOW AS</p>
                                    <h2 className={classes3.secondSecText3}>6.00% <span className={classes3.secondSecText4}>APR*</span></h2>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={11} sm={9} md={6}>
                            <div className={classes3.secondSecCard}>
                                <div className={classes3.secondSecCardImg} style={{backgroundImage: 'url(/imgs/home.jpg)'}}></div>
                                <div className={classes3.secondSecText}>
                                    <p className={classes3.secondSecText1}>HOME EQUITY</p>
                                    <p className={classes3.secondSecText2}>AS LOW AS</p>
                                    <h2 className={classes3.secondSecText3}>6.75% <span className={classes3.secondSecText4}>APR*</span></h2>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    
                </div>
                <div className={classes3.secondContent1}>
                    <div className={classes3.sectionTitleHolderSmall}>
                        <a href={ROUTES.LOAN_APPLICATION} className={classes3.sectionTitleLinkSmall}>Apply Now</a>
                    </div>
                </div>
                <div className={classes3.secondContent1}>
                    <span className={classes3.secondContentLastText}>*APR - Annual Percentage Rate. Rates Subject To Change Without Notice.</span>
                </div>
            </SecondContent>


            <ThirdContent>
                <div className={classes4.thirdInner}>
                    <div className={classes3.secondContent1}>
                        <h2 className={classes4.sectionTitle}>Our Services</h2>
                    </div>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <a href={ROUTES.CALCULATOR}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">

                                            <div className={classes4.sectionCard}>
                                                <div className={classes4.sectionCardIcon}>
                                                    <i className="fa fa-calculator"></i>
                                                </div>
                                                <h3 className={classes4.setion4H3}>Finatial Calculators</h3>
                                            </div>

                                        </div>

                                        <div className="flip-card-back">
                                            <div className={classes4.sectionBackCard}>
                                                <h3 className={classes4.setionBack4H3}>Finatial Calculators</h3>
                                                <p className={classes4.setionBack4P}>Use our tools to help make educated finatial decisions</p>
                                                <a className={classes4.sectionCardLink}>Apply Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <a href={ROUTES.ATM_LOCATOR}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">

                                            <div className={classes4.sectionCard}>
                                                <div className={classes4.sectionCardIcon}>
                                                    <i className="fa fa-usd card-icon"></i>
                                                </div>
                                                <h3 className={classes4.setion4H3}>ATM Locator</h3>
                                            </div>

                                        </div>

                                        <div className="flip-card-back">
                                            <div className={classes4.sectionBackCard}>
                                                <h3 className={classes4.setionBack4H3}>ATM Locator</h3>
                                                <p className={classes4.setionBack4P}>Find an ATM wherever you go</p>
                                                <a className={classes4.sectionCardLink}>Find An ATM</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <a href={ROUTES.CHECKING_ACCOUNTS}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">

                                            <div className={classes4.sectionCard}>
                                                <div className={classes4.sectionCardIcon}>
                                                    <MdMenuBook />
                                                </div>
                                                <h3 className={classes4.setion4H3}>Reorder Checks</h3>
                                            </div>

                                        </div>

                                        <div className="flip-card-back">
                                            <div className={classes4.sectionBackCard}>
                                                <h3 className={classes4.setionBack4H3}>Reorder Checks</h3>
                                                <p className={classes4.setionBack4P}>Reordering online is easier than ever</p>
                                                <a href={ROUTES.CHECKING_ACCOUNTS} className={classes4.sectionCardLink}>Register Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <a onClick={handleNadaLink}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">

                                            <div className={classes4.sectionCard}>
                                                <div className={classes4.sectionCardIcon}>
                                                    <i className="fa fa-car"></i>
                                                </div>
                                                <h3 className={classes4.setion4H3}>J.D. Power (formerly NADA)</h3>
                                            </div>

                                        </div>

                                        <div className="flip-card-back">
                                            <div className={classes4.sectionBackCard}>
                                                <h3 className={classes4.setionBack4H3}>J.D. Power (formerly NADA)</h3>
                                                <p className={classes4.setionBack4P}>Find the car you need at an affordable price</p>
                                                <a onClick={handleNadaLink} className={classes4.sectionCardLink}>Start Searching</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Grid>
                    </Grid>
                </div>
            </ThirdContent>


            <FouthContent id='fouth-content'>
                <a href=""></a>
                <div className={classes4.thirdInner}>
                    <div className={classes3.secondContent1}>
                        <h2 className={classes5.sectionTitle}>Our Partners</h2>

                        <div>
                            <Grid container>
                                <Grid item xs={12} md={6} style={{marginBottom: '1rem'}}>
                                    <a target='_blank' href="#">
                                        <img src="/imgs/graduation.jpg" alt="" className={classes5.img}/>
                                    </a>
                                </Grid>

                                <Grid item xs={12} md={6} style={{marginBottom: '1rem'}}>
                                    <a onClick={handleTruState} href="#" target='_blank'>
                                        <img src="/imgs/camp.jpg" alt="" className={classes5.img} />
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </FouthContent>


            <FifthContent>
                <div className={classes5.firstFifthCon}>
                    <div className={classes5.firstFifthConInner}>
                        <Grid container className={classes5.container}>
                            <Grid item xs={12} md={6} className={classes5.imgHalf} data-aos="fade-left" data-aos-delay="300" data-aos-duration="500">
                                <div className={classes5.iconSection}>
                                    <div className={classes5.iconSectionInner}>
                                        <h2 className={classes5.iconSectionInnerH2}><div className={classes5.iconSectionInnerSpan}><span>Join Us </span> <i className="fa fa-users"><div className={classes5.enterSearch}>Enter Search</div></i></div>
                                        </h2>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={6} className={classes5.textHalf}>
                                <div className={classes5.textHolder}>
                                    <p className={classes5.text}>Elite Community Credit Union is <strong>committed</strong> to meet our members' financial needs and assist them in attaining their financial goals. We strive to provide the best services possible while maintaining long-term financial stability.</p>
                                    <a href={ROUTES.BECOME_A_MEMBER}><button className={classes5.button}>Become a member</button></a>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes5.firstFifthConInner}>
                        <Grid container>
                            <Grid item xs={12} md={6} className={classes5.textHalf}>
                                <div className={classes5.textHolder}>
                                    <p className={classes5.text}>Elite Community Credit Union is <strong>committed</strong> to meet our members' financial needs and assist them in attaining their financial goals. We strive to provide the best services possible while maintaining long-term financial stability.</p>
                                    <a href={ROUTES.BECOME_A_MEMBER}><button className={classes5.button}>Become a member</button></a>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} className={classes5.imgHalf2} data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">
                                <div className={classes5.iconSection}>
                                    <div className={classes5.iconSectionInner}>
                                        <h2 className={classes5.iconSectionInnerH2}><div className={classes5.iconSectionInnerSpan}><span>Save More </span> <i className="fa fa-calculator"><div className={classes5.enterSearch}>Enter Search</div></i></div>
                                        </h2>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </FifthContent>


            <SithContent>
                <div className={classes3.secondContent1}>
                    <h3 className={classes5.diffH3}>STATE OF ILLINOIS COMMUNITY REINVESTMENT NOTICE</h3>
                    <p className={classes5.diffP}>The Department of Financial and Professional Regulation (Department) evaluates our performance in meeting the financial services needs of this community, including the needs of low-income to moderate-income households. The Department takes this evaluation into account when deciding on certain applications submitted by us for approval by the Department. Your involvement is encouraged. You may obtain a copy of our evaluation once the Department completes our first evaluation. You may also submit signed, written comments about our performance in meeting community financial services needs to the Department. We will update this notice when our first evaluation has been issued.</p>
                </div>
            </SithContent>

            <Footer />
        </main>
  )
};

export default HomeContainer;
