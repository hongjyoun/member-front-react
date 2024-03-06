import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { useGetBySearchParams } from '@/api/member';

const Tables = () => {
    const {data, isLoading} = useGetBySearchParams();
    
    useEffect(() => {
        console.log(data, isLoading);
    }, [data, isLoading]);

    return (
        <Layout>
            <h1>Tables</h1>
        </Layout>
    );
}

export default Tables;