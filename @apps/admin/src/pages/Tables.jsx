import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import MemberService from '@/api/member';
import Button from '@mui/material/Button';
import KeycloakService from "@/module/keycloak"
// import { useGetBySearchParams } from '@/api/member';

const Tables = () => {
    // const {data, isLoading} = useGetBySearchParams();

    // console.log(data);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const memberService = new MemberService();
            const result = await memberService.getBySearchParams();
            console.log(result);
            setData(result);
        };
        fetchData();
    }, [])

    const authService = new KeycloakService()
    console.log('authService', authService)
    const onclickLogin = () => { authService.login() }
    const onclickLogout = async() => { await authService.logout() }

    
    return (
        <Layout>
            <Button onClick={onclickLogin}>로그인</Button>
            <h1>Tables</h1>
        </Layout>
    );
}

export default Tables;