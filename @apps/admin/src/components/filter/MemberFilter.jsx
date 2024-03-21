import React, { useState } from 'react';
import NameInput from '@/components/common/NameInput';
import { Button } from 'antd';

const MemberFilter = ({ isLoading, refetch, onChange, name }) => {
  const onClickSearch = async () => await refetch();
  const handleName = (value) => onChange(value);

  return <>
    <div style={{ display: 'flex' }}>
      <NameInput placeholder="이름을 입력하세요" name={name} setName={handleName} isLoading={isLoading}/>
      <Button type="primary" onClick={onClickSearch}>검색</Button>
    </div>
  </>
}

export default MemberFilter;