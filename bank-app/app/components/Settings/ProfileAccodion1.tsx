'use client';
import { Grid } from "@mui/material";
import { useGetData } from '../../context/GetDataContext';


interface Props {
    handleAccodionClick: (id: string, id2: string)=> void;
};
const ProfileAccodion1: React.FC<Props>=({handleAccodionClick})=>{
    const { dashboardData } = useGetData();
    const {
        email,
        firstname,
        lastname,
        phonenumber, 
        gender, 
        dateofbirth, 
        bvn
    } = dashboardData;
    
    return (

        <div id="settings-accordion">
            <div className="setting-card">

                <div onClick={()=>handleAccodionClick("setting-profile-btn1", 'collapseOne')} className="settings-card-header" id="settings-headingOne">
                    <h5 style={{marginBottom: '0'}}>
                        <button 
                            id="setting-profile-btn1" 
                            className="btn btn-link setting-hover-color-change" 
                            style={{fontFamily: 'inherit'}}>Personal Information</button>
                        <div className="bus-down"></div>
                    </h5>
                </div>

                <div id="collapseOne" className="settings-profile-dont-show">
                    <div className="settings-card-body">
                        <Grid container>
                            <Grid item style={{padding: '0 15px'}} xs={12} md={3}>
                                <div style={{margin: '0 auto'}}>
                                    <div className="bigThumb">
                                        <img src="/imgs/user.png" alt="user"/>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item style={{padding: '0 15px'}} xs={12} md={9}>
                                <div className="settings-dialog-info marTy">
                                    <Grid container style={{marginBottom: '1rem'}}> 
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <label>First Name</label>
                                            <input className="form-control transfew" name="firstName" readOnly value={firstname} />
                                        </Grid>
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div>
                                                <label>Last Name</label>
                                                <input className="form-control transfew" name="lastName" readOnly value={lastname} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{marginBottom: '1rem'}}> 
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <label>Email</label>
                                            <input className="form-control transfew" name="email" readOnly value={email} />
                                        </Grid>
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div>
                                                <label>Phone Number</label>
                                                <input className="form-control transfew" name="phoneNumber" readOnly value={phonenumber} />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{marginBottom: '1rem'}}> 
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <label>Gender</label>
                                            <p style={{textTransform: 'uppercase'}}>{gender}</p>
                                        </Grid>
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div>
                                                <label>Date of Birth</label>
                                                <p>{dateofbirth}</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{marginBottom: '1rem'}}> 
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div>
                                                <label>BVN</label>
                                                <p>{bvn}</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default ProfileAccodion1;