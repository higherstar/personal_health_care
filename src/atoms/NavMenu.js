import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import navIcon from '../assets/atoms/nav-icon.svg';

function NavMenu(props) {
  const {
    link,
    index,
    className,
    title,
    subMenus,
    subMenuLinks,
    active,
    activeSubMenu,
    collapsed,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const handleTitleClick = () => {
    setExpanded(!expanded);
  };

  const contentStyle = {
    width: '100%',
    height: collapsed ? 0 : `${subMenus.length * 50 + 40}px`,
    background: active ? 'white' : 'transparent',
    paddingLeft: '70px',
    transition: '0.3s all ease',
  };

  const listTitleStyle = {
    height: '40px',
    fontSize: collapsed ? 0 : '18px',
    fontFamily: 'Imago',
    fontWeight: active ? 'bold' : 'normal',
    cursor: 'pointer',
    transition: '0.3s all ease',
    color: 'black',
    textDecoration: 'none',
  };

  const subMenuStyle = (index) => ({
    height: collapsed ? 0 : '50px',
    padding: '10px',
    fontSize: collapsed ? 0 : '18px',
    cursor: 'pointer',
    border: collapsed && 0,
    borderBottom: index === subMenus.length - 1 ? 0 : '1px solid #EEEEEE',
    transition: '0.3s all ease',
    fontWeight: activeSubMenu === index ? 'bold' : 'normal',
    color: 'black',
    textDecoration: 'none',
  });


  const navIconStyle = (link) => {
    let isExpandable = false;
    if (link.includes('/phc/future-patient-journey') || link.includes('/phc/systems-enablers')) {
      isExpandable = true;
    }
    if (link.includes('value-based-healthcare')) {
      isExpandable = false;
    }

    return {
      display: (!isExpandable || collapsed) && 'none',
      width: '22px',
      height: '22px',
      position: 'absolute',
      right: '5px',
      cursor: 'pointer',
    };
  };

  return (
    <div className={`${className}`} style={contentStyle} key={`menu_${index}`}>
      <Link
        to={link}
        className="d-flex align-items-center nav-menu-title"
        style={listTitleStyle}
        onClick={handleTitleClick}
      >
        <span>{title}</span>
      </Link>
      <div>
        {subMenus.map((subMenu, index) => (
          <Link
            to={subMenuLinks[index]}
            key={subMenu.replace(/\s/g, '')}
            style={subMenuStyle(index)}
            className="d-flex align-items-center nav-submenu"
          >
            <span style={{ width: '220px', lineHeight: '18px' }}>{subMenu}</span>
            <img src={navIcon} alt="nav icon" style={navIconStyle(subMenuLinks[index])} />
          </Link>
        ))}
      </div>
    </div>
  );
}

NavMenu.propTypes = {
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subMenus: PropTypes.array.isRequired,
  subMenuLinks: PropTypes.array,
  active: PropTypes.bool.isRequired,
  activeSubMenu: PropTypes.number,
  collapsed: PropTypes.bool.isRequired,
};

NavMenu.defaultProps = {
  className: 'nav-menu',
  subMenuLinks: [],
  activeSubMenu: -1,
};

export default NavMenu;
