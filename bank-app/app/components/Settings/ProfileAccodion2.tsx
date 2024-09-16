import { useState } from "react";
import { Grid } from "@mui/material";


interface Props {
    handleAccodionClick: (id: string, id2: string)=> void;
};
const ProfileAccodion2: React.FC<Props>=({handleAccodionClick})=>{

    const [editEmploymentStatusTime, setEditEmploymentStatusTime] = useState(true);
    
    return (

        <div id="settings-accordion">
            <div className="setting-card">

                <div onClick={()=>handleAccodionClick("setting-profile-btn2", 'collapseTwo')} className="settings-card-header" id="settings-headingOne">
                    <h5 style={{marginBottom: '0'}}>
                        <button 
                            id="setting-profile-btn2" 
                            className="btn btn-link setting-hover-color-change" 
                            style={{fontFamily: 'inherit'}}>Employee Infomation</button>
                        <div className="bus-down">

                        </div>
                    </h5>
                </div>


                {/*  */}

                    
                <div id="collapseTwo" className="settings-profile-dont-show">
                    <div className="settings-card-body">
                        <Grid container>
                            <Grid item style={{padding: '0 15px'}} xs={12} md={2}>
                                <div className="mx-auto">
                                    <div style={{display: 'block', margin: 'auto'}}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="67" height="65" viewBox="0 0 67 65" fill="none" className="injected-svg" data-src="https://res.cloudinary.com/dswxtf2ay/image/upload/v1590586205/Mint_InternetBanking/illustrations/Group_34_ib1k7s.svg">
                                            <ellipse cx="33.32" cy="32.5" rx="33.32" ry="32.5" fill="#FAF5EB"></ellipse>
                                            <g clip-path="url(#clip0-56)">
                                            <path d="M40.0732 16.4023C40.0087 16.4023 39.9432 16.3941 39.8776 16.377C38.1442 15.9214 35.8152 15.6702 33.3197 15.6702C30.8243 15.6702 28.4953 15.9213 26.7619 16.377C26.3618 16.4823 25.9501 16.251 25.8423 15.8607C25.7342 15.4704 25.9712 15.0688 26.3714 14.9635C28.2286 14.4753 30.6961 14.2064 33.3198 14.2064C35.9435 14.2064 38.411 14.4753 40.2682 14.9635C40.6683 15.0687 40.9054 15.4704 40.7973 15.8607C40.7071 16.1873 40.4041 16.4023 40.0732 16.4023Z" fill="#9B5A50"></path>
                                            <path d="M26.5661 14.9384C26.1517 14.9384 25.8157 15.2661 25.8157 15.6703V19.3297H27.3163V15.6702C27.3163 15.266 26.9804 14.9384 26.5661 14.9384Z" fill="#FFD36C"></path>
                                            <path d="M40.0719 14.9384C39.6575 14.9384 39.3215 15.2661 39.3215 15.6703V19.3297H40.8222V15.6702C40.8223 15.266 40.4863 14.9384 40.0719 14.9384Z" fill="#FFD36C"></path>
                                            <path d="M50.5774 50.7934H16.0617C14.4041 50.7934 13.0603 49.4827 13.0603 47.8659V33.9668H53.579V47.8659C53.5789 49.4827 52.2351 50.7934 50.5774 50.7934Z" fill="#D0A23C"></path>
                                            <path d="M32.5693 32.5029H14.561V47.8658C14.561 48.6742 15.2329 49.3296 16.0617 49.3296H31.8189C32.2333 49.3296 32.5693 49.0018 32.5693 48.5976V32.5029Z" fill="#D0A23C"></path>
                                            <path d="M34.0703 32.5029V48.5976C34.0703 49.0018 34.4063 49.3296 34.8207 49.3296H50.5779C51.4067 49.3296 52.0786 48.6742 52.0786 47.8658V32.5029H34.0703Z" fill="#D0A23C"></path>
                                            <path d="M50.5775 36.1628H16.0617C13.5752 36.1628 11.5596 34.1968 11.5596 31.7715V20.0548C11.5596 19.2464 12.2314 18.5911 13.0602 18.5911H53.5789C54.4077 18.5911 55.0796 19.2464 55.0796 20.0548V31.7715C55.0796 34.1968 53.064 36.1628 50.5775 36.1628Z" fill="#77502F"></path>
                                            <path d="M50.5774 37.6266C51.6714 37.6266 52.6946 37.335 53.5788 36.8343V35.038C52.7818 35.7351 51.7321 36.1628 50.5774 36.1628H16.0617C14.9068 36.1628 13.8572 35.7351 13.0603 35.038V36.8343C13.9445 37.3349 14.9678 37.6265 16.0617 37.6265H50.5775V37.6266H50.5774Z" fill="#E8F1F8"></path>
                                            <path d="M34.8203 30.3074H31.819C31.4046 30.3074 31.0686 30.6351 31.0686 31.0393V36.1624C31.0686 36.5666 31.4046 36.8943 31.819 36.8943H34.8203C35.2347 36.8943 35.5707 36.5666 35.5707 36.1624V31.0393C35.5707 30.6351 35.2347 30.3074 34.8203 30.3074Z" fill="#E2FCEF"></path>
                                            <path d="M35.5706 39.0906H31.0685C30.6541 39.0906 30.3181 38.7629 30.3181 38.3587V34.6993C30.3181 34.2951 30.6541 33.9674 31.0685 33.9674H35.5706C35.985 33.9674 36.321 34.2951 36.321 34.6993V38.3587C36.3209 38.7629 35.985 39.0906 35.5706 39.0906Z" fill="#FFD36C"></path>
                                            <path d="M34.82 39.0904H31.8186V36.1629C31.8186 35.7588 32.1546 35.431 32.569 35.431H34.0697C34.484 35.431 34.82 35.7588 34.82 36.1629V39.0904H34.82Z" fill="#FFD782"></path>
                                            <path d="M33.3193 28.1124C34.1481 28.1124 34.82 27.4571 34.82 26.6487C34.82 25.8403 34.1481 25.1849 33.3193 25.1849C32.4905 25.1849 31.8186 25.8403 31.8186 26.6487C31.8186 27.4571 32.4905 28.1124 33.3193 28.1124Z" fill="#E2FCEF"></path>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0-56">
                                            <rect x="11.5596" y="11.2755" width="43.52" height="42.449" fill="white"></rect>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item style={{padding: '0 15px'}} xs={12} md={10}>
                                <div className="settings-dialog-info">
                                    <form>
                                        <Grid container>
                                            <Grid item style={{padding: '0 15px', marginBottom: '1rem'}} xs={12} sm={6}>
                                                <div className="form-group">
                                                    <label>Employment status</label>
                                                    <select name="employmentStatus" className="smartSec">
                                                        <option value="SELF_EMPLOYED">Self Employed</option>
                                                        <option value="EMPLOYED" disabled>Employed</option>
                                                        <option value="UNEMPLOYED" disabled>UnEmployed</option>
                                                        <option value="STUDENT" disabled>Student</option>
                                                    </select>
                                                </div>
                                            </Grid>
                                            <Grid item style={{padding: '0 15px', marginBottom: '1rem'}} xs={12} sm={6}>
                                                <div className="form-group">
                                                    <label>Date of employment</label>
                                                    <div className="react-datepicker-wrapper">
                                                        <div className="react-datepicker__input-container">
                                                            <input type="text" className="w-100 form-control transfew " readOnly={editEmploymentStatusTime} style={ !editEmploymentStatusTime ? { borderBottom: '1px solid #eaecf0'} : { borderBottom: '1px solid transparent' }} value="NIL"/>
                                                        </div>
                                                    </div>
                                                    <input type="hidden" name="dateOfEmployment" value="" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={{marginBottom: '1rem'}}>
                                            <Grid item style={{padding: '0 15px', marginBottom: '1rem'}} xs={12}>
                                                <div className="form-group">
                                                    <label>Employer name</label>
                                                    <input name="employerName" className="form-control transfew " readOnly={editEmploymentStatusTime} style={ !editEmploymentStatusTime ? { borderBottom: '1px solid #eaecf0'} : { borderBottom: '1px solid transparent' }} value="NIL" />
                                                </div>
                                            </Grid>
                                            <Grid item style={{padding: '0 15px', marginBottom: '1rem'}} xs={12}>
                                                <div className="form-group">
                                                    <label>Employer address</label>
                                                    <input name="employerAddress" className="form-control transfew " readOnly={editEmploymentStatusTime} style={ !editEmploymentStatusTime ? { borderBottom: '1px solid #eaecf0'} : { borderBottom: '1px solid transparent' }} maxLength={60} value="NIL" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={{marginBottom: '1rem'}}>
                                            <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                                <div className="form-group">
                                                    <label>Contact Phone</label>
                                                    <input name="contactPhoneNumber" className="form-control transfew " field-type="phoneNumber" maxLength={11} readOnly={editEmploymentStatusTime} style={ !editEmploymentStatusTime ? { borderBottom: '1px solid #eaecf0'} : { borderBottom: '1px solid transparent' }} value="NIL" />
                                                </div>
                                            </Grid>
                                            <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                                <div className="form-group">
                                                    <label>Contact Email</label>
                                                    <input name="contactEmail" type="email" className="form-control transfew " readOnly={editEmploymentStatusTime} style={ !editEmploymentStatusTime ? { borderBottom: '1px solid #eaecf0'} : { borderBottom: '1px solid transparent' }} value="NIL"/>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={{marginBottom: '1rem'}}>
                                            <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                                <div className="form-group">
                                                    <label>Currently Salary</label>
                                                    <input name="currentSalary" className="form-control transfew " readOnly={editEmploymentStatusTime} style={ !editEmploymentStatusTime ? { borderBottom: '1px solid #eaecf0'} : { borderBottom: '1px solid transparent' }} value="NIL" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default ProfileAccodion2;