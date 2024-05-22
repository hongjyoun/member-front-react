import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchBar.less';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search files"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;