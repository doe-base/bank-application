import React, { useEffect, useState } from "react";
import Appbar from "@/app/components/Appbar/Appbar";


interface Props {
}

const Settings: React.FC<Props>=({})=>{
 
    
    return (
        <main id="content">
            <Appbar />

            <section className="container">

                <ul className="ben-page-nav ben-page-nav-tabs" id="PageNavigator">
                    <li className="ben-page-nav-item">
                        <a className="ben-page-nav-link active">SETTINGS</a>
                    </li>
                </ul>


                <div className="ben-groom-panel">
                    <div style={{paddingTop: '1.5rem'}}>


                        <ul className="setting-nav setting-nav-tabs" id="setting-setTab" role="tablist">
                            <li className="setting-nav-item">
                                <a className="setting-nav-link" href="/settings/profile"><span className="setting-user-icon"></span>Profile</a>
                            </li>
                            <li className="setting-nav-item">
                                <a className="setting-nav-link" href="/settings/account-management"><span className="setting-credit-icon"></span>Account Management</a>
                            </li>
                            <li className="setting-nav-item">
                                <a className="setting-nav-link" href="/settings/legal"><span className="setting-smartshield"></span>Legal</a>
                            </li>
                            <li className="setting-nav-item">
                                <a className="setting-nav-link" href="/settings/help"><span className="setting-bigedit"></span>Help &amp; Support</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

        </main>
    )
};

export default Settings;