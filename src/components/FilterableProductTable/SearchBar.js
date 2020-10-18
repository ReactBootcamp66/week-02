import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default SearchBar;
