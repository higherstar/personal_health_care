
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import SearchButton from '../../atoms/SearchButton';
import NavMenu from '../../atoms/NavMenu';
import navIcon from '../../assets/atoms/arrow-right-blue.svg';
import SearchResult from './SearchResult';
import searchData from './search';

const backgroundColor = (color) => {
  switch (color) {
    case 'blue':
      return '#0066CC';
    case 'yellow':
      return '#ED8B00';
    default:
      return '#0066CC';
  }
};

function SideBar(props) {
  const {
    collapsed,
    isMobile,
    navOptions,
    color,
    handleMenuClick,
  } = props;

  const [state, setState] = useState(false);
  const [link, setLink] = useState('');
  const [expand, setExpand] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleDotClick = (option) => () => {
    if (option.active) {
      setExpand(!expand);
      return;
    }

    setLink(option.link);
    setState(true);
  };

  if (state) {
    return <Redirect exact to={link} />;
  }

  const goBackToMenu = (link) => () => {
    setLink(link);
    setState(true);
  };

  let sideBarBackground = navOptions[0].level === 3 ? 'transparent' : '#FFFFFFAD';
  if (isMobile) {
    sideBarBackground = '#ffffffd6';
    if (navOptions[0].level === 3) {
      sideBarBackground = '#dcdcdcad';
    }
  }
  const sideBarStyle = {
    width: collapsed ? '93px' : '318px',
    background: collapsed ? 'white' : sideBarBackground,
  };

  const sideBarMobileStyle = {
    width: collapsed ? 0 : 318,
    height: '125%',
    transform: 'scale(0.8)',
    transformOrigin: 'top left',
    background: collapsed ? 'white' : sideBarBackground,
  };

  const mobileLeftBandStyle = {
    left: collapsed ? -50 : 44,
  };

  const sideBarContentMobileStyle = {
    height: 'calc(100% - 96px)',
  };

  const footerStyle = {
    height: collapsed ? 0 : '95px',
    borderTop: collapsed ? 'none' : '5px solid #71C6FF',
    fontSize: collapsed ? 0 : '13px',
  };

  const defaultTop = [100, 140, 180, 220, 260];
  const defaultDotStyle = (top, index) => ({
    width: '20px',
    height: '20px',
    background: navOptions[0].activeMenu - 1 === index ? '#0066CC' : '#71C6FF',
    position: 'absolute',
    top: `${top}px`,
    left: '36px',
    borderRadius: '10px',
    cursor: 'pointer',
    zIndex: 2,
    transition: '0.3s all ease',
  });

  const navIconStyle = (top, index) => ({
    display: navOptions[0].activeMenu - 1 === index && !collapsed ? 'block' : 'none',
    width: '26px',
    height: '26px',
    position: 'absolute',
    top: `${top - 3}px`,
    left: '55px',
    cursor: 'pointer',
    zIndex: 2,
    transition: '0.3s all ease',
  });

  const dotStyle = (option) => {
    const activeIndex = navOptions.findIndex((option) => option.active === true);
    let { top } = option;
    if (expand && !collapsed && option.id > activeIndex) {
      top += navOptions[activeIndex].subMenus.length * 70;
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
    if (expand && option.id > activeIndex) {
      top += navOptions[activeIndex].subMenus.length * 70;
    }

    return {
      width: '100%',
      position: 'absolute',
      top: `${top}px`,
      transition: '0.3s all ease',
    };
  };

  const subMenuStyle = {
    width: collapsed ? 0 : '230px',
    height: '100%',
    background: '#FFFFFFAD',
    position: 'absolute',
    fontSize: collapsed ? 0 : '17px',
    top: 0,
    right: 0,
  };

  const subMenuItemStyle = (option) => ({
    background: option.active && 'white',
    fontWeight: option.active && 'bold',
  });

  const handleSearchButton = (event) => {
    setSearchOpen(event);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleSearch = (event) => {
    const resultContent = [];
    const keyword = event.target.value;
    searchData.forEach((data) => {
      let after = null;
      let before = null;

      if (keyword) {
        const keyIndexList = [];
        let result;
        const regex = new RegExp(keyword, 'g');
        /* eslint-disable-next-line no-cond-assign */
        while ((result = regex.exec(data.content))) {
          keyIndexList.push(result.index);
        }
        keyIndexList.forEach((keywordIndex) => {
          if (keywordIndex > 30) {
            before = data.content.slice(keywordIndex - 30, keywordIndex);
            after = data.content.slice(keywordIndex + keyword.length, keywordIndex + keyword.length + 30);
          } else {
            before = data.content.slice(0, keywordIndex);
            after = data.content.slice(keywordIndex + keyword.length, 60);
          }

          resultContent.push({
            link: data.link,
            keyword,
            after,
            before,
          });
        });
      }
    });
    setSearchResult(resultContent);
  };

  return (
    <div className="side-bar" style={isMobile ? sideBarMobileStyle : sideBarStyle}>
      <div className="side-bar-left-band" style={isMobile ? mobileLeftBandStyle : null} />
      {!isMobile && (<div className="side-bar-header" style={{ background: backgroundColor(color) }} />)}
      <div className="side-bar-content" style={isMobile ? sideBarContentMobileStyle : null}>
        <SearchButton
          open={searchOpen}
          className="search-button"
          collapsed={collapsed}
          handleClick={handleSearchButton}
          handleChange={handleSearch}
        />
        <SearchResult
          searchResult={searchResult}
          open={searchOpen}
          handleClose={handleSearchClose}
          collapsed={collapsed}
        />
        <div className="side-bar-nav">
          {navOptions[0].level === 3 ? (
            <>
              {!collapsed && (
                <div
                  className="side-bar-submenu-left"
                  onClick={goBackToMenu(navOptions[0].parentLink)}
                />
              )}
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
                <div key={`dot_top_${top}`}>
                  <div
                    className="nav-dot"
                    style={defaultDotStyle(top, index)}
                    onClick={goBackToMenu(navOptions[0].parentLink)}
                  />
                  <img src={navIcon} alt="nav icon" style={navIconStyle(top, index)} />
                </div>
              ))}
            </>
          ) : (
            <>
              {navOptions.map((option) => (
                <div key={`nav_${option.id}`}>
                  <div
                    className="nav-dot"
                    style={dotStyle(option)}
                    onClick={handleDotClick(option)}
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
                      index={option.id}
                      collapsed={collapsed}
                      expand={expand}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="side-bar-footer d-flex align-items-center justify-content-center" style={footerStyle}>
        <span>
          Roche Confidential & Proprietary.
          <br />
          For Internal Use Only.
          <br />
          &copy;2019 F.Hoffmann-La Roche Ltd
          <br />
          Last Updated December 2019
        </span>
      </div>
      {isMobile && (
        <div className="page-content-cover" onClick={handleMenuClick} style={{ left: collapsed ? '-100vw' : 318 }} />
      )}
    </div>
  );
}

SideBar.propTypes = {
  isMobile: PropTypes.bool,
  collapsed: PropTypes.bool,
  navOptions: PropTypes.array.isRequired,
  color: PropTypes.string,
  handleMenuClick: PropTypes.func,
};

SideBar.defaultProps = {
  isMobile: false,
  collapsed: false,
  color: '',
  handleMenuClick: () => null,
};

export default SideBar;
