import React, { useState } from 'react';
import PropTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect';

function NavMenu(props) {
  const {
    className,
    title,
    active,
    collapsed,
  } = props;


  const [state, setState] = useState(true);
  const onClick = () => {
    setState(!state);
    // handleChange(state);
  };

  const contentStyle = {
    width: '100%',
    height: '40px',
    background: active ? 'white' : 'transparent',
    paddingLeft: '70px',
  };

  const listTitleStyle = {
    height: '40px',
    fontSize: collapsed ? 0 : '18px',
    fontFamily: 'Imago',
    fontWeight: active ? 'bold' : 'normal',
    cursor: 'pointer',
    transition: '0.4s all ease',
  };

  return (
    <div className={`${className}`} style={contentStyle}>
      <div className="d-flex align-items-center" style={listTitleStyle} onClick={onClick}>
        <span>{title}</span>
      </div>
    </div>
  );
}

NavMenu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

NavMenu.defaultProps = {
  className: 'nav-menu',
};

const mapStateToProps = (store) => ({
  collapsed: store.sideBar.collapsed,
});

export default connect(
  mapStateToProps,
)(NavMenu);
