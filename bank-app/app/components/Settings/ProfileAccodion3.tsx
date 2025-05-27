'use client';
import { Grid } from "@mui/material";


interface Props {
    handleAccodionClick: (id: string, id2: string)=> void;
};
const ProfileAccodion3: React.FC<Props>=({handleAccodionClick})=>{

    
    return (
        <div id="settings-accordion">
            <div className="setting-card">

                <div onClick={()=>handleAccodionClick("setting-profile-btn3", 'collapseThree')} className="settings-card-header" id="settings-headingOne">
                    <h5 style={{marginBottom: '0'}}>
                        <button 
                            id="setting-profile-btn3" 
                            className="btn btn-link setting-hover-color-change" 
                            style={{fontFamily: 'inherit'}}>Identity Infomation</button>
                        <div className="bus-down">

                        </div>
                    </h5>
                </div>


                <div id="collapseThree" className="settings-profile-dont-show">
                    <div className="settings-card-body">
                        <Grid container>
                            <Grid item style={{padding: '0 15px'}} xs={12} md={2}>
                                <div className="mx-auto">
                                    <div style={{display: 'block', margin: 'auto'}}>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="67" height="65" viewBox="0 0 67 65" fill="none" className="injected-svg" data-src="https://res.cloudinary.com/dswxtf2ay/image/upload/v1590587006/Mint_InternetBanking/illustrations/id-card_gfwli5.svg">
                                                <g clip-path="url(#clip0-11)">
                                                <path d="M33.3201 65C51.672 65 66.64 50.4004 66.64 32.5001C66.64 14.5999 51.672 0 33.3201 0C14.968 0 0 14.5999 0 32.5001C0 50.4004 14.968 65 33.3201 65Z" fill="#FAF5EB"></path>
                                                <path d="M34.458 0.0216064L30.5518 22.4929H35.8949L39.7008 0.598354C37.9955 0.27602 36.2448 0.0798779 34.458 0.0216064Z" fill="#77502F"></path>
                                                <path d="M14.2797 25.2196H26.6677V23.569C26.6677 22.1691 27.8417 20.7692 29.2771 20.7692H37.3638C38.7987 20.7692 39.9732 22.1691 39.9732 23.569V25.2196H52.3608C53.7906 25.2196 54.9602 26.3602 54.9602 27.7554V50.4295C54.9602 51.8247 53.7906 52.9656 52.3608 52.9656H14.2794C12.8497 52.9656 11.6797 51.8248 11.6797 50.4295V27.7554C11.6797 26.3602 12.8497 25.2196 14.2794 25.2196H14.2797ZM28.962 25.2196H37.6785V23.3172C37.6785 22.5324 36.9093 22.3652 35.9688 22.3652H30.6713C29.7308 22.3652 28.9616 22.5324 28.9616 23.3172V25.2196H28.962Z" fill="white"></path>
                                                <path d="M15.8599 26.9347H50.7799C52.0913 26.9347 53.1643 27.9347 53.1643 29.1574V49.0269C53.1643 50.2498 52.0916 51.249 50.7799 51.249H15.8599C14.5482 51.249 13.4756 50.2496 13.4756 49.0269V29.1575C13.4756 27.9347 14.5482 26.9347 15.8599 26.9347Z" fill="#D0A23C"></path>
                                                <path d="M22.5873 37.6278H25.3696L25.5956 39.9151L25.9957 40.2284L26.84 40.7526L23.9784 47.3449L21.1172 40.7526L21.9615 40.2284L22.362 39.9151L22.5873 37.6278Z" fill="#E8F1F8"></path>
                                                <path d="M21.6675 40.3978L19.3614 41.1157L23.9767 47.3454L27.9036 40.9066L26.274 40.4028L24.8394 41.3907H23.1191L21.6675 40.3978Z" fill="#E8F1F8"></path>
                                                <path d="M23.4633 41.3001L23.6606 41.7743L23.2223 47.1808L23.9785 47.7446L24.7343 47.1808L24.2963 41.7743L24.4932 41.3001L23.9781 41.2802L23.4633 41.3001Z" fill="#E8F1F8"></path>
                                                <path d="M21.7085 40.3854L17.6292 41.6558C17.6292 41.6558 17.101 41.9231 16.9415 42.7381C16.789 43.5176 16.7097 44.3151 16.5896 45.3907C18.5352 47.132 21.1292 48.1953 23.9782 48.1953C26.8274 48.1953 29.4211 47.132 31.3674 45.3905C31.2469 44.3149 31.1677 43.5174 31.0147 42.7382C30.8552 41.9234 30.3275 41.6559 30.3275 41.6559L26.2757 40.4031L23.9784 46.9751L21.7085 40.3854Z" fill="#E8F1F8"></path>
                                                <path d="M21.7085 40.3854L20.8283 40.6596L20.659 42.8373C20.659 42.8373 20.7061 43.0162 20.8454 43.0002L21.6394 43.2915C21.6394 43.2915 21.6914 43.3422 21.6453 43.4064L20.9656 43.8607L23.3138 48.1773C23.5336 48.1893 23.7554 48.1953 23.9782 48.1953C24.201 48.1953 24.4226 48.1893 24.6424 48.1773L26.9906 43.8607L26.3109 43.4064C26.2644 43.3422 26.3167 43.2915 26.3167 43.2915L27.1108 43.0002C27.2507 43.0166 27.2972 42.8373 27.2972 42.8373L27.1285 40.6665L26.2757 40.4031L23.9784 46.9751L21.7085 40.3854Z" fill="#E8F1F8"></path>
                                                <path d="M20.7368 32.9762C20.7368 33.1886 20.6575 33.3968 20.663 33.6009C19.9173 33.4661 20.2776 35.6262 20.6995 35.9235C20.733 35.9471 20.8152 35.8942 20.8853 35.8509C21.0314 36.6457 22.2803 38.7693 23.0744 39.6624C23.2946 39.9105 24.6434 39.9065 24.8615 39.6717C25.6751 38.7982 26.9222 36.6501 27.0694 35.8509C27.1394 35.8946 27.2217 35.9471 27.2551 35.9235C27.6775 35.6264 28.0372 33.4663 27.2917 33.6009C27.2978 33.3968 27.2183 33.1887 27.2183 32.9762C27.177 31.2989 25.6185 30.4613 23.9778 30.4544C22.337 30.4613 20.778 31.2989 20.7368 32.9762Z" fill="#E8F1F8"></path>
                                                <path d="M21.7378 30.8257C21.5022 30.7991 20.6532 31.0528 20.551 31.9296C20.4492 32.8061 20.498 33.6139 20.498 33.6139C20.498 33.6139 20.9957 33.7361 21.0579 34.2335C21.1208 34.7311 21.0764 34.7311 21.0764 34.7311L21.2563 34.6917L21.3846 33.8386C22.1293 33.3837 21.3792 32.7097 22.1238 32.5519C24.135 33.9502 25.9093 33.7107 26.7095 33.0527C26.7095 33.0527 26.5227 33.7407 26.6668 33.9861C26.8109 34.2312 26.7244 34.6174 26.7244 34.6174L26.9115 34.6088C26.9115 34.6088 26.8774 33.5958 27.2928 33.6002C28.8704 31.0594 23.8758 27.9037 21.7378 30.8257Z" fill="#E8F1F8"></path>
                                                <path d="M22.3418 39.5886C22.4002 39.5926 21.6606 40.4061 21.6606 40.4061L22.2898 42.5083L23.9773 41.2802C23.049 40.8359 22.4949 40.2602 22.3414 39.5885H22.3418V39.5886Z" fill="white"></path>
                                                <path d="M25.6137 39.5887C25.5557 39.5927 26.2948 40.4062 26.2948 40.4062L25.6656 42.5084L23.9778 41.2803C24.9059 40.8362 25.46 40.2605 25.6137 39.5887Z" fill="white"></path>
                                                <path d="M33.3193 30.5709H50.5995V31.509H33.3193V30.5709ZM40.3135 47.6707H50.5995V48.5879H40.3135V47.6707ZM33.3193 37.1453H43.1629V38.0834H33.3193V37.1453ZM33.3193 34.9539H50.5995V35.8923H33.3193V34.9539ZM33.3193 32.7628H50.5995V33.7004H33.3193V32.7628Z" fill="white"></path>
                                                <path d="M32.085 0.0253906L35.991 22.4933H30.6478L26.8445 0.616484C28.5484 0.289199 30.2987 0.0889941 32.0846 0.0257715L32.085 0.0253906Z" fill="#77502F"></path>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0-11">
                                                <rect width="66.64" height="65" fill="white"></rect>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item style={{padding: '0 15px'}} xs={12} md={10}>
                                <div className="settings-dialog-info">
                                    

                                    <Grid container style={{marginBottom: '1rem'}}>
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div className="form-group">
                                                <label style={{marginBottom: '0.75rem'}}>ID Type</label>
                                                <p style={{marginBottom: '1rem'}}>NATIONAL_ID</p>
                                            </div>
                                        </Grid>
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div className="form-group">
                                                <label style={{marginBottom: '0.75rem'}}>Expiry Date</label>
                                                <p style={{marginBottom: '1rem'}}>08/2028</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{marginBottom: '1rem'}}>
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div className="form-group">
                                                <label style={{marginBottom: '0.75rem'}}>ID number</label>
                                                <p style={{marginBottom: '1rem'}}>0987654321</p>
                                            </div>
                                        </Grid>
                                        <Grid item style={{padding: '0 15px'}} xs={12} sm={6}>
                                            <div className="form-group">
                                                <label style={{marginBottom: '0.75rem'}}>Verification Status</label>
                                                <p style={{marginBottom: '1rem'}}>VERIFIED</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className="form-group"><label style={{marginBottom: '0.75rem'}}>Uploaded ID</label>
                                        <Grid container style={{marginBottom: '1rem'}}>
                                            <Grid item style={{padding: '0 15px'}} xs={12} sm={7}>
                                                <div className="upload-btn-wrapper mt-2">
                                                    <div className="file-container">
                                                        <img alt="valid ID" src="/imgs/id-card.png" className="img-responsive contain-img myIdenti" style={{width: '80%', height: 'auto'}} />
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>


                {/*  */}

            </div>
        </div>
    )
};

export default ProfileAccodion3;