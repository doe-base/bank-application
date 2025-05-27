import React, { useEffect, useState } from "react";

interface Props {};
const FormPart3: React.FC<Props>=({ })=>{
    const [activePeriod, setActivePeriod] = useState('9')
    const [investmentAmount, setInvestmentAmount] = useState('5000')
    const [monthDuration, setMonthDuration] = useState('3')
    const [activeBtn2, setActiveBtn2] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    const [profitReturns, setProfitReturns] = useState(0)

    const handleLimitTransactionClose =()=>{
        const sidebarEl = document.getElementById('sidebar-wrapper-limit-transacation')
        sidebarEl?.classList.remove('show')
    }
    const handleEnterPinOpen =()=>{
        handleLimitTransactionClose()
        const sidebarEl = document.getElementById('sidebar-wrapper-enter-pin')
        sidebarEl?.classList.add('show')
    }
    function calculateProfit(investment: number, months: number, interestRate: number) {
        if (investment <= 0 || months <= 0 || interestRate <= 0) {
          throw new Error("Invalid input: Investment, months, and interest rate must be positive values.");
        }
        const timeInYears = months / 12;
        const rate = interestRate / 100;
        const profit = investment * rate * timeInYears;
        return profit;
    }
    function calculateTenPercentRounded(figure: number) {
        const tenPercent = figure * 0.1;
        const roundedValue = tenPercent.toFixed(2);
        return roundedValue;
    }
    function calculateMaturityDate(months: number) {
        const today = new Date();
        today.setMonth(today.getMonth() + months);
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        const maturityDate = `${month}-${day}-${year}`;
        return maturityDate;
    }
    function formatNumberWithCommas(number: number) {
        // Use toLocaleString for comma separation (modern browsers)
        if (typeof number.toLocaleString === 'function') {
          return number.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        }
        // Fallback for older browsers (manual formatting)
        const parts = number.toString().split('.');
        const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const decimalPart = parts.length > 1 ? `.${parts[1]}` : '';
        return integerPart + decimalPart;
    }

    useEffect(()=>{
        setProfitReturns(calculateProfit(Number(investmentAmount), Number(monthDuration), Number(activePeriod)))
    }, [investmentAmount, activePeriod, monthDuration])
    useEffect(()=>{
        if(Number(investmentAmount) >= 5000 && isChecked){
            setActiveBtn2(false)
        }else{
            setActiveBtn2(true)
        }
    }, [ investmentAmount, isChecked ])


    return (
        
        <div id="groom-panel-active-option-investment-new-3" className="groom-panel-2" style={{marginBottom: '50px', padding: '2rem 0'}}>
            <div className="groom-panel-2-inner"  style={{minHeight: 'calc(100vh - 250px)'}}>
                <div className="groom-panel-2-content">
                
                    <div className="investment-new-holder">
                            <div className="investment-new-step">Step 3</div>

                            <small className="investment-new-text--main">3 of 3 Done</small>
                    </div>

                    <div style={{width: '100%', margin: '1.5rem 0', textAlign: 'left'}}>
                        <h3 className="investment-new-sub-heading">Preview Investment</h3>
                        <span className="investment-new-tiny__message">Summary of your investment details</span>
                    </div>


                    <div className="investment-new-step-3">
                        <ul style={{marginTop: '1.5rem'}}>
                            <li style={{borderBottom: '1px solid #dee2e6'}}>
                                <h4>INVEST</h4>
                                <h4 style={{color: '#28a745'}}>${formatNumberWithCommas(Number(investmentAmount))}.00</h4>
                            </li>
                            <li>
                                <div>
                                    <p>Profit Returns</p>
                                    <h4>${formatNumberWithCommas(profitReturns)}.00</h4>
                                </div>
                                <div>
                                    <p>Percent</p>
                                    <h4>{activePeriod}% P/A</h4>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Duration</p>
                                    <h4>{monthDuration} months</h4>
                                </div>
                                <div>
                                    <p>Maturity Date</p>
                                    <h4>{calculateMaturityDate(Number(monthDuration))}</h4>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Withholding Tax</p>
                                    <h4>${formatNumberWithCommas(Number(calculateTenPercentRounded(profitReturns)))}.00</h4>
                                </div>
                            </li>
                        </ul>
                    </div>

                    

                    <button type="button" className="btn investment-new-create-acc" onClick={handleEnterPinOpen}>Proceed</button>

                </div>
            </div>
        </div>

    )
}

export default FormPart3;