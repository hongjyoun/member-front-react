import React, { useEffect, useMemo, useState } from 'react';
import { useGetBySearchParams } from '@/api/member';
import MemberFilter from '@/components/filter/MemberFilter';
import MemberTable from '@/components/table/MemberTable';
import Title from '@/components/text/Title';
import { Pagination } from 'antd';
import TextAsyncAwaitModal from '@/components/modal/TestAsyncAwaitModal';


const Tables = () => {
  const [inputs, setInputs] = useState({ name: '', age: '', email: '', nickname: '' });
  const [params, setParams] = useState({ name: '', age: '', email: '', nickname: '' });
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 30] });

  const { data, isLoading, refetch } = useGetBySearchParams({
    nameOrId: params.name,
    centerId: 29,
    size: pagination.pageSize,
    page: (pagination.current - 1)
  });
  const dataSource = data ? data.data : [];
  const dataTotal = data ? data.headers['x-total-count'] : 0;

  const handleInputs = (value) => setInputs(value);
  const handleSearch = () => setParams(inputs);
  const handlePagination = (page, size) => {
    const changedPagination = { ...pagination, current: page, pageSize: size }
    setPagination(changedPagination);
  };

  useEffect(() => { refetch() }, [pagination]);

  return (
    <>
      <Title title="Tables 연습" />
      <TextAsyncAwaitModal />
      <MemberFilter isLoading={isLoading} name={inputs.name} onChange={handleInputs} onSearch={handleSearch} />
      <MemberTable isLoading={isLoading} dataSource={dataSource} pagination={pagination} setPagination={setPagination} dataTotal={dataTotal} refetch={refetch}/>
      <Pagination total={dataTotal} onChange={handlePagination}/>
    </>
  );
};

export default Tables;