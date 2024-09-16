"use client";
import React, { useState } from "react";
import userData from "../../data/user.json";
import { Grid } from "@mui/material";
import * as DASHBOARDROUTES from "../../constants/routes";
import ReactApexChart from "react-apexcharts";

interface Props {};
const DashBoardContainer2: React.FC<Props>=({})=> {

  const [userTransactions, setUserTransactions] = useState(userData.users[0].transaction.slice(0, 5));


  const [series, useSeries] = useState<any>([{
    name: 'Incomes',
    type: 'area',
    data: [231847, 489125, 307592, 521460, 182309, 415736]
  }, {
    name: 'Expenses',
    type: 'line',
    data: [567034, 215471, 403808, 391145, 514273, 248610]
  }]);
  const [options, useOptions] = useState<any>({
    // colors: ['#d1a23c', '#231f20', '#9C27B0'],
    colors: ['#d1a23c', '#231f20', '#9C27B0'],

    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type:'solid',
      opacity: [0.35, 1],
    },
    labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
    markers: {
      size: 0
    },
    // yaxis: [
    //   {
    //     title: {
    //       text: 'Series A',
    //     },
    //   },
    //   {
    //     opposite: true,
    //     title: {
    //       text: 'Series B',
    //     },
    //   },
    // ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: any) {
          if(typeof y !== "undefined") {
            return  y.toFixed(0) + " points";
          }
          return y;
        }
      }
    }
  });

  const handleTopupOpen =()=>{
    const sidebarEl = document.getElementById('sidebar-wrapper-receive-funds');
    sidebarEl?.classList.add('show');
  };


  return (

    <div className="container" style={{marginTop: '1rem'}}>
        <Grid container style={{justifyContent: 'space-between'}}>
            <Grid item xs={12} lg={4.85} style={{marginBottom: '22px'}}>


                <div>
                    <div className="transactions-card-header">
                        <h4 className="sub-heading">Latest Transactions</h4>
                        <div className="col-5">
                            <a className="btn btn-mint-default" href={DASHBOARDROUTES.TRANSACTION_HISTORY}>View all</a>
                        </div>
                    </div>
                    
                    <div className="transcations-card h-100">
                        <table className="table transcation-table mb-0 lt-table">
                            <tbody>

                                {
                                    userTransactions.map(item => {
                                        return (
                                            <tr>
                                                <td>
                                                    <div className="trans-dsc">
                                                        <p>{item.human.length > 33 ? item.human.slice(0, 33 - 3) + "..." : item.human}</p>
                                                        <span>{item.date}, {item.time}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={`trans-res ${item.type === 'credit' ? 'profit' : 'loss'}`}>{item.amount}</div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </Grid>

            <Grid item xs={12} lg={6.85} style={{marginBottom: '22px'}}>


                <div className="head-wyx income-expenses-card-header row align-items-center pl-3 pt-4">
                    <h4 className="sub-heading">Income &amp; expenses chart</h4>
                </div>

                <div className="shun mt-0">
                    <div className="row">
                        <div className="mixed-chart">
                            <ReactApexChart options={options} series={series} type="line" height={350} />
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid> 
    </div>
  
  );
};

export default DashBoardContainer2