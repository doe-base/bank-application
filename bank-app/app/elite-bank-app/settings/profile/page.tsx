'use client';
import { Grid } from "@mui/material";
import Appbar from "@/app/components/Appbar/Appbar";
import SettingNavigation from "@/app/components/Settings/SettingNavigation";
import ProfileAccodion1 from "@/app/components/Settings/ProfileAccodion1";
import ProfileAccodion2 from "@/app/components/Settings/ProfileAccodion2";
import ProfileAccodion3 from "@/app/components/Settings/ProfileAccodion3";
import Sidebar from "@/app/components/Sidebar/Sidebar";


interface Props {};
const SettingsProfile: React.FC<Props>=({})=>{

    // USE VANILLA JAVASCRIPT TO ACHIVE THIS, BECUSE CHANGING STATE VALUE AFFECTS ACCOUDION
    const handleAccodionClick =(id: string, id2: string)=>{
        
        if(id === 'setting-profile-btn1'){
            document.getElementById('setting-profile-btn1')?.classList.add('setting-btn-switch');
            document.getElementById(id2)?.classList.add('settings-profile-show');

            document.getElementById('setting-profile-btn2')?.classList.remove('setting-btn-switch');
            document.getElementById('collapseTwo')?.classList.remove('settings-profile-show');

            document.getElementById('setting-profile-btn3')?.classList.remove('setting-btn-switch');
            document.getElementById('collapseThree')?.classList.remove('settings-profile-show');
        }else if(id === 'setting-profile-btn2'){
            document.getElementById('setting-profile-btn2')?.classList.add('setting-btn-switch');
            document.getElementById(id2)?.classList.add('settings-profile-show');

            document.getElementById('setting-profile-btn1')?.classList.remove('setting-btn-switch');
            document.getElementById('collapseOne')?.classList.remove('settings-profile-show');
            
            document.getElementById('setting-profile-btn3')?.classList.remove('setting-btn-switch');
            document.getElementById('collapseThree')?.classList.remove('settings-profile-show');
        }else if(id === 'setting-profile-btn3'){
            document.getElementById('setting-profile-btn3')?.classList.add('setting-btn-switch');
            document.getElementById(id2)?.classList.add('settings-profile-show');

            document.getElementById('setting-profile-btn1')?.classList.remove('setting-btn-switch');
            document.getElementById('collapseOne')?.classList.remove('settings-profile-show');

            document.getElementById('setting-profile-btn2')?.classList.remove('setting-btn-switch');
            document.getElementById('collapseTwo')?.classList.remove('settings-profile-show');
        }
    };
 
    
    return (
        <>
            <Sidebar namefromApp="settings" />
            <main id="content">
                <Appbar />

                <section className="container">

                    <ul className="ben-page-nav ben-page-nav-tabs" id="PageNavigator">
                        <li className="ben-page-nav-item">
                            <a className="ben-page-nav-link active">Profile</a>
                        </li>
                    </ul>


                    <div className="ben-groom-panel">
                        <SettingNavigation activeLink="profile" />

                        <Grid container style={{justifyContent: 'center'}}>
                            <Grid item style={{padding: '0 15px'}} xs={12} lg={8.5}>
                                <ProfileAccodion1 handleAccodionClick={handleAccodionClick} />

                                <ProfileAccodion2 handleAccodionClick={handleAccodionClick} />

                                <ProfileAccodion3 handleAccodionClick={handleAccodionClick} />
                            </Grid>
                        </Grid>
                    </div>

                </section>

            </main>
        </>
    )
};

export default SettingsProfile;