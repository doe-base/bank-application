import { ACCOUNT_SETTINGS, HELP, LEGAL, PROFILE } from "../../constants/routes"
interface Props {
    activeLink: string;
}

const SettingNavigation: React.FC<Props>=({ activeLink })=>{

    return (
                    
        <div style={{paddingTop: '1.5rem'}}>
            <ul className="setting-nav setting-nav-tabs" id="setting-setTab" role="tablist">
                <li className="setting-nav-item">
                    <a className={`setting-nav-link ${activeLink === 'profile' ? 'active' : null}`} href={PROFILE}><span className="setting-user-icon"></span>Profile</a>
                </li>
                <li className="setting-nav-item">
                    <a className={`setting-nav-link ${activeLink === 'account-management' ? 'active' : null}`} href={ACCOUNT_SETTINGS}><span className="setting-credit-icon"></span>Account Management</a>
                </li>
                <li className="setting-nav-item">
                    <a className={`setting-nav-link ${activeLink === 'legal' ? 'active' : null}`} href={LEGAL}><span className="setting-smartshield"></span>Legal</a>
                </li>
                <li className="setting-nav-item">
                    <a className={`setting-nav-link ${activeLink === 'help' ? 'active' : null}`} href={HELP}><span className="setting-bigedit"></span>Help &amp; Support</a>
                </li>
            </ul>
        </div>

    )
};

export default SettingNavigation;