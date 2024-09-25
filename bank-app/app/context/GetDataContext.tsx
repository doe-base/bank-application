'use client'
import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


interface UserDashBoardData {
    email: string;
    firstname: string;
    lastname: string;
    middlename: string;
    accountnumber: number;
    balance: number;
    hidebalance: boolean;
    accounttype: string;
    message: string;
    messagecode: number;

    phonenumber: string;
    gender: string;
    dateofbirth: string;
    bvn: string;

}
interface UserProviderProps {
    children: ReactNode;
}
interface ContextProps {
    dashboardData: UserDashBoardData; 
    pageLoading: boolean;
    setPageLoading: any;
    setDashBoardData: any;
}

const GetDataContext = createContext<ContextProps | undefined>(undefined);


export function GetDataProvider({ children }: UserProviderProps) {
    const router = useRouter();
    const [dashboardData, setDashBoardData] = useState<UserDashBoardData>({
      email: '', 
      firstname: '', 
      lastname: '', 
      middlename: '', 
      accountnumber: 0, 
      balance: 0, 
      hidebalance: false, 
      accounttype: '', 
      message: '', 
      messagecode: 0, 
      phonenumber: '', 
      gender: '', 
      dateofbirth: '', 
      bvn: ''});
      const [pageLoading, setPageLoading] = useState(true);


    const getDashBoradData = () => {
        const sessionToken = JSON.stringify(localStorage.getItem("session-token"));
        const url = process.env.NEXT_PUBLIC_GET_DASHBOARD_DATA || "";
        const homepageRedirect =
          `${process.env.NEXT_PUBLIC_APP_DOMAIN}/auth/authentication-failed` || "";
    
        const newFormData = new FormData();
        newFormData.append("token", sessionToken);
    
        axios
          .post(url, newFormData, { withCredentials: true })
          .then((response) => {
            setDashBoardData(response.data);
            setPageLoading(false);
          })
          .catch((error) => {
            router.push(homepageRedirect);
            setPageLoading(false);

          });
      };

      useEffect(() => {
        getDashBoradData(); 
      }, []);

    return(
        <GetDataContext.Provider value={{dashboardData, pageLoading, setPageLoading, setDashBoardData}}>
            {children}
        </GetDataContext.Provider>
    )
};

export function useGetData() {
    const context = useContext(GetDataContext);

    if (!context) {
        throw new Error('Empty data context');
    }
    return context;
};