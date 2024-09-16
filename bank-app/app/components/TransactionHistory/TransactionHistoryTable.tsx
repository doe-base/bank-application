import React, { useEffect, useState } from "react";
import userData from "../../data/user.json";
import "react-datepicker/dist/react-datepicker.css";



const splitArray = (masterArray: any, chunkSize: number) => {
    const result = [];
    for (let i = 0; i < masterArray.length; i += chunkSize) {
        result.push(masterArray.slice(i, i + chunkSize));
    }
    return result;
};

interface Transaction {
    id: number;
    date: string;
    time: string;
    amount: string;
    type: string;
    narration: string;
    transactionRef: string;
};
interface Props {
    transactions: Transaction[];
    splitArrays: any[] | undefined;
    setSplitArrays: React.Dispatch<React.SetStateAction<any[] | undefined>>
    ;
    spliteCount: number;
    applyActive: boolean;
    filteredArray: Transaction[];
    rangeArrayNothing: boolean;
    setRangeArrayNothing: React.Dispatch<React.SetStateAction<boolean>>;
};
const TransactionHistoryTable: React.FC<Props>=({transactions, splitArrays, setSplitArrays, spliteCount, applyActive, filteredArray, rangeArrayNothing, setRangeArrayNothing})=>{


    const handleBeneficiaryOpen4 =()=>{
        const sidebarEl = document.getElementById('transaction-detail-popup');
        sidebarEl?.classList.add('show');
    };
    useEffect(()=>{
        if (applyActive && filteredArray.length > 0) {
            const chunks = splitArray(filteredArray, 10);
            setSplitArrays(chunks);
        }else if(applyActive && filteredArray.length < 1){
            setRangeArrayNothing(true)
        }
        else{
            if (transactions.length > 0) {
                const chunks = splitArray(transactions, 10);
                (chunks);
            };
        };
    }, [applyActive, filteredArray]);


    return (

        <div className="transactions-groom-panel">
            <div className="transactions-responsive-table">
                <div className="transaction-table">
                    <table className="table table-bordered th-table" style={{width: '100%', textAlign: 'left'}}>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Transaction Date</th>
                                <th>Time</th><th>Transfer amount</th>
                                <th>Narration</th>
                                <th>Transaction Ref</th>
                                <th>Details</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                rangeArrayNothing
                                ?
                                <tr style={{textAlign: 'center', display: 'block', width: '100%', fontSize: '1.2rem', fontWeight: '600', color: 'gray'}}><th>No transaction to display</th></tr>
                                :
                                splitArrays
                                ?
                                splitArrays[spliteCount].map((item: any, index: number) => {
                                    
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td style={{fontWeight: '600'}}>{item.date}</td>
                                            <td style={{fontWeight: '600'}}>{item.time}</td>
                                            <td>
                                                <div className={`${item.type == "credit" ? "is-credit" : "is-debit"}`}>${item.amount}</div>
                                            </td>
                                            <td>
                                                <div className="th-narration" style={{fontWeight: '600'}}>IFO IDOKO  DANIEL IDOGWU BO DANIEL IDOGWU IDOKO</div>
                                            </td>
                                            <td style={{fontWeight: '600'}}>A2201072753</td>
                                            <td>
                                                <button onClick={handleBeneficiaryOpen4} className="th-details-btn">View details</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
};

export default TransactionHistoryTable;