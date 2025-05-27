"use client";
import React, { useEffect } from "react";
import DashBoardContainer from "./containers/Dashboard";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { useGetData } from './context/GetDataContext';


interface Props {}
const DashBoard: React.FC<Props> = ({}) => {
  const { dashboardData, pageLoading } = useGetData();
  const {
    firstname,
    lastname,
    accountnumber,
    balance,
    hidebalance,
    message,
  } = dashboardData;


  useEffect(() => {
    document.title = `Dashboard | ${firstname ? `${firstname} ${lastname}` : ''}`;
  }, [dashboardData]);


  return (
    <>
      {pageLoading ? (
        <LoadingScreen />
      ) : (
        <DashBoardContainer
          firstname={firstname}
          accountnumber={accountnumber}
          balance={balance}
          hidebalance={hidebalance}
          message={message}
        />
      )}
    </>
  );
};

export default DashBoard;
