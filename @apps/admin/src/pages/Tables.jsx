import React, { useEffect, useMemo, useState } from 'react';
import { useGetBySearchParams } from '@/api/member';
import MemberFilter from '@/components/filter/MemberFilter';
import MemberTable from '@/components/table/MemberTable';
import Title from '@/components/text/Title';
import { Pagination, Button, Modal } from 'antd';
import { useModal } from '@/plugins/modal/useModal';


const HelloModal = ({ name, resolve, reject }) => {
  console.log('name', name);

  const handleOk = () => resolve('Bye!')
  const handleCancel = () => reject('Go away!')
  return (
    <Modal title="Basic Modal" open={true} onOk={handleOk} onCancel={handleCancel}>
      <p>Hello, {name} :)</p>
    </Modal>
  )
}

const Tables = () => {
  const modal = useModal()

  const [name, setName] = useState('');
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 30] });
  const params = useMemo(() => ({
    nameOrId: name,
    centerId: 29,
    size: pagination.pageSize,
    page: (pagination.current - 1)
  }), [name, pagination]);
  
  const { data, isLoading, refetch } = useGetBySearchParams(params);
  const dataSource = data ? data.data : [];
  const dataTotal = data ? data.headers['x-total-count'] : 0;

  const handleName = (value) => setName(value);

  const handlePagination = (page, size) => {
    const changedPagination = { ...pagination, current: page, pageSize: size }
    setPagination(changedPagination);
  };

  useEffect(() => {
    refetch();
  }, [pagination]);

  const openModal = async () => {
    const res = await modal.push('Modal1', HelloModal, { name: 'hong'})
    console.log('res: ', res)
    alert('See ya!')
  }

  return (
    <>
      <Title title="Tables 연습" />
      <Button type='primary' onClick={openModal}>모달을 띄워보자</Button>
      <MemberFilter isLoading={isLoading} refetch={refetch} onChange={handleName} />
      <MemberTable isLoading={isLoading} dataSource={dataSource} pagination={pagination} setPagination={setPagination} dataTotal={dataTotal} refetch={refetch}/>
      <Pagination total={dataTotal} onChange={handlePagination}/>
    </>
  );
};

export default Tables;