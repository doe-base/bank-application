import { Scrollbars } from 'react-custom-scrollbars';

// APP POPUPS ARE POSITIONED IN Transfer funds PAGE
const handleBeneficiaryClose2 =()=>{
  const sidebarEl = document.getElementById('sidebar-wrapper-beneficiaries-popup2');
  sidebarEl?.classList.remove('show');
};
interface Props{};
const BeneficiaryListOtherBankPopuop: React.FC<Props> = ({}) => {

  return (
    <div id='sidebar-wrapper-beneficiaries-popup2' className='sidebar-wrapper-receive-funds'>
        
        <div className='sidebar-receive-funds-beneficiariesmodal-dialog modal-dialog-scrollable'>
            <aside className='sidebar-receive-funds-beneficiaries'>
                
            <div className='funds-beneficiaries-header'>
              <h6 className="funds-ben-header-h6">Beneficiaries</h6>
              <button type="button" className="btn-beneficiaries-funds close" onClick={handleBeneficiaryClose2}>×</button>
            </div>


            <div className='funds-beneficiaries-body'>
              <div style={{margin: '1rem 0'}}>
                <div style={{marginBottom: '10px'}}>
                  <input type="text" name="funds-beneficiaries-search" id="funds-beneficiaries-search" className='funds-beneficiaries-search' disabled/>
                </div>


                <div style={{marginBottom: '3rem', height: '230px'}}>
                  <div style={{position: 'relative', overflow: 'hidden'}}>
                    <Scrollbars 
                      style={{transform: 'translateZ(-100px)', height: '240px'}}
                      autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}>


                        <div><h6 className='funds-beneficiaries-h6'>No Beneficiary</h6></div>


                      </Scrollbars>
                  </div>
                </div>
              </div>
            </div>
                
            </aside>
        </div>
    </div>
  )
};

export default BeneficiaryListOtherBankPopuop;
