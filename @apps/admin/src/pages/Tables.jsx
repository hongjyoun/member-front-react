import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { DataGrid } from '@mui/x-data-grid';
import { useGetBySearchParams } from '@/api/member';

const Tables = () => {
    const {data, isLoading} = useGetBySearchParams();
    console.log(data ? data.data : "no data");

    const columns = [
        { field: 'center', headerName: '센터', width: 150, valueGetter: (params) => `${params.row.center.name}` },
        { field: 'lastName', headerName: 'Last name', width: 130, sortable: false, description: 'This column has a value getter and is not sortable.'},
        { field: 'firstName', headerName: 'First name', width: 130, sortable: false, },
        { field: 'level', headerName: '현재과정', width: 130, sortable: false, valueGetter: (params) => `${params.row.levelProgress.level.name}`},
    ];

    const rows = data ? data.data : []

    return (
        <Layout>
            <h1>Tables</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { page: 0, pageSize: 10 }, },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Layout>
    );
}

export default Tables;