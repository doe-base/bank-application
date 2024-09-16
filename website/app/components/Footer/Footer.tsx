import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { LiaAngleUpSolid } from "react-icons/lia";
import { SITE_MAP } from '../../constants/routes';
import {useStyles, FirstSection, SecondSection, LastSection, Foot,} from "./style";


const Footer: React.FC =()=>{
    const classes = useStyles();

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    
    useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY > 250){
            document.getElementById('gotoTop')?.classList.add('show');
          }else{
            document.getElementById('gotoTop')?.classList.remove('show');
          };
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <Foot>
            <FirstSection>
                <div className={classes.firstSectionInner}>
                    <h3 className={classes.tagLineh3} data-aos="flip-down" data-aos-delay="300" data-aos-duration="500">
                        <img src="/imgs/tagline.png" alt="" className={classes.tagLineImg} />
                    </h3>
                </div>
            </FirstSection>

            <SecondSection>
                <div className={classes.secondSectionInner}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <img src="/imgs/logo.png" alt="logo" className={classes.footerImg}/>

                            <div>
                                <address className={classes.addHolder}>
                                    <strong className={classes.stongText}>Main Office:</strong><br />
                                    <span>NIL</span><br />
                                    <span>NIL</span><br /><br />

                                    <strong className={classes.stongText}>Main Office Phone: </strong><span>NIL</span> <br />
                                    <strong className={classes.stongText}>Fax: </strong> <span>NIL</span><br />
                                    <strong className={classes.stongText}>Email: </strong>
                                    <a href="" className={classes.stongText}>NIL</a><br />

                                    <br />
                                    <strong className={classes.stongText}>Lost/Stolen Debit Card: </strong>
                                    <span>NIL</span><br />
                                    <strong className={classes.stongText}>Lost/Stolen Credit Card: </strong>
                                    <span>NIL</span><br />
                                </address>
                                <p className={classes.routingText}>Routing Transit #: NIL</p>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container>
                                <Grid item xs={12} md={4} style={{marginRight: '1rem', marginBottom: '1rem'}}>
                                    <img src="/imgs/ncua.png" alt="" style={{ maxWidth: '100%', verticalAlign: 'middle', }}/>
                                </Grid>
                                <Grid item xs={12} md={5} style={{marginRight: '1rem', marginBottom: '1rem'}}>
                                    <img src="/imgs/ehl.png" alt="" style={{ maxWidth: '100%', verticalAlign: 'middle', }}/>
                                    <p className={classes.routingText} style={{marginBottom: '0'}}>We do business in accordance with the Federal Fair Housing Law and Equal Opportunity Act.</p>
                                </Grid>
                                <Grid item xs={12} md={2} style={{marginRight: '1rem', marginBottom: '1rem'}}>
                                    <ul>
                                        <li className={classes.li} style={{cursor: 'pointer'}}>
                                            <a className={classes.listLink}>Privacy Policy</a>
                                        </li>
                                        <li className={classes.li} style={{cursor: 'pointer'}}>
                                            <a className={classes.listLink}>Terms of Use</a>
                                        </li>
                                        <li className={classes.li} style={{cursor: 'pointer'}}><a href={SITE_MAP} className={classes.listLink}>Site Map</a></li>
                                    </ul>
                                </Grid>
                            </Grid>
                            <p className={classes.routingText}>Our Credit Union is committed to providing a website that is accessible to the widest possible audience in accordance with ADA guidelines. We are working to increase the accessibility and usability of our website for all people. If you are using a screen reader or other auxiliary aid and are having problems using this website, please contact us at [Phone number] for assistance. Products and services available on this website are available at our office located at [Address].</p>
                        </Grid>
                    </Grid>
                </div>
            </SecondSection>

            <LastSection>
                <div className={classes.firstSectionInner}>
                    <Grid container>
                        <Grid item xs={12} md={8}>Copyright © <span id="w">2024</span> Elite Community Credit Union. All Rights Reserved. </Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>
                </div>
            </LastSection>

            <div onClick={handleBackToTop} id="gotoTop" className="icon-angle-up"> <LiaAngleUpSolid style={{fontWeight: '100'}}/> </div>
        </Foot>
    );
};

export default Footer;