import Block from '@/components/layout/Block';
import MemberFilter from '@/components/filter/MemberFilter';
import Subtitle from '@/components/common/text/Subtitle';
import { useGetBySearchParams } from '@/api/member';
import { useState } from 'react';
import { Table } from 'antd';

const SearchMembers = () => {
  const [filterState, setFilterState] = useState(null);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const { data, isLoading, error } = useGetBySearchParams(filterState, isSearchClicked);

  const columns = [
    { title: 'Name', dataIndex: 'nameOrId', key: 'nameOrId' },
    { title: 'Birthday', dataIndex: 'birthday', key: 'birthday' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
  ];

  const handleSearch = (newFilterState) => {
    setFilterState(newFilterState);
    setIsSearchClicked(true);
  };

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
    <Block>
      <Subtitle>Search Members</Subtitle>
    </Block>
    <Block>
      <MemberFilter onSearch={handleSearch} isLoading={isLoading}/>
    </Block>
    <Block>
      <Table dataSource={data ? data : []} columns={columns} rowKey="id" />
    </Block>
    </>
  );
}

export default SearchMembers;