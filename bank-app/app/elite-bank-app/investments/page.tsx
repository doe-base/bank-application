'use client';
import Appbar from "@/app/components/Appbar/Appbar";
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { INVESTNEW } from "@/app/constants/routes";
import { useGetData } from '../../context/GetDataContext';

interface Props {};
const Invest: React.FC<Props>=({})=>{
    const { pageLoading } = useGetData();

    const handleOption1 =()=>{
        document.getElementById('invest-option-2')?.classList.remove('active');
        document.getElementById('invest-option-1')?.classList.add('active');

        document.getElementById('groom-panel-active-option-invest-2')?.classList.remove('active');
        document.getElementById('groom-panel-active-option-invest-1')?.classList.add('active');
    };
    const handleOption2 =()=>{
        document.getElementById('invest-option-1')?.classList.remove('active');
        document.getElementById('invest-option-2')?.classList.add('active');

        document.getElementById('groom-panel-active-option-invest-1')?.classList.remove('active');
        document.getElementById('groom-panel-active-option-invest-2')?.classList.add('active');
    };
 
    
    return (
        <>
            {
                pageLoading
                ?
                    <LoadingScreen/>
                :
                    <>
                        <Sidebar namefromApp="invest" />
                        
                        <main id="content">
                            <Appbar />

                            <section className="container">

                                <div style={{padding: '3rem 0'}}>
                                    <h1 className="tranfer-title-text">Investments</h1>
                                    <p className="tranfer-lead-text">Manage of all your investment plans</p>


                                    <div className="custom-tabs" style={{marginTop: '3rem', width: '100%'}}>
                                        <ul role="tablist">
                                            <li role="tab"><span onClick={handleOption1} id="invest-option-1" className="active">Active Investments</span></li>
                                            <li role="tab"><span onClick={handleOption2} id="invest-option-2" className="">Completed Investments</span></li>
                                        </ul>
                                    </div>

                                    <div id="groom-panel-active-option-invest-1" className="groom-panel-2 active" style={{marginBottom: '50px'}}>
                                        <div className="groom-panel-2-inner"  style={{minHeight: 'calc(100vh - 250px)'}}>

                                            <div className="groom-panel-2-content">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#d1a23c" fill-opacity="0.1"></circle><g clip-path="url(#clip0_5972_14812)"><path d="M39.8784 14.2527L35.4753 14.2591C35.1212 14.2527 34.8315 14.5424 34.8251 14.8964C34.8187 15.2505 35.1083 15.5402 35.4624 15.5466C35.4688 15.5466 35.4688 15.5466 35.4753 15.5466L38.327 15.5402L31.3425 22.4989L28.9027 20.0785C28.7804 19.9626 28.6131 19.9047 28.4457 19.9111C28.2783 19.9047 28.111 19.9626 27.9886 20.0785L15.629 32.4382C15.3779 32.6892 15.3779 33.0948 15.629 33.3394C15.7513 33.4617 15.9122 33.5261 16.086 33.5261C16.2598 33.5261 16.4208 33.4617 16.5431 33.3394L28.4521 21.4303L30.8919 23.8894C31.0078 24.0181 31.1751 24.0889 31.3489 24.0954C31.5227 24.0889 31.6837 24.0117 31.806 23.8894L39.2347 16.4543L39.2282 19.3189C39.2282 19.6794 39.5115 19.969 39.872 19.9819C40.2325 19.9755 40.5157 19.6794 40.5157 19.3189L40.5221 14.9029C40.5221 14.5488 40.2325 14.2527 39.8784 14.2527Z" fill="#d1a23c" stroke="#d1a23c" stroke-width="1.10399"></path><rect x="37.5986" y="22.4928" width="2.47624" height="19.8914" fill="#d1a23c"></rect><rect x="17.7644" y="36.1677" width="2.47624" height="6.19061" fill="#d1a23c"></rect><rect x="22.4702" y="30.9891" width="2.47624" height="11.3941" fill="#d1a23c"></rect><rect x="27.5535" y="29.4451" width="2.47624" height="12.939" fill="#d1a23c"></rect><rect x="32.4478" y="27.1914" width="2.47624" height="15.1921" fill="#d1a23c"></rect></g><defs><clipPath id="clip0_5972_14812"><rect width="31.8197" height="31.8197" fill="white" transform="translate(13.1836 14.2529)"></rect></clipPath></defs></svg>

                                                <p className="groom-panel-2-content-text-big">You have no Active investments</p>
                                                <p className="groom-panel-2-content-text-small">Create a new investment by tapping on the button below</p>

                                                <a href={INVESTNEW} type="button" className="btn groom-panel-2-content-text-btn">Start New Investment</a>
                                            </div>

                                        </div>
                                    </div>


                                    <div id="groom-panel-active-option-invest-2" className="groom-panel-2" style={{minHeight: 'calc(100vh - 250px)', marginBottom: '50px'}}>
                                        <div className="groom-panel-2-inner"  style={{minHeight: 'calc(100vh - 250px)'}}>

                                            <div className="groom-panel-2-content">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#d1a23c" fill-opacity="0.1"></circle><g clip-path="url(#clip0_5972_14812)"><path d="M39.8784 14.2527L35.4753 14.2591C35.1212 14.2527 34.8315 14.5424 34.8251 14.8964C34.8187 15.2505 35.1083 15.5402 35.4624 15.5466C35.4688 15.5466 35.4688 15.5466 35.4753 15.5466L38.327 15.5402L31.3425 22.4989L28.9027 20.0785C28.7804 19.9626 28.6131 19.9047 28.4457 19.9111C28.2783 19.9047 28.111 19.9626 27.9886 20.0785L15.629 32.4382C15.3779 32.6892 15.3779 33.0948 15.629 33.3394C15.7513 33.4617 15.9122 33.5261 16.086 33.5261C16.2598 33.5261 16.4208 33.4617 16.5431 33.3394L28.4521 21.4303L30.8919 23.8894C31.0078 24.0181 31.1751 24.0889 31.3489 24.0954C31.5227 24.0889 31.6837 24.0117 31.806 23.8894L39.2347 16.4543L39.2282 19.3189C39.2282 19.6794 39.5115 19.969 39.872 19.9819C40.2325 19.9755 40.5157 19.6794 40.5157 19.3189L40.5221 14.9029C40.5221 14.5488 40.2325 14.2527 39.8784 14.2527Z" fill="#d1a23c" stroke="#d1a23c" stroke-width="1.10399"></path><rect x="37.5986" y="22.4928" width="2.47624" height="19.8914" fill="#d1a23c"></rect><rect x="17.7644" y="36.1677" width="2.47624" height="6.19061" fill="#d1a23c"></rect><rect x="22.4702" y="30.9891" width="2.47624" height="11.3941" fill="#d1a23c"></rect><rect x="27.5535" y="29.4451" width="2.47624" height="12.939" fill="#d1a23c"></rect><rect x="32.4478" y="27.1914" width="2.47624" height="15.1921" fill="#d1a23c"></rect></g><defs><clipPath id="clip0_5972_14812"><rect width="31.8197" height="31.8197" fill="white" transform="translate(13.1836 14.2529)"></rect></clipPath></defs></svg>

                                                <p className="groom-panel-2-content-text-big">You Have No Completed Investments</p>
                                                <p className="groom-panel-2-content-text-small">Create a new investment by tapping on the button below</p>

                                                <a href={INVESTNEW} type="button" className="btn groom-panel-2-content-text-btn">Start New Investment</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </section>
                        </main>
                    </>
            }
        </>
    )
};

export default Invest;