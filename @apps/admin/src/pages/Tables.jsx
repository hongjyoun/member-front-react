import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { useGetBySearchParams } from '@/api/member';
import NameInput from '@/components/common/NameInput';

const Tables = () => {
  const [ name, setName ] = useState('');
  const { data, isLoading } = useGetBySearchParams();
  console.log(data ? data.data : 'no data');

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'firstName', key: 'name', render: (firstName) => <a>{firstName}</a> },
    { title: '센터', dataIndex: 'center', key: 'center', render: (center) => <a>{center?.name}</a> },
    { title: '현재과정', dataIndex: 'levelProgress', key: 'level', render: (lp) => <a>{lp?.level?.name}</a> },
  ];

  const rows = data ? data.data : [];

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <>
      <h1>Tables</h1>
      <span>{name}</span>
      <NameInput placeholder="이름을 입력하세요" name={name} setName={handleName}/>
      <Table columns={columns} dataSource={rows} pagination={tableParams.pagination} rowKey="id"/>
    </>
  );
};

export default Tables;