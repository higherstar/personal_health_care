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

  return (
    <div className="side-bar" style={sideBarStyle}>
      <div className="side-bar-left-band" />
      <div className="side-bar-header" />
      <div className="side-bar-content">
        <SearchButton className="search-button" />
      </div>
      {!collapsed && (<div className="side-bar-footer" />)}
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
