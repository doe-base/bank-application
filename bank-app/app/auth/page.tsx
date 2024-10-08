"use client"
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useGetData } from '../context/GetDataContext';

interface Props {};
const LoginAuth: React.FC<Props>=({})=>{

    const { setDashBoardData, setPageLoading } = useGetData();
    const router = useRouter();

    const tokenParam = useSearchParams();
    const stringToken = tokenParam.toString().slice(6);

    const getSessionCookie = () =>{
        localStorage.setItem('session-token', stringToken);
        const url = process.env.NEXT_PUBLIC_GET_SESSION_COOKIE || '';
        const bashboardRedirect = process.env.NEXT_PUBLIC_APP_DOMAIN || '';
        const homepageRedirect = `${process.env.NEXT_PUBLIC_APP_DOMAIN}/auth/authentication-failed` || '';
        
        const newFormData = new FormData;
        newFormData.append('sessionToken', stringToken);
        axios.post(url, newFormData, {withCredentials: true})
        .then(response => {
            setDashBoardData(response.data)
            setPageLoading(false)
            router.push(bashboardRedirect)
        })
        .catch(error => {
            window.localStorage.removeItem('session-token');
            router.push(homepageRedirect);
        });
    };

    useEffect(()=>{
        getSessionCookie();
    });

    return (
      <div>authenticating session...</div>
    )
};

export default LoginAuth;