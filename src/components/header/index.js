import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/common/logo.svg';
import menuIcon from '../../assets/common/sidebar-icon.svg';

function Header(props) {
  const { isMobile, handleMenuClick } = props;

  return (
    <>
      <Link
        className={`${isMobile ? 'mobile-header' : 'header'} d-flex align-items-center justify-content-between`}
        to="/phc/welcome"
      >
        {isMobile && <img className="menu-icon" src={menuIcon} alt="menu" onClick={handleMenuClick} />}
        <span>
          {isMobile ? 'PHC Systems Map' : 'Personalised Healthcare-Enabled Patient Journey'}
        </span>
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool,
  handleMenuClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobile: false,
};

export default Header;
