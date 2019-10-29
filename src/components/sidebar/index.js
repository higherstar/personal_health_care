import React from 'react';
import PropTypes from 'prop-types';

import SearchButton from '../../atoms/SearchButton';
import NavMenu from '../../atoms/NavMenu';

function SideBar(props) {
  const { collapsed, navOptions } = props;

  const sideBarStyle = {
    width: collapsed ? '93px' : '318px',
    background: collapsed ? 'white' : '#FFFFFFAD',
  };

  const footerStyle = {
    height: collapsed ? '0' : '95px',
    borderTop: collapsed ? 'none' : '5px solid #71C6FF',
  };

  const dotStyle = {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '36px',
    borderRadius: '10px',
    cursor: 'pointer',
    zIndex: 2,
  };

  const navMenuStyle = {
    width: '100%',
    position: 'absolute',
  };

  const handleMenuClick = (key) => {
    console.log(key);
  };

  return (
    <div className="side-bar" style={sideBarStyle}>
      <div className="side-bar-left-band" />
      <div className="side-bar-header" />
      <div className="side-bar-content">
        <SearchButton className="search-button" collapsed={collapsed} />
        <div className="side-bar-nav-dots">
          {navOptions.map((option) => (
            <div key={`nav_${option.id}`}>
              <div
                className="nav-dot"
                style={{ ...dotStyle, top: `${option.top}px`, background: option.active ? '#0066CC' : '#71C6FF' }}
              />
              <div className="nav-menu" style={{ ...navMenuStyle, top: `${option.top - 10}px` }}>
                <NavMenu
                  link={option.link}
                  active={option.active}
                  title={option.title}
                  subMenus={option.subMenus}
                  handleMenuClick={handleMenuClick}
                  index={option.id}
                  collapsed={collapsed}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="side-bar-footer" style={footerStyle} />
    </div>
  );
}

SideBar.propTypes = {
  collapsed: PropTypes.bool,
  navOptions: PropTypes.array.isRequired,
};

SideBar.defaultProps = {
  collapsed: false,
};

export default SideBar;
