'use client';
import React, { useState } from "react";
import userData from "../../data/user.json";
import { Grid } from "@mui/material";
import Appbar from "@/app/components/Appbar/Appbar";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import AddBeneficiairyPopup from "../../components/Popups/AddBeneficiaryPopup";
import { useGetData } from '../../context/GetDataContext';
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";

const handleBeneficiaryOpen3 =()=>{
    const sidebarEl = document.getElementById('ben-beneficiaries-popup');
    sidebarEl?.classList.add('show');
};
const handleLimitTransactionClose =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-limit-transacation');
    sidebarEl?.classList.remove('show');
};
const handleEnterPinOpen =()=>{
    handleLimitTransactionClose()
    const sidebarEl = document.getElementById('sidebar-wrapper-enter-pin');
    sidebarEl?.classList.add('show');
};
interface Props {};
const Beneficiaries: React.FC<Props>=({})=>{
    const { pageLoading } = useGetData();
    const [userBeneficiary, setUserBeneficiary] = useState(userData.users[0].beneficiairy);
    
    return (
        <>
            {
                pageLoading
                ?
                    <LoadingScreen/>
                :
                    <>
                        <Sidebar namefromApp="beneficiaries" />
                        <main id="content">
                            <Appbar />

                            <section className="container">

                                <ul className="ben-page-nav ben-page-nav-tabs" id="PageNavigator">
                                    <li className="ben-page-nav-item">
                                        <a className="ben-page-nav-link active">Beneficiaries</a>
                                    </li>
                                </ul>


                                <div className="ben-groom-panel">
                                    <div>
                                        <div style={{paddingTop: '3rem'}}></div>
                                        <div className="ben-groom-panel-inner">
                                            <div className="ben-groom-panel-inner-measure">
                                                <Grid container className="ben-res-pad" style={{marginBottom: '1rem'}}>
                                                    <Grid item xs={12} md={5}>
                                                        <input name="globalSearch" className="ben-form-control transSearch" placeholder="Search Beneficiaries" disabled/>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}></Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <button onClick={handleBeneficiaryOpen3} className="btn shupNew w-100"><img src="/imgs/plus.svg" style={{marginRight:  '0.5rem'}} alt="plus"/>Add New</button>
                                                    </Grid>
                                                </Grid>

                                                <Grid container className="ben-res-pad">
                                                    <Grid item xs={12}>
                                                        <div className="ben-table-responsive">


                                                            <table className="ben-table" id="beneficiary">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Account Holder</th>
                                                                        <th>Bank</th>
                                                                        <th></th><th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        userBeneficiary.map((item: any)=>{
                                                                            return (
                                                                                <tr key={item.id}>
                                                                                    <td>
                                                                                        <div className="mint-row">
                                                                                            <div className="block-circle" style={{marginRight: '0.5rem'}}>{item.initial}</div>
                                                                                            <div className="taylor">
                                                                                                <h6 className="mb-0">{item.name}</h6>
                                                                                                <p className="mb-0">{item.accountNumber}</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="mint-row">
                                                                                            <div className="taylor">
                                                                                                <h6 className="mb-0" style={{marginTop: '2px'}}> {item.bank} </h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <button className="btn send-money  mx-auto" style={{marginTop: "0.5rem"}}>Send Money</button>
                                                                                    </td>
                                                                                    <td>
                                                                                        <button className="btn remove-bene  mx-auto" style={{marginTop: "0.5rem"}} onClick={handleEnterPinOpen}>remove</button>
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        })
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                        
                        <AddBeneficiairyPopup />
                    </>
            }
        </>
    )
};

export default Beneficiaries;