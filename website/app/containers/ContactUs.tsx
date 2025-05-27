'use client';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';
import { useStyles, Hero, } from '../styles/contact_us';
import Footer from '../components/Footer/Footer';


const ContactUsContainer: React.FC = () => {
    const classes = useStyles();

    const [loading, setLoading] = useState<boolean>(false);
    const [senderName, setSenderName] = useState<string>('');
    const [senderEmail, setSenderEmail] = useState<string>('');
    const [senderPhone, setSenderPhone] = useState<string>('');
    const [senderSubject, setSenderSubject] = useState<string>('');
    const [senderMessage, setSenderMessage] = useState<string>('');

    useEffect(() => {
        const sectionEl = document.getElementById("contact-us-hero")
        const handleScroll = () => {
            const position = 217.168 + window.scrollY * 0.65
            if(sectionEl){
                if(position >= 500){
                    sectionEl.style.backgroundPosition = `0px -500px`
                }else{
                    sectionEl.style.backgroundPosition = `0px -${position}px`
                };
            };
            
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


    function onFormSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
  
        setLoading(true)
        fetch('https://formsubmit.co/ajax/info.idoko@gmail.com', {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            title: 'this form is from elit Credit CU',
            name: senderName,
            email: senderEmail,
            phone: senderPhone,
            subject: senderSubject,
            message: senderMessage,
        })
    })
        .then(response => response.json())
        .then(data => {
          setLoading(false)
          setSenderName('')
          setSenderEmail('')
          setSenderPhone('')
          setSenderSubject('')
          setSenderMessage('')
        })
        .catch(error => {
          setLoading(false)
        });
    };
  



  return (
        <main id='content-new-site'>
            <Hero id='contact-us-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Contact Us</h1>
                </div>
            </Hero>

            <section className={classes.mainContent}>
                <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>

                    <section style={{height: '400px'}}>
                        <div className={classes.mapHolder}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.290917499997!2d-122.0795157847582!3d37.42277788264551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f82444612930f%3A0x96b0175303c91811!2sGoogle%20Headquarters!5e0!3m2!1sen!2sng!4v1694373113192!5m2!1sen!2sng" frameBorder="0" className={classes.iframe} allowFullScreen id="fitvid0"></iframe>
                        </div>
                    </section>
                
                </div>

                <div className={classes.mainContentInner}>
                    <div className={classes.mainContentInnerContainer}>
                        <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                            <Grid container style={{justifyContent: 'space-between'}}>
                                <Grid item xs={12} md={7} style={{marginBottom: '3.4rem'}}>
                                    
                                    <div className={classes.pageTitle}>
                                        <h2 className={classes.pageTitleH2}>Send us an Email</h2>
                                    </div>
                                    <form onSubmit={(e)=> onFormSubmit(e)}>

                                        <Grid container style={{justifyContent: 'space-between'}}>
                                            <Grid item xs={12} sm={4}>
                                                <div className={classes.formInputHolder}>
                                                    <label htmlFor="" className={classes.formLabel}>Name *</label>
                                                    <input type="text" className={classes.formInput} required value={senderName} onChange={(e)=> setSenderName(e.currentTarget.value)}/>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <div className={classes.formInputHolder}>
                                                    <label htmlFor="" className={classes.formLabel}>Email *</label>
                                                    <input type="email" className={classes.formInput} required value={senderEmail} onChange={(e)=> setSenderEmail(e.currentTarget.value)}/>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <div className={classes.formInputHolder} style={{marginRight: '0'}}>
                                                    <label htmlFor="" className={classes.formLabel}>Phone</label>
                                                    <input type="text" className={classes.formInput} value={senderPhone} onChange={(e)=> setSenderPhone(e.currentTarget.value)}/>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={{justifyContent: 'space-between'}}>
                                            <Grid item xs={12} sm={7.535}>
                                                <div className={classes.formInputHolder} style={{width: '100%'}}>
                                                    <label htmlFor="" className={classes.formLabel}>Subject *</label>
                                                    <input type="text" className={classes.formInput} required value={senderSubject} onChange={(e)=> setSenderSubject(e.currentTarget.value)}/>
                                                </div>
                                            </Grid>
                                        </Grid>

                                        <Grid container style={{justifyContent: 'space-between'}}>
                                            <Grid item xs={12}>
                                                <div className={classes.formInputHolder} style={{width: '100%'}}>
                                                    <label htmlFor="" className={classes.formLabel}>Message *</label>
                                                    <textarea rows={6} cols={30} className={classes.formInputTextArea} spellCheck={false} required value={senderMessage} onChange={(e)=> setSenderMessage(e.currentTarget.value)}/>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        {
                                            loading
                                            ?
                                            <>
                                                <button className={classes.linkBtnDisabled} type='submit'>Send Message</button><br />
                                                <RotatingLines
                                                        visible={true}
                                                        width="16"
                                                        strokeWidth="5"
                                                        animationDuration="0.75"
                                                        ariaLabel="rotating-lines-loading"
                                                /> 
                                            </>
                                            :
                                            <button className={classes.linkBtn} type='submit'>Send Message</button>
                                        }
                                    </form>


                                    
                                </Grid>



                                <Grid item xs={12} md={4}>
                                    <div>
                                        <address style={{marginBottom: '10px'}}>
                                            <strong className={classes.strong}>MAIN OFFICE:</strong>
                                            <p className={classes.paragraph}>NIL</p>
                                            <p className={classes.paragraph}>NIL</p>
                                        </address>
                                        <p className={classes.paragraph} style={{marginBottom: '30px'}}>Routing Transit #: NIL</p>
                                    
                                        <address style={{marginBottom: '30px'}}>
                                            <div>
                                                <abbr title="Phone Number" style={{display:'inline'}}><strong className={classes.strong}>Phone: </strong></abbr>
                                                <p className={classes.paragraph} style={{display:'inline'}}> NIL</p>
                                            </div>

                                            <div>
                                                <abbr title="Fax" style={{display:'inline'}}><strong className={classes.strong}>Fax: </strong></abbr>
                                                <p className={classes.paragraph} style={{display:'inline'}}> NIL</p>
                                            </div>

                                            <div>
                                                <abbr title="Email Address" style={{display:'inline'}}><strong className={classes.strong}>Email: </strong></abbr>
                                                <a href="mailto:mycu@eliteccu.com" className={classes.paragrapha} style={{display:'inline'}}> NIL</a>
                                            </div>

                                            <div>
                                                <abbr title="Hours" style={{display:'inline'}}><strong className={classes.strong}>Hours: </strong></abbr>
                                            </div>
                                            <p className={classes.paragraph} style={{display:'inline'}}>Drive-thru:</p>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '2rem'}}>Monday - Friday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>8:00 a.m. - 5:00 p.m.</p>
                                            </div>
                                            <div style={{marginBottom: '30px'}}>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '5.3rem'}}>Saturday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>8:00 a.m. - 12:00 p.m.</p>
                                            </div>



                                            <p className={classes.paragraph} style={{display:'inline'}}>Lobby:</p>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '2rem'}}>Monday - Friday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>9:00 a.m. - 5:00 p.m.</p>
                                            </div>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '5.3rem'}}>Saturday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>9:00 a.m. - 12:00 p.m.</p>
                                            </div>

                                        </address>


                                        <address style={{marginBottom: '10px'}}>
                                            <strong className={classes.strong}>BRANCH OFFICE:</strong>
                                            <p className={classes.paragraph}>NIL</p>
                                        </address>
                                        <p className={classes.paragraph} style={{marginBottom: '30px'}}>Routing Transit #: NIL</p>


                                        <address style={{marginBottom: '60px'}}>
                                            <div>
                                                <abbr title="Phone Number" style={{display:'inline'}}><strong className={classes.strong}>Phone: </strong></abbr>
                                                <p className={classes.paragraph} style={{display:'inline'}}> NIL</p>
                                            </div>

                                            <div>
                                                <abbr title="Fax" style={{display:'inline'}}><strong className={classes.strong}>Fax: </strong></abbr>
                                                <p className={classes.paragraph} style={{display:'inline'}}> NIL</p>
                                            </div>

                                            <div>
                                                <abbr title="Hours" style={{display:'inline'}}><strong className={classes.strong}>Hours: </strong></abbr>
                                            </div>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '4rem'}}>Monday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>7:45 a.m. - 4:00 p.m.</p>
                                            </div>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '3.9rem'}}>Tuesday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>7:45 a.m. - 4:00 p.m.</p>
                                            </div>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '2.3rem'}}>Wednesday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>CLOSED</p>
                                            </div>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '3.6rem'}}>Thursday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>7:45 a.m. - 4:00 p.m.</p>
                                            </div>
                                            <div>
                                                <p className={classes.paragraph} style={{display:'inline', marginRight: '5rem'}}>Friday</p> 
                                                <p className={classes.paragraph} style={{display:'inline'}}>7:45 a.m. - 4:00 p.m.</p>
                                            </div>
                                        </address>


                                        <address style={{marginBottom: '10px'}}>
                                            <strong className={classes.strong} style={{color: '#b55e0c',}}>Important Numbers:</strong>
                                            <strong className={classes.strong} style={{display: 'block'}}>Routing #: NIL</strong>
                                            <strong className={classes.strong} style={{display: 'block'}}>NLMS #: NIL</strong>
                                        </address>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>


            </section>

            <Footer />
        </main>
  )
};

export default ContactUsContainer;
