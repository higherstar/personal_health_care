import React from 'react';
import logo from '../../assets/common/logo.png';

function Header() {
  return (
    <div className="header d-flex align-items-center">
      <span>PERSONALISED HEALTHCARE SYSTEMS MAP</span>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
