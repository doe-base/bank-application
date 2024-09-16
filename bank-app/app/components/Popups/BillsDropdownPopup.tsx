import { Scrollbars } from 'react-custom-scrollbars';

interface Props{
    dropdown: string;
    handleDropDownClose: ()=> void;
    setDropdownOpt1: React.Dispatch<React.SetStateAction<string>>;
    dropdownOpt1: string;
    setDropdownOpt2: React.Dispatch<React.SetStateAction<string>>;
};
const BillsDropdownPopup: React.FC<Props> = ({
    handleDropDownClose, 
    dropdown, 
    setDropdownOpt1, 
    dropdownOpt1, 
    setDropdownOpt2
}) => {

  const handleDropdownOpt1 =(selected: string)=>{
    setDropdownOpt2('')
    setDropdownOpt1(selected)
    handleDropDownClose()
  };
  const handleDropdownOpt2 =(selected: string)=>{
    setDropdownOpt2(selected)
    handleDropDownClose()
  };

  return (
    <div id='dropdown-select-popup' className='sidebar-wrapper-receive-funds'>
        
        <div className='sidebar-receive-funds-beneficiariesmodal-dialog modal-dialog-scrollable'>
            <aside className='sidebar-receive-funds-beneficiaries'>
                
            <div className='funds-beneficiaries-header'>
              {
                <>
                        <h6 id='bill-select-utility-type' className="funds-ben-header-h6 justdisplaynone">Select Utility Type</h6>
                    
                        <h6 id='bill-select-service-provider' className="funds-ben-header-h6 justdisplaynone">Select Service Provider</h6>
                </>
              }

              <button type="button" className="btn-beneficiaries-funds close" onClick={handleDropDownClose}>×</button>
            </div>


            <div className='funds-beneficiaries-body'>
              <div style={{margin: '1rem 0'}}>
                <div>
                  <input disabled type="text" name="funds-beneficiaries-search" id="funds-beneficiaries-search" className='funds-beneficiaries-search' style={{cursor: 'not-allowed'}} />
                </div>


                <div style={{marginBottom: '3rem', height: '230px'}}>
                  <div style={{position: 'relative', overflow: 'hidden'}}>
                    <Scrollbars 
                      style={{transform: 'translateZ(-100px)', height: '230px'}}
                      autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}>
                        
                        
                        <div id='bill-select-utility-type-options' className="justdisplaynone" style={{padding: '1rem 0'}}>
                            <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt1('Electricity')}><p className='bills-dropdown-button-xxx-p'>Electricity</p></div>
                            <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt1('Natural Gas')}><p className='bills-dropdown-button-xxx-p'>Natural Gas</p></div>
                            <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt1('Water and Wastewater')}><p className='bills-dropdown-button-xxx-p'>Water and Wastewater</p></div>
                            <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt1('Trash Collection and Recycling')}><p className='bills-dropdown-button-xxx-p'>Trash Collection and Recycling</p></div>
                        </div>

                        <div id='bill-select-service-provider-options' className="justdisplaynone">

                              {
                                    dropdownOpt1 == ''
                                    ?
                                      <div><h6 className='funds-beneficiaries-h6'>select utility type</h6></div>
                                    :
                                      dropdownOpt1 == 'Electricity'
                                      ?
                                        <div style={{padding: '1rem 0'}}>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Duke Energy')}><p className='bills-dropdown-button-xxx-p'>Duke Energy</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('NextEra Energy')}><p className='bills-dropdown-button-xxx-p'>NextEra Energy</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Southern Company')}><p className='bills-dropdown-button-xxx-p'>Southern Company</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Exelon')}><p className='bills-dropdown-button-xxx-p'>Exelon</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('FirstEnergy Corp')}><p className='bills-dropdown-button-xxx-p'>FirstEnergy Corp</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Dominion Energy')}><p className='bills-dropdown-button-xxx-p'>Dominion Energy</p></div>
                                        </div>
                                      :
                                      dropdownOpt1 == 'Natural Gas'
                                      ?
                                        <div style={{padding: '1rem 0'}}>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Kinder Morgan')}><p className='bills-dropdown-button-xxx-p'>Kinder Morgan</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('CenterPoint Energy')}><p className='bills-dropdown-button-xxx-p'>CenterPoint Energy</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('NiSource Inc.')}><p className='bills-dropdown-button-xxx-p'>NiSource Inc.</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Consolidated Edison Inc.(ConEd)')}><p className='bills-dropdown-button-xxx-p'>Consolidated Edison Inc.(ConEd)</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('National Grid USA')}><p className='bills-dropdown-button-xxx-p'>National Grid USA</p></div>
                                        </div>
                                      :
                                      dropdownOpt1 == 'Water and Wastewater'
                                      ?
                                        <div style={{padding: '1rem 0'}}>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('American Water Works Company')}><p className='bills-dropdown-button-xxx-p'>American Water Works Company</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Aqua America')}><p className='bills-dropdown-button-xxx-p'>Aqua America</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('California Water Service Group')}><p className='bills-dropdown-button-xxx-p'>California Water Service Group</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Severn Trent Plc')}><p className='bills-dropdown-button-xxx-p'>Severn Trent Plc</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('York Water Company')}><p className='bills-dropdown-button-xxx-p'>York Water Company</p></div>
                                        </div>
                                      :
                                      dropdownOpt1 == 'Trash Collection and Recycling'
                                      ?
                                        <div style={{padding: '1rem 0'}}>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Waste Management')}><p className='bills-dropdown-button-xxx-p'>Waste Management</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Republic Services')}><p className='bills-dropdown-button-xxx-p'>Republic Services</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Waste Connections')}><p className='bills-dropdown-button-xxx-p'>Waste Connections</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('AmeriWaste Industries')}><p className='bills-dropdown-button-xxx-p'>AmeriWaste Industries</p></div>
                                          <div typeof='button' className='bills-dropdown-button-xxx' onClick={()=> handleDropdownOpt2('Rumpke Waste & Recycling')}><p className='bills-dropdown-button-xxx-p'>Rumpke Waste & Recycling</p></div>
                                        </div>
                                      :
                                      <div><h6 className='funds-beneficiaries-h6'>select utility type</h6></div>
                              }
                          </div>

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
export default BillsDropdownPopup;
