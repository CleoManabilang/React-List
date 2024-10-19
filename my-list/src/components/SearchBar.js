// SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for an item"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
