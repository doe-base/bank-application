"use client"
import HandymanIcon from '@mui/icons-material/Handyman';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Appbar from "../../components/Appbar/Appbar";
import Sidebar from "../../components/Sidebar/Sidebar";


interface Props {};
const BillsPayment: React.FC<Props>=({})=>{
    
    return (
        <>
            <Sidebar namefromApp={'pay-bills'}/>
    
            <main id="content">
                <Appbar />

                <section className="container">

                    <div style={{padding: '3rem 0'}}>
                        <h1 className="tranfer-title-text">Bills Payment</h1>
                        <p className="tranfer-lead-text">Pay bills on autopilot. Schedule them now!</p>


                        <div className="custom-tabs" style={{marginTop: '3rem', width: '100%'}}>
                            <ul role="tablist">
                                <li role="tab"><span id="" className="active">Bills Payment</span></li>
                            </ul>
                        </div>

                        <div id="" className="groom-panel-2 active">
                            <div className="groom-panel-header"><p>Choose Bill Payment Type</p></div>

                            <div style={{paddingTop: '3rem'}}>

                                <div className="bills-payment-main-content">
                                    <h2>Select a category</h2>

                                    <div className="bp-categories__categories">
                                        <a className="bp-category-box" href="/elite-bank-app/pay-bills/utilities"><div className="bills-icon-holder"><HandymanIcon /></div><h3>Utilities</h3></a>
                                        <a className="bp-category-box" href="/elite-bank-app/pay-bills/telecom"><div className="bills-icon-holder"><PhoneAndroidIcon /></div><h3>Telecom</h3></a>
                                        <a className="bp-category-box" href="/elite-bank-app/pay-bills/cable-tv"><div className="bills-icon-holder"><LiveTvIcon /></div><h3>Cable TV</h3></a>
                                        <a className="bp-category-box" href="/elite-bank-app/pay-bills/housing"><div className="bills-icon-holder"><HomeIcon /></div><h3>Rent/Mortgage</h3></a>
                                        <a className="bp-category-box" href="/elite-bank-app/pay-bills/loan"><div className="bills-icon-holder"><AccountBalanceIcon /></div><h3>Loan payments</h3></a>
                                        <a className="bp-category-box" href="/elite-bank-app/pay-bills/subscription"><div className="bills-icon-holder"><PhonelinkIcon /></div><h3>Subscriptions</h3></a>
                                        <a className="bp-category-box" href="/elite-bank-app/pay-bills/custom"><div className="bills-icon-holder"><PhonelinkIcon /></div><h3>Custom Payment</h3></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default BillsPayment;