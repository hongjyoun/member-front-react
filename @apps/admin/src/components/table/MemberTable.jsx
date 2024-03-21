import { Table, Pagination  } from 'antd';
import React, { useState } from 'react';

const MemberTable = ({isLoading, dataSource, pagination, setPagination, dataTotal, refetch}) => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '성', dataIndex: 'lastName', key: 'lastName' },
    { title: '이름', dataIndex: 'firstName', key: 'firstName' },
    { title: '센터', dataIndex: 'center', key: 'center', render: (center) => <div>{center?.name}</div> },
    { title: '현재과정', dataIndex: 'levelProgress', key: 'level', render: (lp) => <div>{lp?.level?.name}</div> },
  ];

  return <>
    {
      isLoading
        ? <div>로딩중...</div>
        : <Table columns={columns} dataSource={dataSource} pagination={pagination} rowKey="id" />
    }
  </>

}

export default MemberTable;