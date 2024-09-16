"use client";
import { Grid } from "@mui/material";
import Appbar from "@/app/components/Appbar/Appbar";
import SettingNavigation from "@/app/components/Settings/SettingNavigation";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import ChangePin from "@/app/components/Popups/ChangePinPopup";
import SetTransactionLimitPopup from "@/app/components/Popups/SetTransactionLimitPopup";
import EnterPin from "@/app/components/Popups/EnterPin";
import ResetPin from "@/app/components/Popups/ResetPin";
import SomethingWrongPopup from "@/app/components/Popups/SomethingWrongMessage";

const addSomethingWrong =()=>{
    document.getElementById('somethingwrong')?.classList.add('somethingwrong');
};
const removeSomethingWrong =()=>{
    document.getElementById('somethingwrong')?.classList.remove('somethingwrong');
};
const lunchSomethingWrong =()=>{
    setTimeout(addSomethingWrong, 1000);
    setTimeout(removeSomethingWrong, 4200);
};
const addSomethingWrong2 =()=>{
    document.getElementById('somethingwrong2')?.classList.add('somethingwrong');
};
const removeSomethingWrong2 =()=>{
    document.getElementById('somethingwrong2')?.classList.remove('somethingwrong');
};
const lunchSomethingWrong2 =()=>{
    setTimeout(addSomethingWrong2, 1000);
    setTimeout(removeSomethingWrong2, 4200);
};
const addSomethingWrong3 =()=>{
    document.getElementById('somethingwrong3')?.classList.add('somethingwrong');
};
const removeSomethingWrong3 =()=>{
    document.getElementById('somethingwrong3')?.classList.remove('somethingwrong');
};
const lunchSomethingWrong3 =()=>{
    setTimeout(addSomethingWrong3, 1000);
    setTimeout(removeSomethingWrong3, 4200);
};
const handleLimitTransactionOpen =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-limit-transacation');
    sidebarEl?.classList.add('show');
};
const toggleEmailNotification =()=>{
    document.getElementById('toggleEmailNotification')?.classList.toggle('sliderUnchecked');
    lunchSomethingWrong();
};
const toggleEmailNotification2 =()=>{
    document.getElementById('toggleEmailNotification2')?.classList.toggle('sliderUnchecked');
    lunchSomethingWrong2();
};
const toggleEmailNotification3 =()=>{
    document.getElementById('toggleEmailNotification3')?.classList.toggle('sliderUnchecked');
    lunchSomethingWrong3();
};
const handleChangePinOpen =()=>{
    document.getElementById('sidebar-wrapper-change-pin-setting')?.classList.add('show');
};
const handleResetPinOpen =()=>{
    document.getElementById('sidebar-wrapper-Reset-Pin')?.classList.add('show');
};

interface Props {};
const SettingAccountManagement: React.FC<Props>=({  })=>{
    
    return (
        <>
            <Sidebar namefromApp="settings" />
            <main id="content">
                <Appbar />

                <section className="container">

                    <ul className="ben-page-nav ben-page-nav-tabs" id="PageNavigator">
                        <li className="ben-page-nav-item">
                            <a className="ben-page-nav-link active">Account Setting</a>
                        </li>
                    </ul>


                    <div className="ben-groom-panel">

                    <SettingNavigation activeLink="account-management" />


                        <Grid container style={{justifyContent: 'center'}}>
                            <Grid item style={{padding: '0 15px'}} xs={12} lg={8.5}>
                                <div style={{padding: '0 1rem'}}>


                                    <div className="accountSetting" style={{marginBottom: '2rem'}} onClick={handleLimitTransactionOpen}>
                                        <h6 className="label--heading">Spend Limit</h6>

                                        <h5 className="mb-0 label--heading--h5--accountSetting" onClick={handleLimitTransactionOpen}>
                                            <label className="label--text label--text-after" style={{cursor: 'pointer', transition: 'all 0.3s linear'}}>Transfers</label>
                                            <div className="bus-down"></div>
                                        </h5>

                                    </div>



                                    {/* Notifications */}


                                    <div className="accountSetting" style={{marginTop: '1rem'}}>
                                        <h6 className="label--heading">Notifications</h6>
                                        
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <label className="label--text">Email notifications</label>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="customSwitch float-right" onClick={toggleEmailNotification}>
                                                    <input name="emailEnabled" type="checkbox" checked />
                                                    <span id="toggleEmailNotification" className="slider round"></span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>



                                    <div className="accountSetting">
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <label className="label--text">Push notifications</label>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="customSwitch float-right" onClick={toggleEmailNotification2}>
                                                    <input name="emailEnabled" type="checkbox" checked />
                                                    <span id="toggleEmailNotification2" className="slider round"></span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>


                                    <div className="accountSetting" style={{marginBottom: '2rem'}}>
                                        <Grid container>
                                            <Grid item xs={6}>
                                                <label className="label--text">SMS <span style={{fontWeight: '500'}}>(attracts extra charges)</span></label>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="customSwitch float-right" onClick={toggleEmailNotification3}>
                                                    <input name="emailEnabled" type="checkbox" checked />
                                                    <span id="toggleEmailNotification3" className="slider round"></span>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>


                                    {/* Securyty */}


                                    <div className="accountSetting" style={{marginTop: '1rem'}}>
                                        <h6 className="label--heading">Security</h6>
                                        <h5 className="mb-0 label--heading--h5--accountSetting" onClick={handleChangePinOpen}>
                                            <label className="label--text label--text-after" style={{cursor: 'pointer', transition: 'all 0.3s linear'}}>Change Transaction Pin</label>
                                            <div className="bus-down"></div>
                                        </h5>
                                    </div>


                                    <div className="accountSetting">
                                        <h5 className="mb-0 label--heading--h5--accountSetting" onClick={handleResetPinOpen}>
                                            <label className="label--text label--text-after" style={{cursor: 'pointer', transition: 'all 0.3s linear'}}>Reset Transaction Pin</label>
                                            <div className="bus-down"></div>
                                        </h5>
                                    </div>


                                    <div className="accountSetting" style={{marginBottom: '2rem'}}>
                                        <h5 className="mb-0 label--heading--h5--accountSetting" onClick={lunchSomethingWrong3}>
                                            <label className="label--text label--text-after" style={{cursor: 'pointer', transition: 'all 0.3s linear'}}>Request New Login ID</label>
                                            <div className="bus-down"></div>
                                        </h5>
                                    </div>


                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </main>
            
            <ResetPin />
            <EnterPin />
            <ChangePin />
            <SetTransactionLimitPopup />
            <SomethingWrongPopup />
        </>
    )
};
export default SettingAccountManagement;