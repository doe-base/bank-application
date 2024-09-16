"use client";
import useStyles from "./styles";
import { useGetData } from '../../context/GetDataContext';
import axios from "axios";

interface Props {};
const Appbar: React.FC<Props>=({ })=> {
  const classes = useStyles();
  const { dashboardData } = useGetData();
  const { firstname, lastname, middlename, accounttype } = dashboardData;
  const fullName = `${firstname} ${middlename} ${lastname}`;

  
  const toggleNav = () =>{
    const element = document.getElementById('content');
    element?.classList.toggle('active');

    const element2 = document.getElementById('sidebar');
    element2?.classList.toggle('active');

    const element3 = document.getElementById('small-nav-overlay');
    element3?.classList.toggle('active');
  };
  const toggleProfil=(event: any, action: string)=> {
    event.stopPropagation();

    const element = document.getElementById('switch-account-menu');
    if(action === "add"){
        element?.classList.add('show');
    }else if(action === "remove"){
        element?.classList.remove('show');
    };
  };

  const handleLogout =()=>{
    const sessionToken = JSON.stringify(localStorage.getItem("session-token"));
    const url = process.env.NEXT_PUBLIC_CLOSE_SESSION || "";
    const homepageRedirect = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "";

    const newFormData = new FormData();
    newFormData.append("token", sessionToken);

    axios
      .post(url, newFormData, { withCredentials: true })
      .then((response) => {
        localStorage.removeItem("session-token")
        window.location.replace(homepageRedirect);
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem("session-token");
        window.location.replace(homepageRedirect);
      });
    }


  return (
    <nav className={classes.nav}>
        <div className={classes.navInner}>

            <button type="button" id="BigsidebarCollapse" className="btn scary" onClick={toggleNav}><span></span><span></span><span></span></button>

            <div role="button" className="d-flex align-items-center switch-account-container" onClick={(event)=>toggleProfil(event, "add")}>
                <img src="/imgs/user.png" alt={fullName}/>
                <span className="switch-account-container__account-info" style={{textTransform: 'uppercase'}}>{fullName} • <span>{accounttype}</span></span>
                <span className="chevron-down"></span>

                <div id="switch-account-menu" className="switch-account-menu">
                    <div className="df switch-account-menu-header">
                        <div className="d-flex align-items-center">
                            <h6 className="mr-2">Accounts</h6>
                        </div>
                        <button onClick={(event)=>toggleProfil(event, "remove")}><img src="/imgs/close.svg" alt="" /></button>
                    </div>
                    <ul style={{marginBottom:'1rem'}} className="switch-account-menu-accounts"></ul>
                    <div className="df switch-account-menu-header">
                        <a onClick={handleLogout}>Logout</a>
                    </div>
                </div>

            </div>
        </div>
    </nav>
  );
};

export default Appbar;