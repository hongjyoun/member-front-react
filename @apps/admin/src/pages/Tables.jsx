import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import AppLayout from '@/components/layout/AppLayout';
import { useGetBySearchParams } from '@/api/member';

const Tables = () => {
    const {data, isLoading} = useGetBySearchParams();
    console.log(data ? data.data : "no data");

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'firstName',
            render: (firstName) => <a>{firstName}</a>,
        },
        {
            title: '센터',
            dataIndex: 'center',
            render: (center) => <a>{center?.name}</a>,
        },
        {
            title: '현재과정',
            dataIndex: 'levelProgress',
            render: (lp) => <a>{lp?.level?.name}</a>,
        },

    ];

    const rows = data ? data.data : []

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 20,
        },
    });

    return (
        <AppLayout>
            <h1>Tables</h1>
            <Table columns={columns} dataSource={rows} pagination={tableParams.pagination}/>;
        </AppLayout>
    );
}

export default Tables;