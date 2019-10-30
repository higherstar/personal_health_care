import React from 'react';
import PropTypes from 'prop-types';

import SearchButton from '../../atoms/SearchButton';
import NavMenu from '../../atoms/NavMenu';

function SideBar(props) {
  const { collapsed, navOptions } = props;

  const sideBarBackground = navOptions[0].level === 3 ? '#D8D8D8' : '#FFFFFFAD';
  const sideBarStyle = {
    width: collapsed ? '93px' : '318px',
    background: collapsed ? 'white' : sideBarBackground,
  };

  const footerStyle = {
    height: collapsed ? 0 : '95px',
    borderTop: collapsed ? 'none' : '5px solid #71C6FF',
    fontSize: collapsed ? 0 : '13px',
  };

  const dotStyle = (option) => {
    const defaultTop = [100, 140, 180, 220, 260, 300];
    const activeIndex = navOptions.findIndex((option) => option.active === true);
    let { top } = option;
    if (navOptions[0].level !== 3 && option.id > activeIndex) {
      top += navOptions[activeIndex].subMenus.length * 50;
    }

    if (navOptions[0].level === 3) {
      top = defaultTop[option.id];
    }

    return {
      width: '20px',
      height: '20px',
      background: option.active ? '#0066CC' : '#71C6FF',
      position: 'absolute',
      top: `${top}px`,
      left: '36px',
      borderRadius: '10px',
      cursor: 'pointer',
      zIndex: 2,
    };
  };

  const navMenuStyle = (option) => {
    const activeIndex = navOptions.findIndex((option) => option.active === true);
    let top = option.top - 10;
    if (option.id > activeIndex) {
      top += navOptions[activeIndex].subMenus.length * 50;
    }

    return {
      width: '100%',
      position: 'absolute',
      top: `${top}px`,
    };
  };

  const subMenuStyle = {
    width: '200px',
    height: '100%',
    background: '#FFFFFFAD',
    position: 'absolute',
    top: 0,
    right: 0,
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
        <div className="side-bar-nav">
          {navOptions.map((option) => (
            <div key={`nav_${option.id}`}>
              <div
                className="nav-dot"
                style={dotStyle(option)}
              />
              {navOptions[0].level !== 3 ? (
                <div className="nav-menu" style={navMenuStyle(option)}>
                  <NavMenu
                    link={option.link}
                    active={option.active}
                    activeSubMenu={option.activeSubMenu || -1}
                    title={option.title}
                    subMenus={option.subMenus}
                    navOptions={navOptions}
                    handleMenuClick={handleMenuClick}
                    index={option.id}
                    collapsed={collapsed}
                  />
                </div>
              ) : (
                <div className="side-bar-submenu" style={subMenuStyle} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="side-bar-footer d-flex align-items-center justify-content-center" style={footerStyle}>
        <span>
          For Internal Use Only
          <br />
          &copy;2019 F.Hoffmann-La Roche Ltd
          <br />
          Last Updated October 2019
        </span>
      </div>
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
