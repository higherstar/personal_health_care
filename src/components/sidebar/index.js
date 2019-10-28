import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchButton from '../../atoms/SearchButton';
import NavMenu from '../../atoms/NavMenu';

function SideBar(props) {
  const { collapsed } = props;

  const sideBarStyle = {
    width: collapsed ? '93px' : '318px',
    background: collapsed ? 'white' : '#FFFFFFAD',
  };

  const footerStyle = {
    height: collapsed ? '0' : '95px',
    borderTop: collapsed ? 'none' : '5px solid #71C6FF',
  };

  const navOptions = [
    {
      title: 'WELCOME',
      top: 100,
      active: true,
    },
    {
      title: 'FUTURE PATIENT JOURNEY',
      top: 140,
      active: false,
    },
    {
      title: 'SYSTEMS ENABLERS',
      top: 180,
      active: false,
    },
    {
      title: 'ABBREVIATION LIST',
      top: 220,
      active: false,
    },
    {
      title: 'ACKNOWLEDGEMENTS',
      top: 260,
      active: false,
    },
  ];

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

  return (
    <div className="side-bar" style={sideBarStyle}>
      <div className="side-bar-left-band" />
      <div className="side-bar-header" />
      <div className="side-bar-content">
        <SearchButton className="search-button" />
        <div className="side-bar-nav-dots">
          {navOptions.map((option) => (
            <>
              <div
                className="nav-dot"
                style={{ ...dotStyle, top: `${option.top}px`, background: option.active ? '#0066CC' : '#71C6FF' }}
              />
              <div className="nav-menu" style={{ ...navMenuStyle, top: `${option.top - 10}px` }}>
                <NavMenu active={option.active} title={option.title} />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="side-bar-footer" style={footerStyle} />
    </div>
  );
}

SideBar.propTypes = {
  collapsed: PropTypes.bool,
};

SideBar.defaultProps = {
  collapsed: false,
};

const mapStateToProps = (store) => ({
  collapsed: store.sideBar.collapsed,
});

export default connect(
  mapStateToProps,
)(SideBar);
