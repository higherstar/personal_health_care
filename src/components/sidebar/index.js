import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SideBar(props) {
  const { collapsed } = props;

  return (
    <div className="side-bar" style={{ width: collapsed ? '93px' : '318px' }}>
      <div className="side-bar-left-band" />
      <div className="side-bar-header" />
      <div className="side-bar-content" />
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
