import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/common/logo.svg';
import menuIcon from '../../assets/common/sidebar-icon.svg';

function Header(props) {
  const { isMobile } = props;

  return (
    <>
      <div className={`${isMobile ? 'mobile-header' : 'header'} d-flex align-items-center justify-content-between`}>
        {isMobile && <img className="menu-icon" src={menuIcon} alt="menu" />}
        <span>
          {isMobile ? 'PHC Systems Map' : 'Personalised Healthcare-Enabled Patient Journey'}
        </span>
        <img className="logo" src={logo} alt="logo" />
      </div>
    </>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool,
};

Header.defaultProps = {
  isMobile: false,
};

export default Header;
