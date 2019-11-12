import React from 'react';
import logo from '../../assets/common/logo.svg';

function Header() {
  return (
    <div className="header d-flex align-items-center">
      <span>Personalised Healthcare-Enabled Patient Journey</span>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
