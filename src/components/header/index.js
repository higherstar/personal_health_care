import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/common/logo.svg';
import menuIcon from '../../assets/common/sidebar-icon.svg';

function Header(props) {
  const { isMobile, handleMenuClick } = props;

  return (
    <>
      <div
        className={`${isMobile ? 'mobile-header' : 'header'} d-flex align-items-center justify-content-between`}
      >
        {isMobile && <img className="menu-icon" src={menuIcon} alt="menu" onClick={handleMenuClick} />}
        <Link to="/phc/welcome">
          <span>
            {isMobile ? 'PHC Systems Map' : 'Personalised Healthcare-Enabled Patient Journey'}
          </span>
        </Link>
        <Link to="/phc/welcome">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
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
