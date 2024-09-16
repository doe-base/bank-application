import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import useStyles from './style';





interface Props{
    needed: boolean;
    setNeeded: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
};
const Popup: React.FC<Props> = ({needed, setNeeded, name, setName}) => {
  const classes = useStyles();
  const [d, setd] = useState(new Date());

  const closePopup =()=>{
    setNeeded(false)
    setName('')
  };


  return (
    <div data-aos="zoom-in" data-aos-delay="0" data-aos-duration="100" className={`${needed ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <aside className='sidebar'>
        <div className={classes.asideInner}>

          <button className='close-btn' onClick={()=> closePopup()}>
            <RiCloseFill  className={classes.navIcon} />
          </button>
          
          <section style={{padding: '0 20px'}}>
            <a href="#">
              <div className={classes.logoHolder}>
                <img src="/imgs/altlogo.png" alt="Elit Credit Union Logo" className={classes.logo}/>
              </div>
            </a>
            <br />

              {
                name === "checking_accounts_less"
                ?
                <div>
                    <ul className={classes.paragraph}><li>By continuing to this link, you will be leaving the Elite Community Credit Union. </li><li>Links to other websites found on the Elite Community Credit Union site are intended to provide assistance in locating information. Elite Community Credit Union does not endorse, guarantee, or attest to the accuracy of any information provided by these other sites. </li><li>The credit union is not responsible for the content of these other sites and these sites are in no way operated by Elite Community Credit Union. </li><li>The privacy and security policies of these linked sites may vary from those of the credit union; therefore, it is advised that you review the privacy information of each site visited.</li></ul>

                    <div className={classes.footer}>
                      <p style={{marginBottom: '10px'}}>
                        <a style={{cursor: 'pointer', color: '#000', lineHeight: '1', fontSize: '0.897rem'}} role="button" onClick={closePopup}>No Thanks</a> 
                        <a className={classes.linkButton}>Continue to Bank-a-count.com</a>
                      </p>
                    </div>

                </div>
                :

                name === "main_street_check"
                ?
                <div>
                    <ul className={classes.paragraph}><li>By continuing to this link, you will be leaving the Elite Community Credit Union. </li><li>Links to other websites found on the Elite Community Credit Union site are intended to provide assistance in locating information. Elite Community Credit Union does not endorse, guarantee, or attest to the accuracy of any information provided by these other sites. </li><li>The credit union is not responsible for the content of these other sites and these sites are in no way operated by Elite Community Credit Union. </li><li>The privacy and security policies of these linked sites may vary from those of the credit union; therefore, it is advised that you review the privacy information of each site visited.</li></ul>

                    <div className={classes.footer}>
                      <p style={{marginBottom: '30px'}}>
                        <a style={{cursor: 'pointer'}} role="button" onClick={closePopup}>No Thanks</a> 
                        <a className={classes.linkButton}>Continue to Orders.Mainstreetinc.com</a>
                      </p>
                    </div>

                </div>
                :

                name === "credit_card"
                ?
                <div>
                    <ul className={classes.paragraph}><li>By continuing to this link, you will be leaving the Elite Community Credit Union. </li><li>Links to other websites found on the Elite Community Credit Union site are intended to provide assistance in locating information. Elite Community Credit Union does not endorse, guarantee, or attest to the accuracy of any information provided by these other sites. </li><li>The credit union is not responsible for the content of these other sites and these sites are in no way operated by Elite Community Credit Union. </li><li>The privacy and security policies of these linked sites may vary from those of the credit union; therefore, it is advised that you review the privacy information of each site visited.</li></ul>

                    <div className={classes.footer}>
                      <p style={{marginBottom: '30px'}}>
                        <a style={{cursor: 'pointer'}} role="button" onClick={closePopup}>No Thanks</a> 
                        <a className={classes.linkButton}>Continue to eZCardInfo.com</a>
                      </p>
                    </div>

                </div>
                :

                name === "home-star-atm"
                ?
                <div>
                    <ul className={classes.paragraph}><li>By continuing to this link, you will be leaving the Elite Community Credit Union. </li><li>Links to other websites found on the Elite Community Credit Union site are intended to provide assistance in locating information. Elite Community Credit Union does not endorse, guarantee, or attest to the accuracy of any information provided by these other sites. </li><li>The credit union is not responsible for the content of these other sites and these sites are in no way operated by Elite Community Credit Union. </li><li>The privacy and security policies of these linked sites may vary from those of the credit union; therefore, it is advised that you review the privacy information of each site visited.</li></ul>

                    <div className={classes.footer}>
                      <p style={{marginBottom: '30px'}}>
                        <a style={{cursor: 'pointer'}} role="button" onClick={closePopup}>No Thanks</a> 
                        <a className={classes.linkButton}>Continue to Star.com</a>
                      </p>
                    </div>

                </div>
                :

                name === "home-nada-link"
                ?
                <div>
                    <ul className={classes.paragraph}><li>By continuing to this link, you will be leaving the Elite Community Credit Union. </li><li>Links to other websites found on the Elite Community Credit Union site are intended to provide assistance in locating information. Elite Community Credit Union does not endorse, guarantee, or attest to the accuracy of any information provided by these other sites. </li><li>The credit union is not responsible for the content of these other sites and these sites are in no way operated by Elite Community Credit Union. </li><li>The privacy and security policies of these linked sites may vary from those of the credit union; therefore, it is advised that you review the privacy information of each site visited.</li></ul>

                    <div className={classes.footer}>
                      <p style={{marginBottom: '30px'}}>
                        <a style={{cursor: 'pointer'}} role="button" onClick={closePopup}>No Thanks</a> 
                        <a className={classes.linkButton}>Continue to Nadaguides.com</a>
                      </p>
                    </div>

                </div>
                :

                name === "home-tru-state"
                ?
                <div>
                    <ul className={classes.paragraph}><li>By continuing to this link, you will be leaving the Elite Community Credit Union. </li><li>Links to other websites found on the Elite Community Credit Union site are intended to provide assistance in locating information. Elite Community Credit Union does not endorse, guarantee, or attest to the accuracy of any information provided by these other sites. </li><li>The credit union is not responsible for the content of these other sites and these sites are in no way operated by Elite Community Credit Union. </li><li>The privacy and security policies of these linked sites may vary from those of the credit union; therefore, it is advised that you review the privacy information of each site visited.</li></ul>

                    <div className={classes.footer}>
                      <p style={{marginBottom: '30px'}}>
                        <a style={{cursor: 'pointer'}} role="button" onClick={closePopup}>No Thanks</a> 
                        <a className={classes.linkButton}>Continue to Trustage.com</a>
                      </p>
                    </div>

                </div>
                :

                name === "colledral-protection"
                ?
                <div>
                    <ul className={classes.paragraph}><li>By continuing to this link, you will be leaving the Elite Community Credit Union. </li><li>Links to other websites found on the Elite Community Credit Union site are intended to provide assistance in locating information. Elite Community Credit Union does not endorse, guarantee, or attest to the accuracy of any information provided by these other sites. </li><li>The credit union is not responsible for the content of these other sites and these sites are in no way operated by Elite Community Credit Union. </li><li>The privacy and security policies of these linked sites may vary from those of the credit union; therefore, it is advised that you review the privacy information of each site visited.</li></ul>

                    <div className={classes.footer}>
                      <p style={{marginBottom: '30px'}}>
                        <a style={{cursor: 'pointer'}} role="button" onClick={closePopup}>No Thanks</a> 
                        <a className={classes.linkButton}>Continue to AlliedSolution.com</a>
                      </p>
                    </div>

                </div>
                :
                
                name === "footer-terms-of-service"
                ?
                <div>
                   <div>  
                    <p id="modal-body-content-p">

                    <h1>Elite Community Credit UnionWebsite Terms of Use</h1>
                    The Elite Community Credit Union Web Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of the Elite Community Credit Union Web Site constitutes your agreement to all such terms, conditions, and notices.

                    <h2>Modification of these terms of use:</h2>
                    Elite Community Credit Union reserves the right to change the terms, conditions, and notices under which the Elite Community Credit Union Site/Services are offered. You are responsible for regularly reviewing these terms and conditions and additional terms. Your continued use of the Elite Community Credit Union Site/Services constitutes your agreement to all such terms, conditions, and notices.

                    <h2>Personal and non-commercial use limitation:</h2>
                    Unless otherwise specified, the Elite Community Credit Union Site is for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from the Elite Community Credit Union site.

                    <h2>Links to third party sites: </h2>
                    The Elite Community Credit Union Site/Services may contain links to third party Web sites ("Linked Sites"). The Linked Sites are not under the control of Elite Community Credit Union and Elite Community Credit Union is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Elite Community Credit Union is not responsible for webcasting or any other form of transmission received from any Linked Site nor is Elite Community Credit Union responsible if the Linked Site is not working appropriately. Elite Community Credit Union is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Elite Community Credit Union of the site or any association with its operators. You are responsible for viewing and abiding by the privacy statements and terms of use posted at the Linked Sites. Any dealings with third parties (including advertisers) included within the Elite Community Credit Union Site/Services or participation in promotions, including the delivery of and the payment for goods and services, and any other terms, conditions, warranties or representations associated with such dealings or promotions, are solely between you and the advertiser or other third party. Elite Community Credit Union shall not be responsible or liable for any part of any such dealings or promotions.

                    <h2>No unlawful or prohibited use:</h2>
                    As a condition of your use of the Elite Community Credit Union Site/Services, you will not use the Elite Community Credit Union Site/Services for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the Elite Community Credit Union Site/Services in any manner which could damage, disable, overburden, or impair any Elite Community Credit Union Site/Service(s) (or the network(s) connected to any Elite Community Credit Union Site/Service(s)) or interfere with any other party's use and enjoyment of any Elite Community Credit Union Site/Service(s). You may not attempt to gain unauthorized access to any Elite Community Credit Union Site/Service, other accounts, computer systems or networks connected to any Elite Community Credit Union Site/Service, through hacking, password mining or any other means. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available through the Elite Community Credit Union Sites/Services.

                    <h2>Service Contact: mycu@eliteccu.com </h2>
                    <h2>Termination/Access Restriction:</h2>
                    Elite Community Credit Union reserves the right, at its sole discretion, to terminate your access to the Elite Community Credit Union Site/Services and the related services or any portion thereof at any time, without notice.<br /><br />
                    Elite Community Credit Union may also terminate or suspend your access to Elite Community Credit Union Site/Service(s) for inactivity, which is defined as failing to log into a particular service for an extended period of time, as determined by Elite Community Credit Union. Upon termination of the Elite Community Credit Union Site/Service, your right to use the Elite Community Credit Union Site/Service immediately ceases. Elite Community Credit Union shall have no obligation to maintain any content or to forward any unread or unsent messages to you or any third party.

                    <h2>Copyright and trademark notices:</h2>
                    All contents of the Elite Community Credit Union Web Site is: © <span id="year">{d.getFullYear()}</span> Elite Community Credit Union. All Rights Reserved and/or its suppliers, 515 S. Main Street
                    Bourbonnais, IL 60914.

            
                    </p>  
                  </div>

                </div>
                :
                null
              }

          </section>

        </div>
      </aside>
    </div>
  )
};

export default Popup;
