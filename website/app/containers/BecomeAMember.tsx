'use client'
import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import {useStyles, Hero, MainContent, } from '../styles/become_a_member';
import {BECOME_A_MEMBER_FORM} from '../constants/routes'
 
const BecomeAMemberContainer: React.FC = () => {
    const classes = useStyles();

    useEffect(() => {
        const sectionEl = document.getElementById("become-a-member-hero");
        const handleScroll = () => {
            const position = 217.168 + window.scrollY * 0.65
            if(sectionEl){
                if(position >= 500){
                    sectionEl.style.backgroundPosition = `0px -500px`
                }else{
                    sectionEl.style.backgroundPosition = `0px -${position}px`
                }
            };
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
        <main>
            <Hero id='become-a-member-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Become A Member</h1>
                </div>
            </Hero>

            <MainContent>
                <div className={classes.mainContentInner}>
                    <div className={classes.mainContentInnerContainer}>
                        <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                            <div className={classes.pageTitle}>
                                <h2 className={classes.pageTitleH2}>Our Mission</h2>
                            </div>
                            <blockquote className={classes.blockquote}>“Elite Community Credit Union is committed to meet our members' financial needs and assist them in attaining their financial goals. We strive to provide the best services possible while maintaining long-term financial stability.”</blockquote>

                            <div className={classes.pageTitle}>
                                <h2 className={classes.pageTitleH2}>Membership Qualifications</h2>
                            </div>

                            <p className={classes.paragraph}>You may qualify to be a member of our Credit Union if you meet any of the following criteria:</p>

                            <ul className={classes.ul}>
                                <li>Anyone who lives or works in Kankakee or Iroquois Counties</li>
                                <li>Employees or Retirees of Kensing Solutions (Illinois), BASF Corporation (Illinois), Cognis Corporation (Illinois), or Henkel Corporation (Illinois)</li>
                                <li>Employees of Sun Chemical (Illinois), Hostmann Steinberg (Illinois), IKO Midwest (Illinois), or Heartland Harvest, Inc.</li>
                                <li>Employees of Elite Community Credit Union</li>
                                <li>Parishioners of St. John Paul II, Kankakee (Formerly St. Martin's Church)</li>
                                <li>Employees of Bradley Elementary School District #61: District Administration Office, Bradley Central, Bradley West and Bradley East</li>
                                <li>Employees of Bourbonnais Elementary School District #53: Central Office, Robert Frost, Alan Shepard, Shabonna, Noel LeVasseur, Liberty Intermediate and Upper Grade Center</li>
                                <li>Employees of Bradley Bourbonnais Community High School District #307</li>
                                <li>Employees of St. George Elementary School District #258</li>
                                <li>Employees of Kankakee County Training Center for the Disabled</li>
                                <li>Employees of Kankakee Area Career Center</li>
                                <li>Employees of Kankakee Area Special Education Cooperative</li>
                                <li>Employees of Olivet Nazarene University</li>
                                <li>Employees of United Developmental Services</li>
                                <li>Employees of Bourbonnais Fire Protection District</li>
                                <li>Any family members of otherwise eligible persons; family members are defined as: spouse, child, sibling, parent, grandparent, grandchild, aunt, uncle, niece or nephew. This also includes stepparents, stepchildren, stepsiblings and adoptions.</li>
                            </ul>

                            <div className={classes.pageTitle}>
                                <h2 className={classes.pageTitleH2}>New Member Application Form</h2>
                            </div>

                            <p className={classes.paragraph}>
                                <a className={classes.linkBtn} href={BECOME_A_MEMBER_FORM}>Become a Member</a>
                            </p>

                            <strong className={classes.strong}>Before your membership can be activated, the credit union must receive:</strong>
                            <ul className={classes.ul}>
                                <li>Proof of Identification</li>
                                <li>Driver's License, State ID, or Passport</li>
                                <li>Signed Application (notarized if mailed to credit union)</li>
                                <li>$25.00 minimum deposit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MainContent>

            <Footer />
        </main>
  )
};

export default BecomeAMemberContainer;
