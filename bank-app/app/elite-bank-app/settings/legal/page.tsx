"use client";
import { Grid } from "@mui/material";
import Appbar from "@/app/components/Appbar/Appbar";
import SettingNavigation from "@/app/components/Settings/SettingNavigation";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { LuExternalLink } from "react-icons/lu";


interface Props {};
const SettingLegal: React.FC<Props>=({  })=>{
 
    
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

                        <SettingNavigation activeLink="legal" />

                        <Grid container style={{justifyContent: 'center'}}>
                            <Grid item style={{padding: '0 15px'}} xs={12} lg={8.5}>
                                <div style={{padding: '0 1rem'}}>

                                    <div style={{marginTop: '1rem'}}>
                                        <a href="/zprivacy.html" className="btn legal-external__btn--link" rel="noopener noreferrer" target="_blank">
                                            <span className="legal-btn-external__btn--link">elite community account privacy policy</span> <span><LuExternalLink /></span>
                                        </a>
                                        <a href="/zterm.html" className="btn legal-external__btn--link" rel="noopener noreferrer" target="_blank">
                                            <span className="legal-btn-external__btn--link">elite community account terms and conditions</span><span><LuExternalLink /></span>
                                        </a>
                                        <a href="/zgterm.html" className="btn legal-external__btn--link" rel="noopener noreferrer" target="_blank">
                                            <span className="legal-btn-external__btn--link">elite community savings goals terms and conditions</span><span><LuExternalLink /></span>
                                        </a>
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

export default SettingLegal;