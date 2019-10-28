import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchButton from '../../atoms/SearchButton';

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

  const navDotsTop = [100, 140, 180, 220, 260];
  const dotStyle = {
    width: '20px',
    height: '20px',
    background: '#71C6FF',
    position: 'absolute',
    left: '36px',
    borderRadius: '10px',
  };

  return (
    <div className="side-bar" style={sideBarStyle}>
      <div className="side-bar-left-band" />
      <div className="side-bar-header" />
      <div className="side-bar-content">
        <SearchButton className="search-button" />
        <div className="side-bar-nav-dots">
          {navDotsTop.map((top) => (
            <div className="nav-dot" style={{ ...dotStyle, top: `${top}px` }} />
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
