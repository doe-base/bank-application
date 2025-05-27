'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import userData from "../../data/user.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Appbar from "@/app/components/Appbar/Appbar";
import TransactionHistoryTable from "@/app/components/TransactionHistory/TransactionHistoryTable";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import TransactionDetailPopup from "@/app/components/Popups/TransactionDetailsPopup";
import LoadingScreen from "@/app/components/LoadingScreen/LoadingScreen";
import { useGetData } from '../../context/GetDataContext';

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
interface Props {};
const Transaction: React.FC<Props>=({ })=>{
    const { pageLoading } = useGetData();
    const [transactions, setTransactions] = useState<Transaction[]>(userData.users[0].transactions);
    const [splitArrays, setSplitArrays] = useState<any[] | undefined>();
    const [spliteCount, setSpliteCount] = useState<number>(0);
    const [applyActive, setApplyActive] = useState(false);
    const [filteredArray, setFilteredArray] = useState<Transaction[]>([]);
    const [rangeArrayNothing, setRangeArrayNothing] = useState<boolean>(false);
    const [transactionType, setTransactionType] = useState('all');
    const [startDate, setStartDate] = useState<any>(new Date());
    const [endDate, setEndDate] = useState<any>(new Date());
    const navigate = useRouter();
 
    const formatDate1 = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
      
        return `${year}-${month}-${day}`;
    };
    const filterByDateRange = (data: any, startDateString: any, stopDateString: any) => {
        const startDate = new Date(startDateString);
        const stopDate = new Date(stopDateString);
      
        return data.filter((item: any) => {
          if (!item.hasOwnProperty('date')) {
            console.warn(`Item missing 'date' property:`, item);
            return false;
          };
      
          // Parse item date into a Date object
          const itemDateString = item.date;
          const itemDate = new Date(itemDateString);
      
          return itemDate >= stopDate && itemDate <= startDate;
        });
    };
    const applyFilter =()=>{
        setApplyActive(true)
        setRangeArrayNothing(false)

        if(startDate && endDate){
            const startDateString = formatDate1(startDate);
            const endDateString = formatDate1(endDate);
            var rangeArray: any[] = [];
            
            rangeArray = filterByDateRange(transactions, endDateString, startDateString);
          if(transactionType != 'all'){
                setFilteredArray(rangeArray.filter((item: any) => item.type == transactionType))
                console.log('rangeArray', rangeArray)
            }else{
                setFilteredArray(rangeArray)
            };
            
        }else{
            if(transactionType === 'all'){
                setFilteredArray(userData.users[0].transactions)
            }else if(transactionType === 'credit'){
                setFilteredArray(userData.users[0].transactions.filter(item => item.type === 'credit'))
            }else if(transactionType === 'debit'){
                setFilteredArray(userData.users[0].transactions.filter(item => item.type === 'debit'))
            };
        };
    };
    const resetFunction = () => {
        setRangeArrayNothing(false)
        setApplyActive(false)
        setFilteredArray([])
        setStartDate(new Date())
        setEndDate(new Date())
        setTransactions(userData.users[0].transactions)
    };
    const splitNext =()=>{
        if(spliteCount + 1 < splitArrays!.length){
            setSpliteCount(spliteCount + 1)
        }else{
            setSpliteCount(0)
        };
    };
    const splitPrev =()=>{
        if(spliteCount + 1 > 1){
            setSpliteCount(spliteCount - 1)
        }else{
            setSpliteCount(splitArrays!.length - 1)
        };
    };
    const handleGoBack = () => {
        navigate.back();
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
                    setSplitArrays(chunks);
                };
            };
    }, [applyActive, filteredArray]);
    
    return (
        <>
            {
                pageLoading
                ?
                    <LoadingScreen/>
                :
                    <>
                        <Sidebar namefromApp="transaction-history" />
                        <main id="content">
                            <Appbar />

                            <section className="container">

                                <div className="transaction-back">
                                    <button className="transaction-back-btn" onClick={handleGoBack}>
                                        <img src="/imgs/angle.svg" alt="" />
                                        <span>Back</span>
                                    </button>
                                </div>

                                <div style={{paddingTop: '3rem'}}>
                                    <h1 className="tranfer-title-text">Transactions</h1>
                                    <p className="tranfer-lead-text">See all transaction history</p>


                                    <div className="custom-tabs" style={{marginTop: '3rem', width: '100%'}}>
                                        <ul role="tablist">
                                            <li role="tab"><span id="invest-option-1" className="active">Transfers</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div style={{margin: '32px 0'}}>
                                        <div className="transaction-form">
                                            <div style={{ marginBottom: '1rem', marginRight: '0.6rem' }}>
                                                <label style={{display: 'block', color: '#000', fontSize: '12px', fontWeight: '600', marginBottom: '0.3rem'}}>Transaction Type</label>
                                                <select className="react-select__control css-ismsy3-control" onClick={(e)=> setTransactionType(e.currentTarget.value)}>
                                                    <option value='all'>All types</option>
                                                    <option value="credit">Credit only</option>
                                                    <option value="debit">Debit only</option>
                                                </select>
                                            </div>

                                            <div style={{ marginBottom: '1rem', marginRight: '0.6rem' }}>
                                                <label style={{display: 'block', color: '#000', fontSize: '12px', fontWeight: '600', marginBottom: '0.3rem'}}>Start Date</label>
                                                <DatePicker 
                                                    selected={startDate} 
                                                    onChange={(date) => setStartDate(date)} 
                                                    className="react-select__control css-ismsy3-control"
                                                />
                                            </div>

                                            <div style={{ marginBottom: '1rem', marginRight: '0.6rem' }}>
                                                <label style={{display: 'block', color: '#000', fontSize: '12px', fontWeight: '600', marginBottom: '0.3rem'}}>End Date</label>
                                                <DatePicker 
                                                    selected={endDate} 
                                                    onChange={(date) => setEndDate(date)} 
                                                    className="react-select__control css-ismsy3-control"
                                                />
                                            </div>


                                            <div style={{ marginBottom: '1rem', marginRight: '0.6rem' }}>
                                                <label style={{display: 'block', color: '#000', fontSize: '12px', fontWeight: '600', marginBottom: '0.3rem'}}>&nbsp;</label>
                                                <button className="btn transaction-button" style={{textTransform: 'uppercase'}} onClick={()=>applyFilter()}>Apply</button>
                                            </div>

                                            {
                                                applyActive
                                                ?
                                                <div style={{ marginBottom: '1rem' }} onClick={resetFunction}>
                                                    <label style={{display: 'block', color: '#000', fontSize: '12px', fontWeight: '600', marginBottom: '0.3rem'}}>&nbsp;</label>
                                                    <button className="btn transaction-button-reset" style={{textTransform: 'uppercase'}}>Reset</button>
                                                </div>
                                                :
                                                null
                                            }


                                        </div>
                                    </div>
                                </div>

                                <TransactionHistoryTable 
                                    transactions={transactions} 
                                    splitArrays={splitArrays} 
                                    setSplitArrays={setSplitArrays} 
                                    spliteCount={spliteCount} 
                                    applyActive={applyActive} 
                                    filteredArray={filteredArray} 
                                    rangeArrayNothing={rangeArrayNothing} 
                                    setRangeArrayNothing={setRangeArrayNothing}/>

                                <div className="container transaction-customPagination">
                                    <ul className="transaction-pagination">
                                        <li className="transaction-transaction-page-item">
                                            <a className="transaction-page-link notactive" style={{cursor: 'pointer'}} onClick={()=> splitPrev()}>Prev</a>
                                        </li>
                                        {
                                            splitArrays
                                            ?
                                            splitArrays.map((item: any, index: number) =>{
                                                return (
                                                    <li className={`${index === spliteCount ? "transaction-page-item active" : "transaction-page-item"}`}>
                                                        <a className="transaction-page-link" style={{cursor: 'pointer'}} onClick={()=> setSpliteCount(index)}>{index + 1}</a>
                                                    </li>
                                                )
                                            })
                                            :
                                            null
                                        }
                                        <li className="transaction-page-item notactive">
                                            <a className="transaction-page-link" style={{cursor: 'pointer'}} onClick={()=> splitNext()}>Next</a>
                                        </li>
                                    </ul>
                                </div>


                            </section>

                        </main>

                        <TransactionDetailPopup/>
                    </>
            }
        </>
        
      
    )
};

export default Transaction;