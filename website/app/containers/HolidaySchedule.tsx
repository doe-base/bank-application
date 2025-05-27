'use client';
import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import {useStyles, Hero, MainContent, } from '../styles/holiday_schedule';


const HolidayScheduleContainer: React.FC = () => {
    const classes = useStyles();

    useEffect(() => {
        const sectionEl = document.getElementById("holiday-schedule-hero");
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
            <Hero id='holiday-schedule-hero'>
                <div className={classes.heroInner}>
                    <h1 className={classes.heroInnerH1}>Holiday Schedule</h1>
                </div>
            </Hero>

            <MainContent>
                <div className={classes.mainContentInner}>
                        <div className={classes.mainContentInnerContainer}>
                            <div style={{clear: 'both', float: 'none', paddingRight: '0', position: 'relative', width: '100%'}}>
                                <div className={classes.pageTitle}>
                                    <h2 className={classes.pageTitleH2}>Holiday Closures 2024</h2>
                                </div>

                                
                                <table id="holiday-data" className="ratetable twoCol">
                                    <tbody>
                                        <tr>
                                            <td>New Year's Day</td>
                                            <td>Monday, January 1 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Martin Luther King, Jr. Day</td>
                                            <td>Monday, January 15 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Presidents' Day</td>
                                            <td>Monday, February 19 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Good Friday</td>
                                            <td>Friday, March 29 (Close at Noon)</td>
                                        </tr>
                                        <tr>
                                            <td>Memorial Day</td>
                                            <td>Monday, May 27 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Juneteenth</td>
                                            <td>Wednesday, June 19 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Independence Day</td>
                                            <td>Thursday, July 4 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Labor Day</td>
                                            <td>Monday, September 2 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Columbus Day</td>
                                            <td>Monday, October 14 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Veterans Day</td>
                                            <td>Monday, November 11 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Thanksgiving</td>
                                            <td>Thursday, November 28 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Day after Thanksgiving</td>
                                            <td>Friday, November 29 (Kankakee Branch Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>Christmas Eve</td>
                                            <td>Tuesday, December 24 (Close at noon)</td>
                                        </tr>
                                        <tr>
                                            <td>Christmas</td>
                                            <td>Wednesday, December 25 (Closed)</td>
                                        </tr>
                                        <tr>
                                            <td>New Year's Eve Day</td>
                                            <td>Tuesday, December 31 (Close at noon)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>


            </MainContent>

            <Footer />
        </main>
  )
};

export default HolidayScheduleContainer;
