import React, { useReducer, useState } from 'react';
import { Button } from 'antd';
import LabeledTextInput from '@/components/common/input/LabeledTextInput';
import './MemberFilter.less';

const filterNames = ['nameOrId', 'birthday', 'fromAge', 'toAge', 'gender'];

const initialFilterState = {
  nameOrId: '',
  birthday: '',
  fromAge: '',
  toAge: '',
  gender: '',
}

const MemberFilter = ({ isLoading, onSearch }) => {
  const [filterState, setFilterState] = useState(initialFilterState);
  const handleInputChange = (e) => {
    setFilterState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const onClickSearch = () => {
    if(onSearch) onSearch(filterState);
  };

  return <>
    <div className="member-filter">
      {filterNames.map(filterName => (
        <LabeledTextInput
          key={filterName}
          label={filterName}
          placeholder={filterName}
          onChange={handleInputChange}
          isLoading={isLoading}
        />
      ))}
      <Button type="primary" onClick={() => onClickSearch()}>검색</Button>
    </div>
  </>
}

export default MemberFilter;