import { Table } from 'antd';
import React, { useState } from 'react';

const MemberTable = ({isLoading, dataSource}) => {
  const [tableParams, setTableParams] = useState({
    pagination: { current: 1, pageSize: 10, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 30] },
  });

  const handleOnChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra);
    setTableParams({ pagination });
  };

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
        : <Table columns={columns} dataSource={dataSource} pagination={tableParams.pagination} rowKey="id" onChange={handleOnChange}/>
    }
  </>

}

export default MemberTable;