import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchButton from '../../atoms/SearchButton';
import NavMenu from '../../atoms/NavMenu';

function SideBar(props) {
  const { collapsed, navOptions } = props;

  const sideBarBackground = navOptions[0].level === 3 ? 'transparent' : '#FFFFFFAD';
  const sideBarStyle = {
    width: collapsed ? '93px' : '318px',
    background: collapsed ? 'white' : sideBarBackground,
  };

  const footerStyle = {
    height: collapsed ? 0 : '95px',
    borderTop: collapsed ? 'none' : '5px solid #71C6FF',
    fontSize: collapsed ? 0 : '13px',
  };

  const defaultTop = [100, 140, 180, 220, 260, 300, 340];
  const defaultDotStyle = (top, index) => ({
    width: '20px',
    height: '20px',
    background: navOptions[0].activeMenu === index ? '#0066CC' : '#71C6FF',
    position: 'absolute',
    top: `${top}px`,
    left: '36px',
    borderRadius: '10px',
    cursor: 'pointer',
    zIndex: 2,
    transition: '0.3s all ease',
  });
  const dotStyle = (option) => {
    const activeIndex = navOptions.findIndex((option) => option.active === true);
    let { top } = option;
    if (!collapsed && option.id > activeIndex) {
      top += navOptions[activeIndex].subMenus.length * 50;
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
      transition: '0.3s all ease',
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
    width: collapsed ? 0 : '230px',
    height: '100%',
    background: '#FFFFFFAD',
    position: 'absolute',
    fontSize: collapsed ? 0 : '18px',
    top: 0,
    right: 0,
  };

  const subMenuItemStyle = (option) => ({
    background: option.active && 'white',
    fontWeight: option.active && 'bold',
  });

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
          {navOptions[0].level === 3 && (
            <>
              {!collapsed && (<div className="side-bar-submenu-left" />)}
              <div className="side-bar-submenu" style={subMenuStyle}>
                <div className="d-flex align-items-center flex-column side-bar-submenu-title-wrapper">
                  <Link
                    to={navOptions[0].parentLink}
                    className="side-bar-submenu-title"
                  >
                    {navOptions[0].parentTitle}
                  </Link>
                </div>
                {navOptions.map((option, index) => (
                  <div
                    key={`submenu_level_3_${index}`}
                    className="d-flex align-items-center submenu-item-wrapper"
                    style={subMenuItemStyle(option)}
                  >
                    <Link to={option.link} className="submenu-item">
                      {option.title}
                    </Link>
                  </div>
                ))}
              </div>
              {defaultTop.map((top, index) => (
                <div
                  key={`dot_top_${top}`}
                  className="nav-dot"
                  style={defaultDotStyle(top, index)}
                />
              ))}
            </>
          )}

          {navOptions.map((option) => (
            <div key={`nav_${option.id}`}>
              {navOptions[0].level !== 3 && (
                <>
                  <div
                    className="nav-dot"
                    style={dotStyle(option)}
                  />
                  <div className="nav-menu" style={navMenuStyle(option)}>
                    <NavMenu
                      link={option.link}
                      active={option.active}
                      activeSubMenu={option.activeSubMenu}
                      title={option.title}
                      subMenus={option.subMenus}
                      subMenuLinks={option.subMenuLinks}
                      navOptions={navOptions}
                      handleMenuClick={handleMenuClick}
                      index={option.id}
                      collapsed={collapsed}
                    />
                  </div>
                </>
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
