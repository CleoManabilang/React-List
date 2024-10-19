// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Grocery List</h1>
    </header>
  );
};

const headerStyle = {
  background: '#9871f5',
  color: 'black',
  padding: '10px',
  textAlign: 'center',
};

export default Header;
