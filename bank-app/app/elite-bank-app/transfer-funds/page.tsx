'use client';
import Appbar from "@/app/components/Appbar/Appbar";
import TransferToSame from "@/app/components/TransferFunds/TransferToSame";
import TransferToOther from "@/app/components/TransferFunds/TransferToOther";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import BeneficiariesListPopup from "@/app/components/Popups/BeneficiaryListPopup";
import BeneficiaryListOtherBankPopuop from "@/app/components/Popups/BeneficiaryListOtherBankPopup";
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";
import { useGetData } from '../../context/GetDataContext';

interface Props {};
const Transfer: React.FC<Props>=({})=>{
    const { pageLoading } = useGetData();
    const handleOption1 =()=>{
        document.getElementById('transfer-option-2')?.classList.remove('active');
        document.getElementById('transfer-option-1')?.classList.add('active');

        document.getElementById('groom-panel-active-option-2')?.classList.remove('active');
        document.getElementById('groom-panel-active-option-1')?.classList.add('active');
    };
    const handleOption2 =()=>{
        document.getElementById('transfer-option-1')?.classList.remove('active');
        document.getElementById('transfer-option-2')?.classList.add('active');

        document.getElementById('groom-panel-active-option-1')?.classList.remove('active');
        document.getElementById('groom-panel-active-option-2')?.classList.add('active');
    };


    return (
        <>
            {
                pageLoading
                ?
                    <LoadingScreen/>
                :
                <>
                    <Sidebar namefromApp={'send-money'} />
                    <main id="content">
                        <Appbar />
        
                        <section className="container">
                            <div style={{padding: '3rem 0'}}>
                                <h1 className="tranfer-title-text">Send Money</h1>
                                <p className="tranfer-lead-text">Perform intrabank and interbank transfer operations here</p>
        
                                <div className="custom-tabs" style={{marginTop: '3rem', width: '100%'}}>
                                    <ul role="tablist">
                                        <li role="tab"><span onClick={handleOption1} id="transfer-option-1" className="active">Mintyn to Mintyn</span></li>
                                        <li role="tab"><span onClick={handleOption2} id="transfer-option-2" className="">Mintyn to Other Banks</span></li>
                                    </ul>
                                </div>
        
                                <TransferToSame />
                                <TransferToOther />
                            </div>
                        </section>
                    </main>
                    <BeneficiariesListPopup />
                    <BeneficiaryListOtherBankPopuop />
                </>
            }
        </>

    )
};

export default Transfer;