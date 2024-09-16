

const handleBeneficiaryClose4 =()=>{
    const sidebarEl = document.getElementById('transaction-detail-popup');
    sidebarEl?.classList.remove('show');
};
interface Props{};
const TransactionDetailPopup: React.FC<Props> = ({}) => {

  return (
    <div id='transaction-detail-popup' className='sidebar-wrapper-receive-funds'>
        
        <div className='sidebar-receive-funds-beneficiariesmodal-dialog modal-dialog-scrollable' style={{height: '100%'}}>
            <aside className='sidebar-transaction-recipte'>
                
                <div className='funds-beneficiaries-header'>
                <h6 className="funds-ben-header-h6" style={{fontSize: '20px'}}>Receipt</h6>
                <button type="button" className="btn-beneficiaries-funds close" onClick={handleBeneficiaryClose4}>×</button>
                </div>


                <div className='funds-beneficiaries-body'>
                <div style={{margin: '1rem 0'}}>
                    <div style={{marginBottom: '3rem', height: '230px'}}>
                    <div style={{position: 'relative', overflow: 'hidden'}}>
                        

                        <div className="transaction-detail-th-summary px-sm-5 px-3">
                            <div className="transaction-detail-th-summary__info"><span>Receiver</span><span className="text-capitalize">RECEIVER NAME</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Amount</span><span className="text-capitalize amount">₦5,350.00</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Paid on</span><span className="text-capitalize">08-01-2022</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Receiver Bank</span><span className="text-capitalize">BANK</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Receiver Account Number</span><span className="text-capitalize">ACCOUNT NUMBER</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Sender</span><span className="text-capitalize">RECEIVER NAME</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Narration</span><span className="text-capitalize narration">IFO RECEIVER NAME </span></div>
                            <div className="transaction-detail-th-summary__info"><span>Transaction fees</span><span className="text-capitalize">0</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Reference ID</span><span className="text-capitalize">091238409324809</span></div>
                            <div className="transaction-detail-th-summary__info"><span>Session ID</span><span className="text-capitalize" style={{wordBreak: 'break-word'}}>00002322234232010805019003056</span></div>
                            <div className="transaction-detail-th-summary__info"></div>
                        </div>

                    </div>
                    </div>
                </div>
                </div>

            </aside>
        </div>
    </div>
  )
};
export default TransactionDetailPopup;
