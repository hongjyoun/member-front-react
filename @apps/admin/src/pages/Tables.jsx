import React, { useState } from 'react';
import { useGetBySearchParams } from '@/api/member';
import MemberFilter from '@/components/filter/MemberFilter';
import MemberTable from '@/components/table/MemberTable';
import Title from '@/components/text/Title';

const Tables = () => {
  const [name, setName] = useState('');
  const { data, isLoading, refetch } = useGetBySearchParams({ nameOrId: name, centerId: 29 });
  const dataSource = data ? data.data : [];

  const handleName = (value) => setName(value);

  return (
    <>
      <Title title="Tables 연습" />
      <MemberFilter isLoading={isLoading} refetch={refetch} onChange={handleName} />
      <MemberTable isLoading={isLoading} dataSource={dataSource} />
    </>
  );
};

export default Tables;