"use client";
import { Grid } from "@mui/material";
import Appbar from "@/app/components/Appbar/Appbar";
import SettingNavigation from "@/app/components/Settings/SettingNavigation";
import Sidebar from "@/app/components/Sidebar/Sidebar";



const handleAccodionClick =(id: string, id2: string)=>{
    document.getElementById('setting-help-btn1')?.classList.add('setting-btn-switch');
    document.getElementById(id2)?.classList.add('settings-profile-show');
};

interface Props {};
const SettingHelp: React.FC<Props>=({  })=>{
 
    
    return (
        <>
            <Sidebar namefromApp="settings" />
            <main id="content">
                <Appbar />

                <section className="container">

                    <ul className="ben-page-nav ben-page-nav-tabs" id="PageNavigator">
                        <li className="ben-page-nav-item">
                            <a className="ben-page-nav-link active">Help</a>
                        </li>
                    </ul>


                    <div className="ben-groom-panel">

                        <SettingNavigation activeLink="help" />

                        <Grid container style={{justifyContent: 'center'}}>
                            <Grid item style={{padding: '0 15px'}} xs={12} lg={8.5}>
                                <div id="settings-accordion">
                                    <div className="setting-card">

                                        <div onClick={()=>handleAccodionClick("setting-help-btn1", 'collapseHelp')} className="settings-card-header" id="settings-help-headingOne">
                                            <h5 style={{marginBottom: '0'}}>
                                                <button id="setting-help-btn1" className="btn btn-link setting-hover-color-change" style={{fontFamily: 'inherit'}}>Chat with us</button>
                                                <div className="bus-down"></div>
                                            </h5>
                                        </div>
                                            
                                        <div id="collapseHelp" className="settings-profile-dont-show">
                                            <div className="settings-card-body">
                                                <Grid container>
                                                    <Grid item style={{padding: '0 15px'}} xs={12}>
                                                        <p style={{fontSize: '1rem', color: '#111', }}>Send Elite Community Support Team an email support@elitecommunity.com</p>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </Grid>
                        </Grid>


                    </div>
                </section>
            </main>
        </>
    )
};

export default SettingHelp;