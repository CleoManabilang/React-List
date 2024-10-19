// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Grocery List App</p>
    </footer>
  );
};

const footerStyle = {
  background: '#9871f5',
  color: 'Black',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export default Footer;
