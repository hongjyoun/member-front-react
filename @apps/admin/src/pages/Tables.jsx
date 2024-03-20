import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { useGetBySearchParams } from '@/api/member';
import NameInput from '@/components/common/NameInput';

const Tables = () => {
  const [ name, setName ] = useState('');
  const [tableParams, setTableParams] = useState({
    pagination: { current: 1, pageSize: 10, showSizeChanger: true, pageSizeOptions: [5,10,20,30] },
  });
  const { data, isLoading } = useGetBySearchParams();

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'firstName', key: 'name' },
    { title: '센터', dataIndex: 'center', key: 'center', render: (center) => <div>{center?.name}</div> },
    { title: '현재과정', dataIndex: 'levelProgress', key: 'level', render: (lp) => <div>{lp?.level?.name}</div> },
  ];

  const dataSource = data ? data.data : [];



  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleOnChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra);
    setTableParams({ pagination });
  }

  return (
    <>
      <h1>Tables</h1>
      <span>{name}</span>
      <NameInput placeholder="이름을 입력하세요" name={name} setName={handleName}/>
      { isLoading
          ? <div>로딩중...</div>
          : <Table columns={columns} dataSource={dataSource} pagination={tableParams.pagination} rowKey="id" onChange={handleOnChange}/>

      }
    </>
  );
};

export default Tables;